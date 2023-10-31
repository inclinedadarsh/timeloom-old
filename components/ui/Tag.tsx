import { TagProps } from "@/types";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils";

// const tagVariants = cva(
// 	"text-sm border block min-w-fit px-[6px] py-[2px] rounded-full",
// 	{
// 		variants: {
// 			variant: {
// 				purple: "bg-tag-purple border-tag-purple-border text-tag-purple-foreground",
// 				cyan: "bg-tag-cyan border-tag-cyan-border text-tag-cyan-foreground",
// 				pink: "bg-tag-pink border-tag-pink-border text-tag-pink-foreground",
// 				green: "bg-tag-green border-tag-green-border text-tag-green-foreground",
// 			},
// 		},
// 		defaultVariants: {
// 			variant: "purple",
// 		},
// 	}
// );

const Tag = ({ className, type, ...props }: TagProps) => {
	return (
		<span
			className={`${className} text-sm border block min-w-fit px-[6px] py-[2px] rounded-full transition-shadow ${
				type == "Founder" &&
				"bg-tag-purple border-tag-purple-light-border dark:border-tag-purple-border text-tag-purple-light-foreground dark:text-tag-purple-foreground hover:shadow-purple"
			} ${
				type == "Dev" &&
				"bg-tag-green border-tag-green-light-border dark:border-tag-green-border text-tag-green-light-foreground dark:text-tag-green-foreground hover:shadow-green"
			} ${
				type == "First 100" &&
				"bg-tag-cyan border-tag-cyan-light-border dark:border-tag-cyan-border text-tag-cyan-light-foreground dark:text-tag-cyan-foreground hover:shadow-cyan"
			}`}
			{...props}
		>
			{type}
		</span>
	);
};

export default Tag;
