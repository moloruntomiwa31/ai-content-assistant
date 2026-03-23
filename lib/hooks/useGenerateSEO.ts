import { useMutation } from "@tanstack/react-query";
import { YouTubeSEOOutput } from "@/types";

interface GenerateSEORequest {
	title: string;
	description?: string;
	targetKeywords?: string;
}

export const useGenerateSEO = () => {
	return useMutation({
		mutationFn: async (data: GenerateSEORequest) => {
			const response = await fetch("/api/generate-seo", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.error || "Failed to generate SEO content");
			}

			return response.json() as Promise<YouTubeSEOOutput>;
		},
	});
};
