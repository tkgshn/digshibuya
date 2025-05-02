import { GrantResponse, GrantDetailResponse } from "../types/grant";
import { ContributionResponse } from "../types/contribution";
import { PoolResponse, PoolDetailResponse } from "../types/pool";

export const loadGrants = async (): Promise<GrantResponse[]> => {
  try {
    if (typeof window !== 'undefined') {
      const response = await fetch('/data/Grants.json');
      if (!response.ok) {
        throw new Error(`Failed to load grants: ${response.status}`);
      }
      return await response.json();
    }
    
    else {
      try {
        const grantsData = await import('../public/data/Grants.json');
        return (grantsData.default || grantsData) as unknown as GrantResponse[];
      } catch (e) {
        console.error('Error importing grants data:', e);
        return [];
      }
    }
  } catch (error) {
    console.error('Error loading grants:', error);
    return [];
  }
};

export const loadContributions = async (): Promise<ContributionResponse[]> => {
  try {
    if (typeof window !== 'undefined') {
      const response = await fetch('/data/Contribution.json');
      if (!response.ok) {
        throw new Error(`Failed to load contributions: ${response.status}`);
      }
      return await response.json();
    } else {
      try {
        const contributionsData = await import('../public/data/Contribution.json');
        return (contributionsData.default || contributionsData) as unknown as ContributionResponse[];
      } catch (e) {
        console.error('Error importing contributions data:', e);
        return [];
      }
    }
  } catch (error) {
    console.error('Error loading contributions:', error);
    return [];
  }
};

export const getGrantById = async (id: string): Promise<GrantDetailResponse | null> => {
  try {
    const grants = await loadGrants();
    const grant = grants.find(g => g.id === id);
    
    if (!grant) {
      return null;
    }
    
    return {
      ...grant,
      team: [],
      contributions: [],
      paymentAccount: {
        id: '',
        recipientAddress: '',
        providerId: '',
        provider: {
          id: '',
          name: '',
          type: 'STRIPE',
          acceptedCountries: [],
          denominations: [],
          website: '',
          schema: '',
          version: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    };
  } catch (error) {
    console.error('Error getting grant by ID:', error);
    return null;
  }
};

export const getContributionsForGrant = async (grantId: string): Promise<ContributionResponse[]> => {
  try {
    const contributions = await loadContributions();
    return contributions.filter(c => c.grantId === grantId);
  } catch (error) {
    console.error('Error getting contributions for grant:', error);
    return [];
  }
};

export const getMockPools = async (): Promise<PoolResponse[]> => {
  const pools: PoolResponse[] = [
    {
      id: "pool-1",
      name: "DIGSHIBUYA Pool 2023",
      description: "A matching pool for DIGSHIBUYA projects",
      image: null,
      paid: false,
      verified: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
      amountRaised: 50000
    },
    {
      id: "pool-2",
      name: "DIGSHIBUYA Pool 2024",
      description: "A new matching pool for DIGSHIBUYA projects",
      image: null,
      paid: false,
      verified: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
      amountRaised: 75000
    }
  ];
  
  return pools;
};
