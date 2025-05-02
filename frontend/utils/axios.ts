import { loadGrants, loadContributions } from "./staticData";

const instance = {
  get: async (url: string, options?: any) => {
    if (url === "/grants") {
      const grants = await loadGrants();
      
      if (options && options.params) {
        const { sort, filter, search } = options.params;
        let filteredGrants = [...grants];
        
        if (search) {
          const searchLower = search.toLowerCase();
          filteredGrants = filteredGrants.filter(grant => 
            grant.name.toLowerCase().includes(searchLower) || 
            (grant.description && grant.description.toLowerCase().includes(searchLower))
          );
        }
        
        if (filter) {
          if (filter === "funded") {
            filteredGrants = filteredGrants.filter(grant => grant.amountRaised > 0);
          } else if (filter === "underfunded") {
            filteredGrants = filteredGrants.filter(grant => grant.amountRaised === 0);
          }
        }
        
        if (sort) {
          switch(sort) {
            case "newest":
              filteredGrants.sort((a, b) => b.id.localeCompare(a.id));
              break;
            case "oldest":
              filteredGrants.sort((a, b) => a.id.localeCompare(b.id));
              break;
            case "most_funded":
              filteredGrants.sort((a, b) => (b.amountRaised || 0) - (a.amountRaised || 0));
              break;
            case "most_backed":
              filteredGrants.sort((a, b) => (b.contributions?.length || 0) - (a.contributions?.length || 0));
              break;
          }
        }
        
        return { data: filteredGrants };
      }
      
      return { data: grants };
    }
    
    if (url.startsWith("/pools/")) {
      const poolId = url.split('/')[2];
      const grants = await loadGrants();
      
      return { 
        data: { 
          id: poolId,
          name: "DIGSHIBUYA Pool",
          description: "A matching pool for DIGSHIBUYA projects",
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
          amountRaised: 50000,
          totalFundsInPool: 100000,
          grants: grants.slice(0, 5), // Include first 5 grants
          team: [
            {
              id: "user-1",
              name: "Test User",
              email: "test@example.com",
              image: null
            }
          ]
        } 
      };
    }
    
    if (url.startsWith("/qf/estimate")) {
      return { 
        data: {
          "round-1": {
            totalFundsInPool: 100000,
            grants: {
              ...(options?.params?.grantIds || []).reduce((acc: any, grantId: string, index: number) => {
                acc[grantId] = { 
                  qfAmount: Math.floor(Math.random() * 10000) + 5000 
                };
                return acc;
              }, {})
            }
          }
        } 
      };
    }
    
    return { data: [] };
  },
  post: async (url: string, data: any) => {
    if (url === "/grants") {
      return { data: { ...data, id: `mock-${Date.now()}` } };
    }
    
    if (url === "/grants/checkout") {
      return { 
        data: { 
          url: "#checkout-success",
          success: true 
        } 
      };
    }
    
    if (url.startsWith("/invites/")) {
      return { 
        data: { 
          success: true,
          message: "Invite claimed successfully"
        } 
      };
    }
    
    return { data: { success: true } };
  },
  patch: async (url: string, data: any) => {
    if (url.startsWith("/pools/")) {
      return { 
        data: { 
          ...data,
          id: url.split('/')[2],
          success: true 
        } 
      };
    }
    
    return { data: { success: true } };
  },
  withCredentials: true,
  defaults: {
    baseURL: "/",
    timeout: 5000
  }
};

export default instance;
