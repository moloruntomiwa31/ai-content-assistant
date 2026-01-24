import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
	features: string[];
	buttonText: string;
	colorScheme: "primary" | "secondary";
	link: string;
}

export default function FeatureCard({
	icon: Icon,
	title,
	description,
	features,
	buttonText,
	colorScheme,
	link,
}: FeatureCardProps) {
	const colors = {
		primary: {
			iconBg: "bg-primary-100 dark:bg-primary-900",
			iconColor: "text-primary-600",
			button: "bg-primary-600 hover:bg-primary-700",
		},
		secondary: {
			iconBg: "bg-secondary-100 dark:bg-secondary-900",
			iconColor: "text-secondary-600",
			button: "bg-secondary-600 hover:bg-secondary-700",
		},
	};

	return (
		<div className="group bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
			<div className="flex items-center mb-4">
				<div
					className={`w-14 h-14 ${colors[colorScheme].iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
				>
					<Icon className={`w-7 h-7 ${colors[colorScheme].iconColor}`} />
				</div>
				<h3 className="text-2xl font-bold text-neutral-900 dark:text-white ml-4">
					{title}
				</h3>
			</div>
			<p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-lg">
				{description}
			</p>
			<div className="space-y-4 mb-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className="flex items-center text-neutral-700 dark:text-neutral-300"
					>
						<div className="w-6 h-6 bg-accent-100 dark:bg-accent-900 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
							<Check className="w-4 h-4 text-accent-600" />
						</div>
						<span>{feature}</span>
					</div>
				))}
			</div>
			<Link
				href={link}
				className={`block text-center ${colors[colorScheme].button} text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95`}
			>
				{buttonText}
			</Link>
		</div>
	);
}
