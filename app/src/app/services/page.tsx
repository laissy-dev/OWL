import ServiceCard from '@/components/services/ServiceCard'

const services = [
  { name: 'PostgreSQL', status: 'running', type: 'database', port: 5432 },
  { name: 'Redis', status: 'running', type: 'cache', port: 6379 },
  { name: 'SonarQube', status: 'running', type: 'security', port: 9000 },
  { name: 'Prometheus', status: 'running', type: 'monitoring', port: 9090 },
  { name: 'Grafana', status: 'running', type: 'monitoring', port: 3000 },
] as const

export default function ServicesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Services Status</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.name}
            name={service.name}
            status={service.status}
            type={service.type}
            port={service.port}
          />
        ))}
      </div>
    </div>
  )
}