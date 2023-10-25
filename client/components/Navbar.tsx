"use client";

import Link from "next/link";
import logout from "@/lib/logout";

import { GithubIcon, TwitterIcon, Loader2 } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "./ui/use-toast";

type Data = {
	isLoggedIn: boolean;
	username: string;
};

const Navbar = () => {
	const [data, setData] = useState<Data | undefined>(undefined);
	const [loading, setLoading] = useState(false);

	const { toast } = useToast();

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const response = await axios.get("/api/other/status");
			setData(response.data);
		};
		fetchData();
		setLoading(false);
		toast({
			title: "Logged out successfully",
		});
	}, [toast]);

	return (
		<div className="container flex px-4 py-6 justify-between">
			<h1 className="font-semibold text-2xl">
				<Link href="/">
					Timeloom<span className="text-primary-custom">.</span>
				</Link>
			</h1>
			<div className="hidden md:flex gap-5 items-center">
				<Link
					href="https://x.com/inclinedadarsh/"
					className={`${buttonVariants({
						variant: "icon",
						size: "icon",
					})}`}
				>
					<TwitterIcon size={20} strokeWidth={1.5} />
				</Link>
				<Link
					href="https://github.com/inclinedadarsh/timeloom"
					className={`${buttonVariants({
						variant: "icon",
						size: "icon",
					})}`}
				>
					<GithubIcon size={20} strokeWidth={1.5} />
				</Link>
				{data?.isLoggedIn ? (
					<Button
						variant="outline"
						onClick={logout}
						disabled={loading}
					>
						{loading ? (
							<Loader2 size={20} className="animate-spin" />
						) : null}
						Logout
					</Button>
				) : (
					<Link
						href="/login"
						className={buttonVariants({ variant: "outline" })}
					>
						Login
					</Link>
				)}
				{data?.isLoggedIn ? (
					<Link
						href={`/${data.username}`}
						className={buttonVariants({ variant: "default" })}
					>
						Profile
					</Link>
				) : (
					<Link
						href="/signup"
						className={buttonVariants({ variant: "default" })}
					>
						Signup
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
