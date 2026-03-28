import { create } from "zustand";
import { ContentInput, SocialCaptionOutput, GenerationState } from "../types";

interface SocialCaptionStore extends ContentInput, GenerationState {
	// Output
	generatedCaption: SocialCaptionOutput | null;

	// Copy state
	copied: boolean;

	// Actions
	setTitle: (title: string) => void;
	setDescription: (description: string) => void;
	setGeneratedCaption: (caption: SocialCaptionOutput | null) => void;
	setIsGenerating: (isGenerating: boolean) => void;
	setCopied: (copied: boolean) => void;
	setError: (error: string | null) => void;

	// Methods
	copyToClipboard: () => void;
	reset: () => void;
}

const initialState = {
	title: "",
	description: "",
	generatedCaption: null,
	isGenerating: false,
	copied: false,
	error: null,
	lastGenerated: null,
};

export const useSocialCaptionStore = create<SocialCaptionStore>((set, get) => ({
	...initialState,

	setTitle: (title) => set({ title }),
	setDescription: (description) => set({ description }),
	setGeneratedCaption: (generatedCaption) =>
		set({ generatedCaption, lastGenerated: new Date() }),
	setIsGenerating: (isGenerating) => set({ isGenerating }),
	setCopied: (copied) => set({ copied }),
	setError: (error) => set({ error }),

	copyToClipboard: () => {
		const { generatedCaption } = get();
		if (generatedCaption?.caption) {
			navigator.clipboard.writeText(generatedCaption.caption);
			set({ copied: true });
			setTimeout(() => set({ copied: false }), 2000);
		}
	},

	reset: () => set(initialState),
}));
