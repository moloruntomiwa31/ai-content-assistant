import { useMutation } from "@tanstack/react-query";
import { SocialCaptionOutput } from "@/types";

interface GenerateCaptionRequest {
	title: string;
	description?: string;
	platform?: "whatsapp" | "instagram" | "facebook" | "twitter" | "general";
}

export const useGenerateCaption = () => {
	return useMutation({
		mutationFn: async (data: GenerateCaptionRequest) => {
			const response = await fetch("/api/generate-caption", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || "Failed to generate caption");
			}

			return response.json() as Promise<SocialCaptionOutput>;
		},
	});
};
