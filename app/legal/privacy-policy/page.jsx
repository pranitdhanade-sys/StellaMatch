import fs from 'node:fs';
import path from 'node:path';

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), 'legal/privacy-policy.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <pre className="whitespace-pre-wrap text-sm leading-7 text-white/80">{content}</pre>
    </main>
  );
}
