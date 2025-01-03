export const API_URL = 'http://192.168.1.40:3001';

// Données mockées
const MOCK_DATA = {
  environments: [{
    id: 1,
    name: "linux",
    status: "active",
    specs: {
      cpu: "2 cores",
      memory: "4GB",
      os_version: "Ubuntu 22.04"
    }
  }],
  
  metrics: [{
    environment_id: 1,
    gitlab_pipeline_id: "pipeline-123",
    execution_metrics: {
      cpu_usage: 45.2,
      memory_usage: 1024,
      duration: 120
    }
  }]
};

export const fetchEnvironments = async () => {
  try {
    const response = await fetch(`${API_URL}/api/environments`);
    if (!response.ok) throw new Error();
    return response.json();
  } catch {
    return MOCK_DATA.environments;
  }
};

export const fetchMetrics = async (environmentId: number) => {
  try {
    const response = await fetch(`${API_URL}/api/collectors/metrics/${environmentId}`);
    if (!response.ok) throw new Error();
    return response.json();
  } catch {
    return MOCK_DATA.metrics;
  }
};