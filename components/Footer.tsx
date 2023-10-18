import Link from "next/link";

const Footer = () => {
	return (
		<div className="mt-10 max-w-6xl w-full mx-auto px-4">
			<div className="py-4 text-center text-muted-foreground border-t-border border-t">
				Made with &lt;3 by&nbsp;
				<Link
					href="https://bento.me/adarsh"
					className="hover:underline dark:text-white text-black"
				>
					Adarsh Dubey
				</Link>
			</div>
		</div>
	);
};

export default Footer;
