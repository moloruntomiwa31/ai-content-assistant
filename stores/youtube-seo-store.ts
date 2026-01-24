import { create } from 'zustand';
import { ContentInput, YouTubeSEOOutput, GenerationState } from '../types';

interface YouTubeSEOStore extends ContentInput, GenerationState {
  // Output
  optimizedTitle: string;
  optimizedTags: string;
  optimizedDescription: string;
  hashtags: string;
  
  // Copy states
  copiedTitle: boolean;
  copiedTags: boolean;
  copiedDescription: boolean;
  copiedHashtags: boolean;
  
  // Actions
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setThumbnail: (thumbnail: File | null) => void;
  setTargetKeywords: (keywords: string) => void;
  setOptimizedTitle: (title: string) => void;
  setOptimizedTags: (tags: string) => void;
  setOptimizedDescription: (description: string) => void;
  setHashtags: (hashtags: string) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  setError: (error: string | null) => void;
  
  // Copy actions
  setCopiedTitle: (copied: boolean) => void;
  setCopiedTags: (copied: boolean) => void;
  setCopiedDescription: (copied: boolean) => void;
  setCopiedHashtags: (copied: boolean) => void;
  
  // Methods
  generateOptimizedContent: () => Promise<void>;
  copyToClipboard: (text: string, type: 'title' | 'tags' | 'description' | 'hashtags') => void;
  reset: () => void;
}

const initialState = {
  title: '',
  description: '',
  thumbnail: null,
  targetKeywords: '',
  optimizedTitle: '',
  optimizedTags: '',
  optimizedDescription: '',
  hashtags: '',
  isGenerating: false,
  copiedTitle: false,
  copiedTags: false,
  copiedDescription: false,
  copiedHashtags: false,
  error: null,
  lastGenerated: null,
};

export const useYouTubeSEOStore = create<YouTubeSEOStore>((set, get) => ({
  ...initialState,
  
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setThumbnail: (thumbnail) => set({ thumbnail }),
  setTargetKeywords: (targetKeywords) => set({ targetKeywords }),
  setOptimizedTitle: (optimizedTitle) => set({ optimizedTitle }),
  setOptimizedTags: (optimizedTags) => set({ optimizedTags }),
  setOptimizedDescription: (optimizedDescription) => set({ optimizedDescription }),
  setHashtags: (hashtags) => set({ hashtags }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  setError: (error) => set({ error }),
  
  setCopiedTitle: (copiedTitle) => set({ copiedTitle }),
  setCopiedTags: (copiedTags) => set({ copiedTags }),
  setCopiedDescription: (copiedDescription) => set({ copiedDescription }),
  setCopiedHashtags: (copiedHashtags) => set({ copiedHashtags }),
  
  generateOptimizedContent: async () => {
    const { title, description } = get();
    if (!title.trim()) return;
    
    set({ isGenerating: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const optimizedTitle = `${title} | Complete Guide 2024 - MUST WATCH!`;
      const optimizedTags = `${title.toLowerCase().replace(/\s+/g, ", ")}, tutorial, guide, how to, step by step, beginner friendly, 2024, tips, tricks, learn, educational, complete guide, must watch, viral, trending, best practices, expert advice, professional, advanced, secrets`;
      const optimizedDescription = `🎯 ${title} - Everything You Need to Know!

${description}

🔥 In this comprehensive guide, you'll discover:
✅ Step-by-step instructions
✅ Pro tips and tricks
✅ Common mistakes to avoid
✅ Real-world examples

⏰ Timestamps:
00:00 Introduction
02:30 Getting Started
05:45 Advanced Techniques
08:20 Final Tips

💡 Don't forget to LIKE this video if it helped you and SUBSCRIBE for more amazing content!

🔔 Turn on notifications to never miss our latest uploads!

#${title.replace(/\s+/g, "")} #Tutorial #Guide #2024 #MustWatch #Educational #HowTo #Tips #Tricks #Learn`;
      
      const hashtags = "#Tutorial #Guide #2024 #Educational #HowTo #Tips #Viral #MustWatch #Learn #Success #Growth #Content #YouTube #SEO #Trending";
      
      set({ 
        optimizedTitle,
        optimizedTags,
        optimizedDescription,
        hashtags,
        isGenerating: false,
        lastGenerated: new Date()
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to generate optimized content',
        isGenerating: false 
      });
    }
  },
  
  copyToClipboard: (text: string, type: 'title' | 'tags' | 'description' | 'hashtags') => {
    navigator.clipboard.writeText(text);
    
    if (type === 'title') {
      set({ copiedTitle: true });
      setTimeout(() => set({ copiedTitle: false }), 2000);
    } else if (type === 'tags') {
      set({ copiedTags: true });
      setTimeout(() => set({ copiedTags: false }), 2000);
    } else if (type === 'description') {
      set({ copiedDescription: true });
      setTimeout(() => set({ copiedDescription: false }), 2000);
    } else {
      set({ copiedHashtags: true });
      setTimeout(() => set({ copiedHashtags: false }), 2000);
    }
  },
  
  reset: () => set(initialState),
}));