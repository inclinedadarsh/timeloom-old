import Link from "next/link";
import { ShortLogProps } from "@/types";
import TimelineIcon from "./ui/TimelineIcon";

import { ExternalLink } from "lucide-react";

const ShortLog = ({ className, log, ...props }: ShortLogProps) => {
	return (
		<div
			className={`${className} flex gap-3 md:gap-5 items-center relative py-2`}
			{...props}
		>
			<div className="w-[2px] h-1/2 bg-border absolute top-0 left-5 z-0" />
			<div className="w-[2px] h-1/2 bg-border absolute top-1/2 left-5 z-0" />
			<TimelineIcon icon={log.icon} size="sm" />
			<div className="flex-1 flex items-center flex-wrap">
				<h2 className="text-base md:text-lg font-normal border-0 mr-5">
					{log.title}
				</h2>
				{log.link && (
					<Link
						href={log.link.url}
						className="text-sm text-link hover:underline hover:decoration-link flex items-start gap-2"
					>
						{log.link.text}
						<ExternalLink size={20} strokeWidth={1.5} />
					</Link>
				)}
				<p className="text-sm text-muted-foreground pl-2">
					{log.date.toLocaleDateString()}
				</p>
			</div>
		</div>
	);
};

export default ShortLog;
