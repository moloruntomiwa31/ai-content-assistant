import { Copy, LucideIcon } from 'lucide-react';

interface OutputPanelProps {
  title: string;
  icon: LucideIcon;
  content: string;
  placeholder: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
  };
  onCopy: () => void;
  onRegenerate: () => void;
  copied: boolean;
  canRegenerate: boolean;
}

export default function OutputPanel({
  title,
  icon: Icon,
  content,
  placeholder,
  onCopy,
  onRegenerate,
  copied,
  canRegenerate
}: OutputPanelProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-200 dark:border-neutral-700">
      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600" />
        <span className="break-words">{title}</span>
      </h3>
      
      <div className="bg-neutral-50 dark:bg-neutral-700 rounded-2xl p-4 sm:p-6 mb-6 min-h-[250px] sm:min-h-[300px]">
        {content ? (
          <pre className="whitespace-pre-wrap text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed text-sm sm:text-base break-words">
            {content}
          </pre>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-neutral-500 dark:text-neutral-400">
              <placeholder.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              <p className="text-base sm:text-lg mb-2 wrap-break-words">{placeholder.title}</p>
              <p className="text-xs sm:text-sm wrap-break-words">{placeholder.subtitle}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button 
          onClick={onCopy}
          disabled={!content}
          className="flex-1 bg-accent-600 hover:bg-accent-700 disabled:bg-neutral-400 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy Content'}
        </button>
        <button 
          onClick={onRegenerate}
          disabled={!canRegenerate}
          className="flex-1 border border-neutral-300 dark:border-neutral-600 hover:border-accent-500 disabled:border-neutral-300 text-neutral-700 dark:text-neutral-300 hover:text-accent-600 disabled:text-neutral-400 font-medium py-3 px-4 rounded-xl transition-colors disabled:cursor-not-allowed text-sm sm:text-base"
        >
          Regenerate
        </button>
      </div>
    </div>
  );
}