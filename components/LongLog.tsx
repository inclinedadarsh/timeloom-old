import Link from "next/link";

import { LongLogProps } from "@/types";
import TimelineIcon from "./ui/TimelineIcon";
import { MapPinIcon, CalendarIcon, Link2Icon } from "lucide-react";

const LongLog = ({ className, log, ...props }: LongLogProps) => {
	return (
		<div
			className={`${className} flex relative py-2 gap-3 md:gap-5`}
			{...props}
		>
			<div className="w-[2px] h-1/5 bg-border absolute top-0 left-5 z-0" />
			<div className="w-[2px] h-[90%] bg-border absolute top-[10%] left-5 z-0" />
			<TimelineIcon icon={log.icon} size="lg" />
			<div className="flex-1 flex flex-col gap-3 px-5 py-4 border-2 border-border rounded-xl bg-muted">
				<h2 className="font-medium text-base md:text-xl lg:text-lg border-none">
					{log.title}
				</h2>
				<div className="flex gap-2.5 lg:gap-5 flex-wrap">
					<div className="flex gap-2 items-center">
						<MapPinIcon size={20} strokeWidth={1.5} />
						<span>{log.location}</span>
					</div>
					{log.link && (
						<Link
							href={log.link?.url}
							className="flex gap-2 items-center text-link hover:underline hover:decoration-link"
						>
							<Link2Icon size={20} strokeWidth={1.5} />
							<span className="">{log.link?.text}</span>
						</Link>
					)}
					<div className="flex gap-2 items-center text-muted-foreground">
						<CalendarIcon size={20} strokeWidth={1.5} />
						<span className="">
							{log.date.toLocaleDateString()}
						</span>
					</div>
				</div>
				<p className="text-muted-foreground text-sm md:text-base">
					{log.description}
				</p>
			</div>
		</div>
	);
};

export default LongLog;
