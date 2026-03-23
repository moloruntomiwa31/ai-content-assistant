import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/lib/QueryProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-content-assistant-31.vercel.app";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "AI Content Assistant – Caption Generator & YouTube SEO Optimizer",
		template: "%s | AI Content Assistant",
	},
	description:
		"Generate viral social media captions and SEO-optimized YouTube titles, descriptions, and hashtags instantly with AI. Boost your content reach and engagement.",
	keywords: [
		"AI caption generator",
		"YouTube SEO optimizer",
		"social media captions",
		"AI content tool",
		"YouTube title generator",
		"hashtag generator",
		"content creator tools",
		"SEO description generator",
	],
	authors: [{ name: "AI Content Assistant" }],
	creator: "AI Content Assistant",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="antialiased">
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
