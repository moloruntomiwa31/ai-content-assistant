import { create } from "zustand";
import { ContentInput, YouTubeSEOOutput, GenerationState } from "../types";

interface YouTubeSEOStore extends ContentInput, GenerationState {
	// Output
	generatedSEO: YouTubeSEOOutput | null;

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
	setGeneratedSEO: (seo: YouTubeSEOOutput | null) => void;
	setIsGenerating: (isGenerating: boolean) => void;
	setError: (error: string | null) => void;

	// Copy actions
	setCopiedTitle: (copied: boolean) => void;
	setCopiedTags: (copied: boolean) => void;
	setCopiedDescription: (copied: boolean) => void;
	setCopiedHashtags: (copied: boolean) => void;

	// Methods
	copyToClipboard: (
		text: string,
		type: "title" | "tags" | "description" | "hashtags",
	) => void;
	reset: () => void;
}

const initialState = {
	title: "",
	description: "",
	thumbnail: null,
	targetKeywords: "",
	generatedSEO: null,
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
	setGeneratedSEO: (generatedSEO) =>
		set({ generatedSEO, lastGenerated: new Date() }),
	setIsGenerating: (isGenerating) => set({ isGenerating }),
	setError: (error) => set({ error }),

	setCopiedTitle: (copiedTitle) => set({ copiedTitle }),
	setCopiedTags: (copiedTags) => set({ copiedTags }),
	setCopiedDescription: (copiedDescription) => set({ copiedDescription }),
	setCopiedHashtags: (copiedHashtags) => set({ copiedHashtags }),

	copyToClipboard: (
		text: string,
		type: "title" | "tags" | "description" | "hashtags",
	) => {
		navigator.clipboard.writeText(text);

		if (type === "title") {
			set({ copiedTitle: true });
			setTimeout(() => set({ copiedTitle: false }), 2000);
		} else if (type === "tags") {
			set({ copiedTags: true });
			setTimeout(() => set({ copiedTags: false }), 2000);
		} else if (type === "description") {
			set({ copiedDescription: true });
			setTimeout(() => set({ copiedDescription: false }), 2000);
		} else {
			set({ copiedHashtags: true });
			setTimeout(() => set({ copiedHashtags: false }), 2000);
		}
	},

	reset: () => set(initialState),
}));
