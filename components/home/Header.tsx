export default function Header() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          AI Content Assistant
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          Generate engaging content with AI-powered tools
        </p>
      </div>
    </header>
  );
}