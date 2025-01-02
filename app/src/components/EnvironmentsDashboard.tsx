'use client'

import { useEffect, useState } from 'react';
import { fetchEnvironments, fetchMetrics, fetchComparison } from '@/lib/api';
import type { Environment, PipelineMetric, EnvironmentComparison } from '@/types/api';

export default function EnvironmentsDashboard() {
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [metrics, setMetrics] = useState<Record<number, PipelineMetric[]>>({});
  const [comparisons, setComparisons] = useState<EnvironmentComparison[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Charger les environnements
        const envs = await fetchEnvironments();
        setEnvironments(envs);
        
        // Charger les métriques
        const metricsData: Record<number, PipelineMetric[]> = {};
        for (const env of envs) {
          const envMetrics = await fetchMetrics(env.id);
          metricsData[env.id] = envMetrics;
        }
        setMetrics(metricsData);

        // Charger les comparaisons si on a plus d'un environnement
        if (envs.length >= 2) {
          const comparison = await fetchComparison(envs[0].id, envs[1].id);
          setComparisons([comparison]);
        }

        setLoading(false);
        } catch (err: any) { 
        setError(err.message || 'Failed to load data');
        setLoading(false);
        }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-8">
      {/* Section Environnements */}
        <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Environments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environments.map(env => (
            <div key={env.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{env.name}</h3>
                <div className="space-y-2 text-gray-700">
                <p className="flex justify-between">
                    <span className="font-medium">Status:</span>
                    <span className={`px-2 py-1 rounded font-medium ${
                    env.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {env.status}
                    </span>
                </p>
                <p className="flex justify-between">
                    <span className="font-medium">CPU:</span>
                    <span>{env.specs.cpu}</span>
                </p>
                <p className="flex justify-between">
                    <span className="font-medium">Memory:</span>
                    <span>{env.specs.memory}</span>
                </p>
                <p className="flex justify-between">
                    <span className="font-medium">OS:</span>
                    <span>{env.specs.os_version}</span>
                </p>
                </div>

                {metrics[env.id]?.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold mb-2 text-gray-800">Latest Pipeline Metrics</h4>
                    <div className="space-y-2 text-gray-700">
                    <p className="flex justify-between">
                        <span className="font-medium">CPU Usage:</span>
                        <span className="text-blue-600">{metrics[env.id][0].execution_metrics.cpu_usage}%</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-medium">Memory Usage:</span>
                        <span className="text-blue-600">{metrics[env.id][0].execution_metrics.memory_usage}MB</span>
                    </p>
                    <p className="flex justify-between">
                        <span className="font-medium">Duration:</span>
                        <span className="text-blue-600">{metrics[env.id][0].execution_metrics.duration}s</span>
                    </p>
                    </div>
                </div>
                )}
            </div>
            ))}
        </div>
        </section>

      {/* Section Comparaisons */}
      {comparisons.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Environment Comparisons</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {comparisons.map((comparison, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-medium">
                  Comparison: Environment {comparison.env1_id} vs {comparison.env2_id}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Performance Difference</h4>
                    <p>{comparison.comparison_data.performance_diff}%</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Resource Usage Diff</h4>
                    <p>CPU: {comparison.comparison_data.resource_usage_diff.cpu}%</p>
                    <p>Memory: {comparison.comparison_data.resource_usage_diff.memory}MB</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}