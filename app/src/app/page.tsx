import EnvironmentsDashboard from '@/components/EnvironmentsDashboard';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl text-black font-bold mb-6">O.W.L Dashboard</h1>
      <EnvironmentsDashboard />
    </main>
  );
}