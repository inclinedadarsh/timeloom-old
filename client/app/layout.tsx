import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Timeloom - Craft your technical timeline",
		template: "%s | Timeloom",
	},
	description:
		"Document and craft your technical journey and share it with the world. Timeloom is a timeline builder for someone who wants to share their technical journey.",
	colorScheme: "dark",
	keywords: [
		"timeline",
		"tech journey",
		"typescript",
		"open source",
		"timeloom",
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://timeloom.vercel.app/",
		title: "Timeloom",
		description:
			"Document and craft your technical journey and share it with the world. Timeloom is a timeline builder for someone who wants to share their technical journey.",
		siteName: "Timeloom",
	},
	twitter: {
		title: "Timeloom - Craft your technical timeline",
		description:
			"Document and craft your technical journey and share it with the world. Timeloom is a timeline builder for someone who wants to share their technical journey.",
		creator: "@inclinedadarsh",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<Navbar />
				<div className="grow">{children}</div>
				<Footer />
				<Toaster />
				<Analytics />
			</body>
		</html>
	);
}
