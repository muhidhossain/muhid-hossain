import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface px-6 text-center text-ink">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-surface"
      >
        Back to home
      </Link>
    </main>
  );
}
