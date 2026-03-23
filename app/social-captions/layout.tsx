import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Social Media Caption Generator",
	description:
		"Generate engaging, emoji-rich social media captions for WhatsApp, Instagram, Facebook, and more. Upload your content and let AI craft the perfect caption instantly.",
	keywords: [
		"social media caption generator",
		"AI caption generator",
		"WhatsApp caption",
		"Instagram caption generator",
		"viral caption maker",
		"emoji caption generator",
		"content creator tool",
	],
	alternates: {
		canonical: "/social-captions",
	},
	openGraph: {
		title: "Social Media Caption Generator | AI Content Assistant",
		description:
			"Generate engaging, emoji-rich social media captions instantly with AI. Perfect for WhatsApp, Instagram, and Facebook.",
		url: "/social-captions",
	},
	twitter: {
		title: "Social Media Caption Generator | AI Content Assistant",
		description:
			"Generate engaging, emoji-rich social media captions instantly with AI.",
	},
};

export default function SocialCaptionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
