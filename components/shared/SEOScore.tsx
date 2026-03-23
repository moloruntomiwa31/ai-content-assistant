import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface SEOScoreProps {
	score?: number;
	isLoading?: boolean;
}

export function SEOScore({ score = 0, isLoading = false }: SEOScoreProps) {
	const [displayScore, setDisplayScore] = useState(0);

	useEffect(() => {
		if (isLoading) return;

		const interval = setInterval(() => {
			setDisplayScore((prev) => {
				if (prev < score) {
					return Math.min(prev + 2, score);
				}
				return prev;
			});
		}, 20);

		return () => clearInterval(interval);
	}, [score, isLoading]);

	const getScoreColor = () => {
		if (displayScore >= 80) return "#10b981";
		if (displayScore >= 60) return "#f59e0b";
		return "#ef4444";
	};

	const getScoreLabel = () => {
		if (displayScore >= 80) return "🎯 Excellent";
		if (displayScore >= 60) return "👍 Good";
		if (displayScore > 0) return "⚠️ Needs Work";
		return "Generate to see score";
	};

	return (
		<div className="flex flex-col items-center justify-center p-6">
			<div className="w-40 h-40">
				<CircularProgressbar
					value={displayScore}
					text={`${displayScore}%`}
					styles={buildStyles({
						rotation: 0.25,
						strokeLinecap: "round",
						textSize: "30px",
						pathTransitionDuration: 0.3,
						pathColor: getScoreColor(),
						textColor: getScoreColor(),
						trailColor: "rgb(229, 231, 235)",
						backgroundColor: "#3e98c7",
					})}
				/>
			</div>
			<div className="mt-4 text-center">
				<p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
					{getScoreLabel()}
				</p>
			</div>
		</div>
	);
}
