"use client";

import { useState } from "react";
import Link from "next/link";
import {
	ArrowLeft,
	Video,
	Sparkles,
	RefreshCw,
	Hash,
	FileText,
	Target,
} from "lucide-react";
import FileUpload from "../../components/shared/FileUpload";
import InputField from "../../components/shared/InputField";
import OutputPanel from "../../components/shared/OutputPanel";

export default function YouTubeSEO() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [thumbnail, setThumbnail] = useState<File | null>(null);
	const [targetKeywords, setTargetKeywords] = useState("");

	const [optimizedTitle, setOptimizedTitle] = useState("");
	const [optimizedTags, setOptimizedTags] = useState("");
	const [optimizedDescription, setOptimizedDescription] = useState("");
	const [hashtags, setHashtags] = useState("");

	const [isGenerating, setIsGenerating] = useState(false);
	const [copiedTitle, setCopiedTitle] = useState(false);
	const [copiedTags, setCopiedTags] = useState(false);
	const [copiedDescription, setCopiedDescription] = useState(false);
	const [copiedHashtags, setCopiedHashtags] = useState(false);

	const generateOptimizedContent = async () => {
		if (!title.trim()) return;

		setIsGenerating(true);
		setTimeout(() => {
			setOptimizedTitle(`${title} | Complete Guide 2024 - MUST WATCH!`);

			setOptimizedTags(
				`${title.toLowerCase().replace(/\s+/g, ", ")}, tutorial, guide, how to, step by step, beginner friendly, 2024, tips, tricks, learn, educational, complete guide, must watch, viral, trending, best practices, expert advice, professional, advanced, secrets`,
			);

			setOptimizedDescription(`🎯 ${title} - Everything You Need to Know!

${description}

🔥 In this comprehensive guide, you'll discover:
✅ Step-by-step instructions
✅ Pro tips and tricks
✅ Common mistakes to avoid
✅ Real-world examples

⏰ Timestamps:
00:00 Introduction
02:30 Getting Started
05:45 Advanced Techniques
08:20 Final Tips

💡 Don't forget to LIKE this video if it helped you and SUBSCRIBE for more amazing content!

🔔 Turn on notifications to never miss our latest uploads!

#${title.replace(/\s+/g, "")} #Tutorial #Guide #2024 #MustWatch #Educational #HowTo #Tips #Tricks #Learn`);

			setHashtags(
				"#Tutorial #Guide #2024 #Educational #HowTo #Tips #Viral #MustWatch #Learn #Success #Growth #Content #YouTube #SEO #Trending",
			);

			setIsGenerating(false);
		}, 2500);
	};

	const copyToClipboard = (
		text: string,
		type: "title" | "tags" | "description" | "hashtags",
	) => {
		navigator.clipboard.writeText(text);
		if (type === "title") {
			setCopiedTitle(true);
			setTimeout(() => setCopiedTitle(false), 2000);
		} else if (type === "tags") {
			setCopiedTags(true);
			setTimeout(() => setCopiedTags(false), 2000);
		} else if (type === "description") {
			setCopiedDescription(true);
			setTimeout(() => setCopiedDescription(false), 2000);
		} else {
			setCopiedHashtags(true);
			setTimeout(() => setCopiedHashtags(false), 2000);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
			<header className="border-b border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-2 sm:gap-4">
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
							<div className="w-8 h-8 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center">
								<Video className="w-5 h-5 text-secondary-600" />
							</div>
							<h1 className="text-lg sm:text-2xl font-display font-bold text-neutral-900 dark:text-white break-words">
								YouTube SEO Optimizer
							</h1>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6 break-words">
						Optimize Your Videos for{" "}
						<span className="bg-gradient-to-r from-secondary-600 to-accent-600 bg-clip-text text-transparent">
							Maximum Reach
						</span>
					</h2>
					<p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-6 sm:mb-8 break-words">
						Generate SEO-optimized titles, descriptions, and hashtags that boost
						your video's discoverability and engagement.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
					{/* Input Section */}
					<div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-200 dark:border-neutral-700">
						<h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
							<Video className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600" />
							<span className="break-words">Your Video Content</span>
						</h3>

						<FileUpload
							file={thumbnail}
							onFileChange={setThumbnail}
							label="Video Thumbnail"
						/>

						<InputField
							label="Video Title"
							value={title}
							onChange={setTitle}
							placeholder="Enter your video title..."
							required
						/>

						<InputField
							label="Video Description"
							value={description}
							onChange={setDescription}
							placeholder="Describe your video content..."
							type="textarea"
						/>

						<InputField
							label="Target Keywords"
							value={targetKeywords}
							onChange={setTargetKeywords}
							placeholder="Enter keywords separated by commas..."
						/>

						<button
							onClick={generateOptimizedContent}
							disabled={!title.trim() || isGenerating}
							className="w-full bg-gradient-to-r from-secondary-600 to-accent-600 hover:from-secondary-700 hover:to-accent-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white font-semibold py-3 sm:py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
						>
							{isGenerating ? (
								<>
									<RefreshCw className="w-5 h-5 animate-spin" />
									Optimizing...
								</>
							) : (
								<>
									<Sparkles className="w-5 h-5" />
									Optimize for YouTube
								</>
							)}
						</button>
					</div>

					{/* Output Sections */}
					<div className="space-y-8">
						<OutputPanel
							title="Optimized Title"
							icon={FileText}
							content={optimizedTitle}
							placeholder={{
								icon: FileText,
								title: "SEO title will appear here",
								subtitle: "Enter video details and optimize",
							}}
							onCopy={() => copyToClipboard(optimizedTitle, "title")}
							onRegenerate={generateOptimizedContent}
							copied={copiedTitle}
							canRegenerate={!!title.trim() && !isGenerating}
						/>

						<OutputPanel
							title="SEO Tags/Keywords"
							icon={Target}
							content={optimizedTags}
							placeholder={{
								icon: Target,
								title: "Comma-separated tags will appear here",
								subtitle: "Optimized keywords for better reach",
							}}
							onCopy={() => copyToClipboard(optimizedTags, "tags")}
							onRegenerate={generateOptimizedContent}
							copied={copiedTags}
							canRegenerate={!!title.trim() && !isGenerating}
						/>
					</div>
				</div>

				{/* Additional Output Sections */}
				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
					<OutputPanel
						title="Optimized Description"
						icon={FileText}
						content={optimizedDescription}
						placeholder={{
							icon: FileText,
							title: "SEO description will appear here",
							subtitle: "Complete and engaging video description",
						}}
						onCopy={() => copyToClipboard(optimizedDescription, "description")}
						onRegenerate={generateOptimizedContent}
						copied={copiedDescription}
						canRegenerate={!!title.trim() && !isGenerating}
					/>

					<OutputPanel
						title="Trending Hashtags"
						icon={Hash}
						content={hashtags}
						placeholder={{
							icon: Hash,
							title: "Hashtags will appear here",
							subtitle: "Trending tags for maximum reach",
						}}
						onCopy={() => copyToClipboard(hashtags, "hashtags")}
						onRegenerate={generateOptimizedContent}
						copied={copiedHashtags}
						canRegenerate={!!title.trim() && !isGenerating}
					/>
				</div>

				{/* Features */}
				<div className="mt-16 sm:mt-20">
					<h3 className="text-2xl sm:text-3xl font-display font-bold text-center text-neutral-900 dark:text-white mb-8 sm:mb-12 break-words">
						YouTube SEO Features
					</h3>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						<div className="text-center group">
							<div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary-100 dark:bg-secondary-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Target className="w-7 h-7 sm:w-8 sm:h-8 text-secondary-600" />
							</div>
							<h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 break-words">
								SEO Optimization
							</h4>
							<p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base break-words">
								Keyword-rich titles and descriptions for better ranking
							</p>
						</div>
						<div className="text-center group">
							<div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-100 dark:bg-accent-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Hash className="w-7 h-7 sm:w-8 sm:h-8 text-accent-600" />
							</div>
							<h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 break-words">
								Trending Tags
							</h4>
							<p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base break-words">
								Current hashtags that boost discoverability
							</p>
						</div>
						<div className="text-center group sm:col-span-2 lg:col-span-1">
							<div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
								<Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" />
							</div>
							<h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 break-words">
								AI Enhancement
							</h4>
							<p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base break-words">
								Smart content optimization for maximum engagement
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
