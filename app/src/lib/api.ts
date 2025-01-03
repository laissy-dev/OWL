export const API_URL = 'http://192.168.1.40:3001';

export const fetchEnvironments = async () => {
  const response = await fetch(`${API_URL}/api/environments`);
  if (!response.ok) throw new Error('Failed to fetch environments');
  return response.json();
};

// Métriques
export const fetchMetrics = async (environmentId: number) => {
  const response = await fetch(`${API_URL}/api/collectors/metrics/${environmentId}`);
  if (!response.ok) throw new Error('Failed to fetch metrics');
  return response.json();
};

// Comparaisons
export const fetchComparison = async (env1Id: number, env2Id: number) => {
  const response = await fetch(`${API_URL}/api/comparisons/environments/${env1Id}/${env2Id}`);
  if (!response.ok) throw new Error('Failed to fetch comparison');
  return response.json();
};