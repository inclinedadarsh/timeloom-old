"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const UsernameCheck = () => {
	const [username, setUsername] = useState("");

	const router = useRouter();

	const handleClick = () => {
		router.push(`/${username}`);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full items-center p-8 rounded-md border border-border">
			<p className="text-3xl grow font-medium md:text-right leading-normal">
				Is your desired username even available?
			</p>
			<div className="grow">
				<Input
					placeholder="Username"
					onChange={e => setUsername(e.target.value)}
				/>
				<Button onClick={handleClick} className="mt-4">
					Check availability
				</Button>
			</div>
		</div>
	);
};

export default UsernameCheck;
