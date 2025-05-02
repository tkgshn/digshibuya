import { GrantResponse } from "../types/grant";

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

export const loadContributions = async () => {
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
        return contributionsData.default || contributionsData;
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
