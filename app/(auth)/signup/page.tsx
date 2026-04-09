export default function SignupPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="mb-4 text-3xl font-bold">Create account</h1>
      <form className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
        <input aria-label="name" className="w-full rounded bg-black/30 p-2" placeholder="Name" />
        <input aria-label="city" className="w-full rounded bg-black/30 p-2" placeholder="City" />
        <input aria-label="email" className="w-full rounded bg-black/30 p-2" placeholder="Email" />
        <input aria-label="password" type="password" className="w-full rounded bg-black/30 p-2" placeholder="Password" />
        <button className="w-full rounded bg-stella-glow/40 p-2">Create</button>
      </form>
    </main>
  );
}
