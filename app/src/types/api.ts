export interface Environment {
    id: number;
    name: string;
    status: string;
    specs: {
      cpu: string;
      memory: string;
      os_version: string;
    };
  }
  
  export interface PipelineMetric {
    environment_id: number;
    gitlab_pipeline_id: string;
    execution_metrics: {
      cpu_usage: number;
      memory_usage: number;
      duration: number;
    };
  }
  
  export interface EnvironmentComparison {
    env1_id: number;
    env2_id: number;
    pipeline_id: string;
    comparison_data: {
      performance_diff: number;
      resource_usage_diff: {
        cpu: number;
        memory: number;
      };
    };
  }