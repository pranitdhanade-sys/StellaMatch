export default function AdminPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8">
      <h1 className="text-3xl font-bold">Admin Control Deck</h1>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-white/80">
        <li>User management</li>
        <li>Session monitoring</li>
        <li>Logs viewer</li>
        <li>Reports queue</li>
        <li>Trust score moderation</li>
      </ul>
    </main>
  );
}
