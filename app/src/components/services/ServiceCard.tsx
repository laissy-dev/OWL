import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

interface ServiceCardProps {
  name: string
  status: 'running' | 'stopped'
  type: 'database' | 'cache' | 'monitoring' | 'security'
  port: number
}

export default function ServiceCard({ name, status, type, port }: ServiceCardProps) {
  const getTypeStyles = (type: ServiceCardProps['type']) => {
    const styles = {
      database: 'bg-blue-100 text-blue-800',
      cache: 'bg-purple-100 text-purple-800',
      monitoring: 'bg-green-100 text-green-800',
      security: 'bg-yellow-100 text-yellow-800',
    }
    return styles[type]
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{`Port: ${port}`}</p>
        </div>
        <div className={status === 'running' ? 'text-green-500' : 'text-red-500'}>
          {status === 'running' ? (
            <CheckCircleIcon className="h-6 w-6" />
          ) : (
            <XCircleIcon className="h-6 w-6" />
          )}
        </div>
      </div>
      <div className="mt-4">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeStyles(type)}`}>
          {type}
        </span>
      </div>
    </div>
  )
}