"use client";

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
import { useEffect } from "react";
import FileUpload from "../../components/shared/FileUpload";
import InputField from "../../components/shared/InputField";
import OutputPanel from "../../components/shared/OutputPanel";
import { Features } from "../../components/shared/Features";
import { useYouTubeSEOStore } from "../../stores";
import { useGenerateSEO } from "@/lib/hooks";

export default function YouTubeSEO() {
	const {
		title,
		description,
		thumbnail,
		targetKeywords,
		generatedSEO,
		copiedTitle,
		copiedTags,
		copiedDescription,
		copiedHashtags,
		error,
		setTitle,
		setDescription,
		setThumbnail,
		setTargetKeywords,
		setGeneratedSEO,
		setIsGenerating,
		setError,
		copyToClipboard,
	} = useYouTubeSEOStore();

	const { mutate: generateSEO, isPending } = useGenerateSEO();

	useEffect(() => {
		setIsGenerating(isPending);
	}, [isPending, setIsGenerating]);

	const handleGenerateOptimizedContent = () => {
		if (!title.trim()) return;

		setError(null);
		generateSEO(
			{ title, description, targetKeywords },
			{
				onSuccess: (data) => {
					setGeneratedSEO(data);
				},
				onError: (err) => {
					setError(err.message);
				},
			},
		);
	};

	const tagContent =
		generatedSEO?.tags && Array.isArray(generatedSEO.tags)
			? generatedSEO.tags.join(", ")
			: undefined;

	const hashtagContent =
		generatedSEO?.hashtags && Array.isArray(generatedSEO.hashtags)
			? generatedSEO.hashtags.join(", ")
			: undefined;

	const optimizedTitle = generatedSEO?.optimizedTitle || "";
	const optimizedDescription = generatedSEO?.optimizedDescription || "";
	const tagContentDisplay = tagContent || "";
	const hashtagContentDisplay = hashtagContent || "";

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
						your video&apos;s discoverability and engagement.
					</p>
				</div>

				{/* Input Section */}
				<div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-200 dark:border-neutral-700 mb-12 sm:mb-16">
					<h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
						<Video className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600" />
						<span className="break-words">Your Video Content</span>
					</h3>

					<FileUpload
						file={thumbnail ?? null}
						onFileChange={setThumbnail}
						label="Video Thumbnail"
					/>

					<InputField
						label="Video Title"
						value={title ?? ""}
						onChange={setTitle}
						placeholder="Enter your video title..."
						required
					/>

					<InputField
						label="Video Description"
						value={description ?? ""}
						onChange={setDescription}
						placeholder="Describe your video content..."
						type="textarea"
					/>

					<InputField
						label="Target Keywords"
						value={targetKeywords ?? ""}
						onChange={setTargetKeywords}
						placeholder="Enter keywords separated by commas..."
					/>

					{error && (
						<div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-200 text-sm">
							{error}
						</div>
					)}

					<button
						onClick={handleGenerateOptimizedContent}
						disabled={!title.trim() || isPending}
						className="w-full bg-gradient-to-r from-secondary-600 to-accent-600 hover:from-secondary-700 hover:to-accent-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white font-semibold py-3 sm:py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
					>
						{isPending ? (
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
				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
					<OutputPanel
						title="Optimized Title"
						icon={FileText}
						content={optimizedTitle}
						placeholder={{
							icon: FileText,
							title: "SEO title will appear here",
							subtitle: "Enter video details and optimize",
						}}
						onCopy={() =>
							generatedSEO &&
							copyToClipboard(generatedSEO.optimizedTitle, "title")
						}
						onRegenerate={handleGenerateOptimizedContent}
						copied={copiedTitle}
						canRegenerate={!!title.trim() && !isPending}
					/>

					<OutputPanel
						title="SEO Tags/Keywords"
						icon={Hash}
						content={tagContentDisplay}
						placeholder={{
							icon: Target,
							title: "Comma-separated tags will appear here",
							subtitle: "Optimized keywords for better reach",
						}}
						onCopy={() => tagContent && copyToClipboard(tagContent, "tags")}
						onRegenerate={handleGenerateOptimizedContent}
						copied={copiedTags}
						canRegenerate={!!title.trim() && !isPending}
					/>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
					<OutputPanel
						title="Optimized Description"
						icon={FileText}
						content={optimizedDescription}
						placeholder={{
							icon: FileText,
							title: "SEO description will appear here",
							subtitle: "Complete and engaging video description",
						}}
						onCopy={() =>
							generatedSEO &&
							copyToClipboard(generatedSEO.optimizedDescription, "description")
						}
						onRegenerate={handleGenerateOptimizedContent}
						copied={copiedDescription}
						canRegenerate={!!title.trim() && !isPending}
					/>

					<OutputPanel
						title="Trending Hashtags"
						icon={Hash}
						content={hashtagContentDisplay}
						placeholder={{
							icon: Hash,
							title: "Hashtags will appear here",
							subtitle: "Trending tags for maximum reach",
						}}
						onCopy={() =>
							hashtagContent && copyToClipboard(hashtagContent, "hashtags")
						}
						onRegenerate={handleGenerateOptimizedContent}
						copied={copiedHashtags}
						canRegenerate={!!title.trim() && !isPending}
					/>
				</div>

				{/* Features */}
				<div>
					<Features
						title="YouTube SEO Features"
						features={[
							{
								icon: Video,
								title: "YouTube Optimization",
								description:
									"Keyword-rich titles and descriptions for better ranking",
								color: "secondary",
							},
							{
								icon: Hash,
								title: "Trending Tags",
								description: "Current hashtags that boost discoverability",
								color: "accent",
							},
							{
								icon: Sparkles,
								title: "AI Enhancement",
								description:
									"Smart content optimization for maximum engagement",
								color: "primary",
							},
						]}
					/>
				</div>
			</main>
		</div>
	);
}
