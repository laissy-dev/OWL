export const API_URL = 'http://192.168.1.40:3001';

// Mock data
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
   },
   custom_metrics: {},
   start_time: new Date("2024-01-02T10:00:00Z"),
   end_time: new Date("2024-01-02T10:02:00Z")
 }],

 comparisons: [{
   env1_id: 1,
   env2_id: 2,
   pipeline_id: "pipeline-123",
   comparison_data: {
     performance_diff: 15,
     resource_usage_diff: {
       cpu: 10,
       memory: 256
     }
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

export const fetchComparison = async (env1Id: number, env2Id: number) => {
 try {
   const response = await fetch(`${API_URL}/api/comparisons/environments/${env1Id}/${env2Id}`);
   if (!response.ok) throw new Error();
   return response.json();
 } catch {
   return MOCK_DATA.comparisons[0];
 }
};