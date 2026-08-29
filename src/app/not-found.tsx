import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-4 max-w-md">
        <span className="text-4xl font-mono font-bold text-indigo-400">404</span>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold">Page Not Found</h1>
        <p className="text-sm text-foreground/60">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
