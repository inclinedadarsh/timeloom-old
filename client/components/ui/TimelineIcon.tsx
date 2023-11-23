import {
	GithubIcon,
	TwitterIcon,
	StarIcon,
	QuoteIcon,
	ThumbsDownIcon,
	ZapIcon,
} from "lucide-react";

import { TimelineIconProps } from "@/types";

const TimelineIcon = ({ icon, size }: TimelineIconProps) => {
	let sizeNum: number;
	let customSizeClass: string;
	if (size === "sm") {
		sizeNum = 18;
		customSizeClass = ` p-1 `;
	} else {
		sizeNum = 24;
		customSizeClass = ` p-2 `;
	}
	const renderIcon = (icon: string) => {
		switch (icon) {
			case "GitHub":
				return (
					<div
						className={`${customSizeClass} bg-[#fff] rounded-full shadow-md border-2 border-background w-max`}
					>
						<GithubIcon
							size={sizeNum}
							strokeWidth={0}
							fill="black"
						/>
					</div>
				);
			case "Twitter":
				return (
					<div
						className={`${customSizeClass} bg-[#26A7DE] rounded-full shadow-md border-2 border-background w-max`}
					>
						<TwitterIcon
							size={sizeNum}
							strokeWidth={0}
							fill="white"
						/>
					</div>
				);

			case "Star":
				return (
					<div
						className={`${customSizeClass} bg-[#00E6C4] rounded-full shadow-md border-2 border-background w-max`}
					>
						<StarIcon size={sizeNum} strokeWidth={0} fill="white" />
					</div>
				);
			case "Quote":
				return (
					<div
						className={`${customSizeClass} bg-[#4F3AF7] rounded-full shadow-md border-2 border-background w-max`}
					>
						<QuoteIcon
							size={sizeNum}
							strokeWidth={0}
							fill="white"
						/>
					</div>
				);
			case "ThumbsDown":
				return (
					<div
						className={`${customSizeClass} bg-[#EF4444] rounded-full shadow-md border-2 border-background w-max`}
					>
						<ThumbsDownIcon
							size={sizeNum}
							strokeWidth={0}
							fill="white"
						/>
					</div>
				);
			case "Zap":
				return (
					<div
						className={`${customSizeClass} bg-[#4F3AF7] rounded-full shadow-md border-2 border-background w-max`}
					>
						<ZapIcon size={sizeNum} strokeWidth={0} fill="white" />
					</div>
				);
			default:
				return (
					<div
						className={`${customSizeClass} bg-[#4F3AF7] rounded-full shadow-md border-2 border-background w-max`}
					>
						<ZapIcon size={sizeNum} strokeWidth={0} fill="white" />
					</div>
				);
		}
	};

	return (
		<div className="h-11 w-11 flex justify-center items-center relative z-1">
			{renderIcon(icon)}
		</div>
	);
};

export default TimelineIcon;
