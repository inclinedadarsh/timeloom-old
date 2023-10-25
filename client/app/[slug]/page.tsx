"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { TimelineType, ProfileApiType } from "@/types";
import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";

const Page = ({ params }: { params: { slug: string } }) => {
	const [profile, setProfile] = useState<ProfileApiType | undefined>(
		undefined
	);
	const [timeline, setTimeline] = useState<TimelineType | undefined>(
		undefined
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const getData = async (slug: string) => {
			try {
				const user = await axios.get("/api/users/user", {
					params: {
						username: slug,
					},
					withCredentials: true,
				});
				setProfile(user.data);

				const timeline = await axios.get("/api/users/log", {
					params: {
						username: slug,
					},
				});
				setTimeline(timeline.data.logs);
			} catch (error) {
				setProfile(undefined);
			}
		};

		getData(params.slug);
		setLoading(false);
	}, [params.slug]);

	if (loading) {
		return (
			<div className="flex justify-center mt-20 gap-4">
				Loading <Loader2 className="animate-spin" />
			</div>
		);
	}

	if (profile?.doesExist === false) {
		return (
			<div className="max-w-2xl mx-auto mt-10 px-6">
				<h1 className="lg:text-5xl spacing tracking-normal text-4xl font-bold">
					/{params.slug}
				</h1>
				<p className="mt-4">
					Yayy 🎉. This username is available! If you want to claim
					this username, you can simply create a new account and claim
					this username.
				</p>
				<p className="mt-4">
					You&apos;ll be able to create your own timeline like{" "}
					<Link
						href="/adarsh"
						className="underline hover:no-underline text-link"
					>
						this one
					</Link>
					.
				</p>
			</div>
		);
	}

	return (
		<div className="container flex flex-col lg:flex-row gap-6">
			<div className="relative max-w-lg lg:max-w-none mx-auto lg:flex-1">
				{profile && (
					<Profile
						profile={profile.user}
						isSelf={profile.isSelf}
						className="py-12 sticky max-w-full top-0"
					/>
				)}
			</div>
			{timeline && timeline.length != 0 ? (
				<Timeline
					className="max-w-3xl lg:max-w-none mx-auto lg:flex-2"
					timeline={timeline}
				/>
			) : (
				<div className="max-w-3xl lg:max-w-none mx-auto lg:flex-2 flex justify-center items-center">
					User has not created any logs yet :&#40;
				</div>
			)}
		</div>
	);
};

export default Page;
