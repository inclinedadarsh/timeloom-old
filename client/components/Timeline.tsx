import { TimelineProps, ShortLogType, LongLogType, LogType } from "@/types";
import ShortLog from "./ShortLog";
import LongLog from "./LongLog";

const Timeline = ({ className, timeline }: TimelineProps) => {
	const isShortLog = (log: LogType): log is ShortLogType =>
		(log as LongLogType).description === undefined;

	const acitivityLogs = timeline.map(log => {
		if (isShortLog(log)) return <ShortLog log={log} key={log.title} />;
		else return <LongLog log={log} />;
	});

	return (
		<div className={`${className} w-full pt-12 relative`}>
			{acitivityLogs}
		</div>
	);
};

export default Timeline;
