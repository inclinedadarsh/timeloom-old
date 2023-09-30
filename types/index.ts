export interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	timeline: TimelineType;
}

type TagType = "Founder" | "First 100" | "Dev";

export interface ProfileType {
	name: string;
	username: string;
	tags?: TagType[];
	bio: string;
	socials?: {
		email?: string;
		github?: string;
		twitter?: string;
		instagram?: string;
		linkedin?: string;
		web?: string;
	};
	button?: {
		text: string;
		link: string;
	};
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
	type: TagType;
	className?: string;
}

export interface SocialsProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	socialLinks: ProfileType["socials"];
}

export type TimelineIconType =
	| "GitHub"
	| "Twitter"
	| "Star"
	| "Quote"
	| "ThumbsDown"
	| "Zap";

export type TimelineIconProps = {
	icon: TimelineIconType;
	size: "sm" | "lg";
};

export type ShortLogType = {
	title: string;
	date: Date;
	link?: {
		text: string;
		url: string;
	};
	icon: TimelineIconType;
};

export type LongLogType = {
	title: string;
	date: Date;
	link?: {
		text: string;
		url: string;
	};
	icon: TimelineIconType;
	description: string;
	location?: string;
};

export type LogType = ShortLogType | LongLogType;
export type TimelineType = LogType[];

export interface ShortLogProps extends React.HTMLAttributes<HTMLDivElement> {
	log: ShortLogType;
	className?: string;
}

export interface LongLogProps extends React.HTMLAttributes<HTMLDivElement> {
	log: LongLogType;
	className?: string;
}

type HomeCard = {
	title: string;
	description: string;
	link: {
		text: string;
		url: string;
	};
};

export type HomeCards = HomeCard[];
