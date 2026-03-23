'use client';

import { LucideIcon } from 'lucide-react';

export interface Feature {
	icon: LucideIcon;
	title: string;
	description: string;
	color: 'primary' | 'secondary' | 'accent';
}

interface FeaturesProps {
	title: string;
	features: Feature[];
}

export function Features({ title, features }: FeaturesProps) {
	const colorClasses = {
		primary: 'bg-primary-100 dark:bg-primary-900 text-primary-600',
		secondary: 'bg-secondary-100 dark:bg-secondary-900 text-secondary-600',
		accent: 'bg-accent-100 dark:bg-accent-900 text-accent-600',
	};

	return (
		<div className="mt-16 sm:mt-20">
			<h3 className="text-2xl sm:text-3xl font-display font-bold text-center text-neutral-900 dark:text-white mb-8 sm:mb-12 break-words">
				{title}
			</h3>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				{features.map((feature) => {
					const Icon = feature.icon;
					const colorClass = colorClasses[feature.color];

					return (
						<div key={feature.title} className="text-center group">
							<div
								className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${colorClass}`}
							>
								<Icon className="w-7 h-7 sm:w-8 sm:h-8" />
							</div>
							<h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 break-words">
								{feature.title}
							</h4>
							<p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base break-words">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
