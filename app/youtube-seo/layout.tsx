import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "YouTube SEO Optimizer",
	description:
		"Optimize your YouTube videos for maximum reach with AI-generated SEO titles, descriptions, tags, and trending hashtags. Rank higher and grow your channel faster.",
	keywords: [
		"YouTube SEO optimizer",
		"YouTube title generator",
		"YouTube description generator",
		"YouTube tags generator",
		"YouTube hashtag generator",
		"video SEO tool",
		"YouTube ranking tool",
		"content creator SEO",
	],
	alternates: {
		canonical: "/youtube-seo",
	},
	openGraph: {
		title: "YouTube SEO Optimizer | AI Content Assistant",
		description:
			"Optimize your YouTube videos with AI-generated SEO titles, descriptions, tags, and trending hashtags. Rank higher and grow faster.",
		url: "/youtube-seo",
	},
	twitter: {
		title: "YouTube SEO Optimizer | AI Content Assistant",
		description:
			"Optimize your YouTube videos with AI-generated SEO titles, descriptions, tags, and trending hashtags.",
	},
};

export default function YouTubeSEOLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
