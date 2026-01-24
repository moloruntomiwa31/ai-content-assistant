export interface SocialCaptionOutput {
  caption: string;
  hashtags: string[];
  emojis: string[];
  platform: 'whatsapp' | 'instagram' | 'facebook' | 'twitter' | 'general';
}

export interface YouTubeSEOOutput {
  optimizedTitle: string;
  optimizedDescription: string;
  tags: string[];
  hashtags: string[];
  thumbnailSuggestions?: string[];
  seoScore?: number;
}

export interface ContentInput {
  title: string;
  description: string;
  thumbnail?: File | null;
  targetKeywords?: string;
  platform?: string;
}

export interface GenerationState {
  isGenerating: boolean;
  error: string | null;
  lastGenerated: Date | null;
}