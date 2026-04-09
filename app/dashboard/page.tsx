import { DashboardCards } from '@/components/DashboardCards';

export default function DashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-6 px-6 py-8">
      <h1 className="text-3xl font-bold">Marketplace Dashboard</h1>
      <DashboardCards />
    </main>
  );
}
