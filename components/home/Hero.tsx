import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
	return (
		<section className="mb-20">
			<div className="mx-auto flex flex-col md:flex-row gap-4 lg:gap-16 items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-0">
				<div>
					<h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
						Transform Your Content Creation
					</h2>
					<p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
						Boost your social media presence and YouTube performance with
						AI-powered content generation.
					</p>
					<div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
						<Link href="/social-captions" className="group w-full lg:w-fit">
							<button className="bg-gradient-to-r w-full from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
								Try It Now - It&apos;s Free!
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
						</Link>
						<Link href="/youtube-seo" className="w-full lg:w-fit border-2 border-neutral-300 dark:border-neutral-600 hover:border-primary-500 dark:hover:border-primary-400 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
							<Play className="w-5 h-5" />
							Youtube SEO
						</Link>
					</div>
				</div>
				<div className="relative group">
					<div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
					<div className="relative">
						<Image
							src="/home-1.png"
							alt="AI Content Creation Dashboard"
							width={900}
							height={500}
							className="rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 w-full"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
