import { ProfileType, TimelineType, HomeCards } from "@/types/index";

export const PROFILE: ProfileType = {
	name: "Adarsh Dubey",
	username: "adarsh",
	tags: ["Founder", "First 100", "Dev"],
	bio: "Founder @BIO-S, Team @WeMakeDevs & @CNCF_Nashik, UX Designer, Full Stack Web Dev, Machine Learning Enthusiast.",
	socials: {
		email: "mailto:dubeyadarshmain@gmail.com",
		github: "https://github.com/inclinedadarsh",
		twitter: "https://twitter.com/inclinedadarsh",
		instagram: "https://instagram.com/inclinedadarsh",
		linkedin: "https://linkedin.com/in/dubeyadarsh",
		web: "https://adarshdubey.com",
	},
	button: {
		text: "Sponsor Me",
		link: "https://github.com/sponsors/inclinedadarsh",
	},
};

export const TIMELINE: TimelineType = [
	{
		title: "Published waitlist of Timeloom",
		description:
			"Published the waitlist of Timeloom. The waitlist is open for everyone until the app is launched. Go to the home page to see the waitlist.",
		date: new Date("2023-09-04"),
		icon: "Star",
		link: {
			text: "Waitlist Link",
			url: "https://timeloom.vercel.app/",
		},
		location: "GitHub",
	},
	{
		title: "Finished the Toy version of Timeloom",
		icon: "Zap",
		date: new Date("2023-08-31"),
	},
	{
		title: "Failed to submit week 2 update in Nights & Weekends S4",
		icon: "ThumbsDown",
		date: new Date("2023-08-22"),
	},
	{
		title: "Started working on the Toy version of Timeloom",
		description:
			"Building the toy version of Timeloom using NextJS and TypeScript. Checkout the toy branch in GitHub for the source code.",
		date: new Date("2023-08-22"),
		icon: "Star",
		link: {
			text: "Timeloom Repo",
			url: "https://github.com/inclinedadarsh/timeloom",
		},
		location: "GitHub",
	},
	{
		title: "Got high engagement on my tweet about Timeloom",
		link: {
			text: "Tweet Link",
			url: "https://twitter.com/inclinedadarsh/status/1689287740297302016?s=20",
		},
		date: new Date("2023-08-20"),
		icon: "Twitter",
	},
	{
		title: "Started a GitHub repo for Timeloom",
		description:
			"The GitHub repo includes Discussions, Wiki, and Projects. I am planning to make it open-source and build it in public. The discussions is open for new ideas and criticism.",
		location: "GitHub",
		link: {
			text: "GitHub Repo",
			url: "https://github.com/inclinedadarsh/timeloom",
		},
		date: new Date("2023-08-19"),
		icon: "GitHub",
	},
	{
		title: "Posted V1 Design of Timeloom (previously JourTech)",
		link: {
			text: "Design Link",
			url: "https://twitter.com/inclinedadarsh/status/1692588358537519381?s=20",
		},
		date: new Date("2023-08-18"),
		icon: "Zap",
	},
	{
		title: "Completed 200 followers on Twitter 🎉",
		date: new Date("2023-08-18"),
		icon: "Twitter",
		link: {
			text: "Twitter Profile",
			url: "https://twitter.com/inclinedadarsh",
		},
	},
	{
		title: "Published a blog on my first week in Nights & Weekends S4",
		date: new Date("2023-08-15"),
		icon: "Quote",
		link: {
			text: "Blog Link",
			url: "https://blog.adarshdubey.com/nights-weekends-chronicles-igniting-the-spark-of-ideas",
		},
	},
	{
		title: "Decided to build Timeloom",
		description:
			"JourTech: A website where you can log every achievement, failure and whatnot. You can show if off to the world or just keep it as a personal inspiration.",
		date: new Date("2023-08-9"),
		icon: "Star",
		link: {
			text: "Idea Tweet",
			url: "https://twitter.com/inclinedadarsh/status/1689287740297302016?s=20",
		},
		location: "Buildspace",
	},
	{
		title: "Participated in Nights & Weekends S4",
		date: new Date("2023-08-05"),
		icon: "Zap",
		link: {
			text: "Buildspace's website",
			url: "https://buildspace.so/",
		},
	},
];

export const CARDS: HomeCards = [
	{
		title: "Building in public",
		description:
			"Building Timeloom in public by sharing constant progress and taking feedbacks. Build — Ship — Revaluate",
		link: {
			text: "Twitter",
			url: "https://twitter.com/inclinedadarsh",
		},
	},
	{
		title: "Open for contributions",
		description:
			"Timeloom welcomes contributions from the community, be it adding a new feature or fixing a bug.",
		link: {
			text: "GitHub Repo",
			url: "https://github.com/inclinedadarsh/timeloom",
		},
	},
	{
		title: "Open for feedback",
		description:
			"Feedbacks are most welcome and appreciated. Be it a general feedback, feature request or a criticsm, I would love to hear it.",
		link: {
			text: "Discussions",
			url: "https://github.com/inclinedadarsh/timeloom/discussions",
		},
	},
];
