"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardTitle,
	CardContent,
	CardDescription,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import { Loader2Icon } from "lucide-react";

const formSchema = z.object({
	username: z.string().regex(/^[a-zA-Z]{3,16}$/, {
		message:
			"Username cannot contain special characters, numbers or spaces",
	}),
	password: z.string().min(1, {
		message: "Password cannot be empty",
	}),
});

const Page = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});
	const { toast } = useToast();

	const router = useRouter();

	const { handleSubmit, control } = form;

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsLoading(true);
		try {
			const response = await axios.post("/api/users/login", values);
			toast({
				title: "Logged in successfully",
				description: "Redirecting you to your personal page.",
			});

			setTimeout(() => {
				router.push(`/${values.username}`);
			}, 1000);
		} catch (error) {
			toast({
				title: error.response.data.message,
				description: "Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="max-w-md mx-auto px-6 h-fit mt-6">
			<Card>
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">
						Log in to your account
					</CardTitle>
					<CardDescription>
						Enter your username and password to login.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form
							onSubmit={(event: FormEvent<HTMLFormElement>) => {
								event.preventDefault();
								handleSubmit(onSubmit)();
							}}
							className="space-y-6"
						>
							<FormField
								control={control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="username">
											Username
										</FormLabel>
										<FormControl>
											<Input
												placeholder="coolusername"
												id="username"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="password">
											Password
										</FormLabel>
										<FormControl>
											<Input
												placeholder="secretlol"
												{...field}
												type="password"
												id="password"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								disabled={isLoading ? true : false}
								className="w-full"
							>
								{isLoading && (
									<Loader2Icon className="animate-spin inline-block mr-2" />
								)}
								Log In
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<p className="mx-auto text-muted-foreground">
						Don&apos;t have an account?{" "}
						<Link
							href="/signup"
							className="font-medium hover:underline text-primary-foreground"
						>
							Create account
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Page;
