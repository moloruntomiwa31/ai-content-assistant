import { create } from 'zustand';
import { ContentInput, SocialCaptionOutput, GenerationState } from '../types';

interface SocialCaptionStore extends ContentInput, GenerationState {
  // Output
  generatedCaption: string;
  
  // Copy state
  copied: boolean;
  
  // Actions
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setThumbnail: (thumbnail: File | null) => void;
  setGeneratedCaption: (caption: string) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  setCopied: (copied: boolean) => void;
  setError: (error: string | null) => void;
  
  // Methods
  generateCaption: () => Promise<void>;
  copyToClipboard: () => void;
  reset: () => void;
}

const initialState = {
  title: '',
  description: '',
  thumbnail: null,
  generatedCaption: '',
  isGenerating: false,
  copied: false,
  error: null,
  lastGenerated: null,
};

export const useSocialCaptionStore = create<SocialCaptionStore>((set, get) => ({
  ...initialState,
  
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setThumbnail: (thumbnail) => set({ thumbnail }),
  setGeneratedCaption: (generatedCaption) => set({ generatedCaption, lastGenerated: new Date() }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  setCopied: (copied) => set({ copied }),
  setError: (error) => set({ error }),
  
  generateCaption: async () => {
    const { title, description } = get();
    if (!title.trim()) return;
    
    set({ isGenerating: true, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const sampleCaption = `🚀 ${title} 🎯

${description}

✨ This is absolutely GAME-CHANGING! 💯

🔥 Key highlights:
• Amazing results guaranteed
• Easy to follow steps
• Perfect for beginners

💬 What do you think? Drop your thoughts below! 👇

#ContentCreation #AI #SocialMedia #Viral #MustWatch`;
      
      set({ 
        generatedCaption: sampleCaption, 
        isGenerating: false,
        lastGenerated: new Date()
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to generate caption',
        isGenerating: false 
      });
    }
  },
  
  copyToClipboard: () => {
    const { generatedCaption } = get();
    navigator.clipboard.writeText(generatedCaption);
    set({ copied: true });
    setTimeout(() => set({ copied: false }), 2000);
  },
  
  reset: () => set(initialState),
}));