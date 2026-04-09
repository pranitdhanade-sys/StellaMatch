import Link from 'next/link';
import { HeroScene } from '@/components/HeroScene';

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl space-y-6 px-6 py-10">
      <nav className="flex items-center justify-between">
        <span className="font-semibold">StellaMatch</span>
        <div className="space-x-4 text-sm">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </div>
      </nav>
      <HeroScene />
    </main>
  );
}
