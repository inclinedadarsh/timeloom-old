import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";

import UsernameCheck from "@/components/UsernameCheck";

import bgGrid from "@/assets/bg-grid.png";
import toyMockup from "@/assets/toy-mockup.png";
import { ArrowUpRight, Check } from "lucide-react";

import { CARDS } from "@/constants";

export default function Home() {
	return (
		<main className="px-6 md:px-10 mb-6">
			<div className="bg-radial -z-10 absolute w-full h-screen top-0 left-0" />
			<header className="max-w-3xl mx-auto flex flex-col gap-8 justify-center text-center lg:mt-20 mt-16 relative">
				<Image
					src={bgGrid}
					alt="Background Grid Image"
					className="opacity-40 absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none"
									/>
				<h1 className="scroll-m-20 text-4xl font-semibold leading-tight lg:leading-tight lg:text-6xl bg-gradient-to-br from-[#00000080] from-[65%] to-[#2f2f2f00] dark:bg-gradient-to-br dark:from-[#ffffffff] dark:from-[30%] dark:to-[#ffffff80] text-transparent bg-clip-text">
					Craft your tech journey timeline on{" "}
					<span className="">Timeloom</span>
				</h1>
				<p className="text-muted-foreground">
					Timeloom helps you to document your technical journey in an
					activity timeline like page. You can create your own page,
					craft it as you like and show it off to the world.{" "}
					<span className="dark:text-white text-black font-medium">
						Claim your username today!
					</span>
				</p>
				<div className="">
					<Link
						href="/signup"
						className={`${buttonVariants({
							variant: "default",
						})} bg-primary-custom hover:text-[#000] mr-5`}
					>
						Claim your username
					</Link>
					<Link
						href="#toy"
						className={`${buttonVariants({
							variant: "outline",
						})}`}
					>
						Toy Version
					</Link>
				</div>
			</header>
			<section
				className="group max-w-3xl mx-auto rounded-md overflow-hidden mt-16 relative"
				id="toy"
			>
				<Image
					src={toyMockup}
					alt="Toy Mockup Image"
					className="block w-full"
				/>
				<Link
					href="/adarsh"
					className="flex absolute top-0 left-0 w-full h-full justify-center items-center gap-2 z-2 bg-[#000000aa] opacity-0 select-none pointer-events-none group-hover:opacity-100 transition-opacity group-hover:pointer-events-auto"
				>
					Toy Version <ArrowUpRight size={20} strokeWidth={1.5} />
				</Link>
			</section>
			<section className="mt-20 mx-auto max-w-4xl">
				<UsernameCheck />
			</section>
			<section className="mt-20">
				<h2 className="text-center text-3xl font-semibold">
					Wanna&apos; help in building{" "}
					<span className="relative">
						<div className="absolute bg-primary-custom -right-3 top-5 content-[''] w-full h-1/2 -z-10" />
						Timeloom?
					</span>
				</h2>
				<div className="grid lg:grid-cols-3 gap-4 mt-8">
					{CARDS.map(card => (
						<Card key={card.title}>
							<CardHeader>
								<CardTitle>{card.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="">{card.description}</p>
							</CardContent>
							<CardFooter>
								<Link
									href={card.link.url}
									className={`${buttonVariants({
										variant: "outline",
									})} w-full`}
								>
									{card.link.text}
									<ArrowUpRight size={20} strokeWidth={1.5} />
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}
