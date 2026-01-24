"use client";

import { useState } from "react";
import Link from "next/link";
import {
	ArrowLeft,
	MessageCircle,
	Upload,
	Sparkles,
	Copy,
	RefreshCw,
} from "lucide-react";

export default function SocialCaptions() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [thumbnail, setThumbnail] = useState<File | null>(null);
	const [generatedCaption, setGeneratedCaption] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);
	const [copied, setCopied] = useState(false);

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) setThumbnail(file);
	};

	const generateCaption = async () => {
		if (!title.trim()) return;

		setIsGenerating(true);
		setTimeout(() => {
			const sampleCaption = `🚀 ${title} 🎯

${description}

✨ This is absolutely GAME-CHANGING! 💯

🔥 Key highlights:
• Amazing results guaranteed
• Easy to follow steps
• Perfect for beginners

💬 What do you think? Drop your thoughts below! 👇

#ContentCreation #AI #SocialMedia #Viral #MustWatch`;
			setGeneratedCaption(sampleCaption);
			setIsGenerating(false);
		}, 2000);
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(generatedCaption);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
			<header className="border-b border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-4">
						<Link
							href="/"
							className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
						>
							<ArrowLeft className="w-5 h-5" />
							<span className="hidden sm:inline">Back to Home</span>
							<span className="sm:hidden">Back</span>
						</Link>
						<div className="h-6 w-px bg-neutral-300 dark:bg-neutral-600"></div>
						<div className="flex items-center gap-3">
							<div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
								<MessageCircle className="w-5 h-5 text-primary-600" />
							</div>
							<h1 className="text-lg lg:text-2xl font-display font-bold text-neutral-900 dark:text-white">
								Social Media Caption Generator
							</h1>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="text-center mb-16">
					<h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
						Transform Your Content Into{" "}
						<span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
							Viral Captions
						</span>
					</h2>
					<p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
						Upload your thumbnail, title, and description. Our AI will create
						engaging, emoji-rich captions perfect for WhatsApp and social
						sharing.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700">
						<h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
							<Upload className="w-6 h-6 text-primary-600" />
							Upload Your Content
						</h3>

						<div className="mb-6">
							<label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
								Thumbnail Image
							</label>
							<div className="relative">
								<input
									type="file"
									accept="image/*"
									onChange={handleFileUpload}
									className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
								/>
								<div className="border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-2xl p-8 text-center hover:border-primary-500 transition-colors">
									{thumbnail ? (
										<div className="space-y-2">
											<div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl mx-auto flex items-center justify-center">
												<Upload className="w-8 h-8 text-primary-600" />
											</div>
											<p className="text-neutral-700 dark:text-neutral-300 font-medium">
												{thumbnail.name}
											</p>
											<p className="text-sm text-neutral-500">
												Click to change
											</p>
										</div>
									) : (
										<>
											<Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
											<p className="text-neutral-600 dark:text-neutral-400 mb-2">
												Drop your thumbnail here or click to browse
											</p>
											<p className="text-sm text-neutral-500">
												PNG, JPG up to 10MB
											</p>
										</>
									)}
								</div>
							</div>
						</div>

						<div className="mb-6">
							<label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
								Video/Post Title *
							</label>
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Enter your content title..."
								className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
							/>
						</div>

						<div className="mb-8">
							<label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
								Brief Description
							</label>
							<textarea
								rows={4}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Describe your content briefly..."
								className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
							/>
						</div>

						<button
							onClick={generateCaption}
							disabled={!title.trim() || isGenerating}
							className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:hover:scale-100"
						>
							{isGenerating ? (
								<>
									<RefreshCw className="w-5 h-5 animate-spin" />
									Generating...
								</>
							) : (
								<>
									<Sparkles className="w-5 h-5" />
									Generate Caption
								</>
							)}
						</button>
					</div>

					<div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700">
						<h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
							<Sparkles className="w-6 h-6 text-accent-600" />
							Generated Caption
						</h3>

						<div className="bg-neutral-50 dark:bg-neutral-700 rounded-2xl p-6 mb-6 min-h-[300px]">
							{generatedCaption ? (
								<pre className="whitespace-pre-wrap text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
									{generatedCaption}
								</pre>
							) : (
								<div className="flex items-center justify-center h-full text-center text-neutral-500 dark:text-neutral-400">
									<div>
										<MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
										<p className="text-lg mb-2">
											Your caption will appear here
										</p>
										<p className="text-sm">
											Enter a title and click generate to get started
										</p>
									</div>
								</div>
							)}
						</div>

						<div className="flex gap-3">
							<button
								onClick={copyToClipboard}
								disabled={!generatedCaption}
								className="flex-1 bg-accent-600 hover:bg-accent-700 disabled:bg-neutral-400 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:cursor-not-allowed"
							>
								<Copy className="w-4 h-4" />
								{copied ? "Copied!" : "Copy Caption"}
							</button>
							<button
								onClick={generateCaption}
								disabled={!title.trim() || isGenerating}
								className="flex-1 border border-neutral-300 dark:border-neutral-600 hover:border-accent-500 disabled:border-neutral-300 text-neutral-700 dark:text-neutral-300 hover:text-accent-600 disabled:text-neutral-400 font-medium py-3 px-4 rounded-xl transition-colors disabled:cursor-not-allowed"
							>
								Regenerate
							</button>
						</div>
					</div>
				</div>

				<div className="mt-20">
					<h3 className="text-3xl font-display font-bold text-center text-neutral-900 dark:text-white mb-12">
						What Makes Our Captions Special?
					</h3>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center group">
							<div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Sparkles className="w-8 h-8 text-primary-600" />
							</div>
							<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
								AI-Powered Enhancement
							</h4>
							<p className="text-neutral-600 dark:text-neutral-400">
								Advanced grammar correction and style improvement
							</p>
						</div>
						<div className="text-center group">
							<div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<MessageCircle className="w-8 h-8 text-secondary-600" />
							</div>
							<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
								Emoji Integration
							</h4>
							<p className="text-neutral-600 dark:text-neutral-400">
								Perfect emoji placement for maximum engagement
							</p>
						</div>
						<div className="text-center group">
							<div className="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Upload className="w-8 h-8 text-accent-600" />
							</div>
							<h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
								Platform Optimized
							</h4>
							<p className="text-neutral-600 dark:text-neutral-400">
								Formatted perfectly for WhatsApp and social media
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
