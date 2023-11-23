import Link from "next/link";

import {
	Github,
	Linkedin,
	Twitter,
	Mail,
	Globe2,
	Instagram,
} from "lucide-react";

import { buttonVariants } from "./button";

import { ProfileType, SocialsProps } from "@/types";

const Socials = ({ className, socialLinks, ...props }: SocialsProps) => {
	const renderIcon = (platform: string) => {
		switch (platform) {
			case "github":
				return <Github size={20} strokeWidth={1.5} />;
			case "linkedin":
				return <Linkedin size={20} strokeWidth={1.5} />;
			case "twitter":
				return <Twitter size={20} strokeWidth={1.5} />;
			case "email":
				return <Mail size={20} strokeWidth={1.5} />;
			case "web":
				return <Globe2 size={20} strokeWidth={1.5} />;
			case "instagram":
				return <Instagram size={20} strokeWidth={1.5} />;
			default:
				return <></>;
		}
	};

	return (
		<div className={`${className} flex gap-4 mt-12 flex-wrap`} {...props}>
			{socialLinks &&
				Object.keys(socialLinks).map(platform => {
					const link =
						socialLinks[platform as keyof ProfileType["socials"]];
					if (link)
						return (
							<Link
								className={buttonVariants({
									variant: "icon",
									size: "icon",
								})}
								aria-label={platform}
								href={link}
								key={platform}
								rel="noopener noreferrer"
								target="_blank"
							>
								{renderIcon(
									platform as keyof ProfileType["socials"]
								)}
							</Link>
						);
				})}
		</div>
	);
};

export default Socials;
