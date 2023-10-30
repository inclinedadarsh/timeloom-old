import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex gap-2 items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-primary-custom hover:text-[#FFF] dark:hover:text-[#000] text-primary-foreground shadow hover:bg-primary/70 dark:hover:bg-primary/90 rounded-md",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
				outline:
					"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
				ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
				link: "text-primary underline-offset-4 hover:underline rounded-md",
				icon: "border border-icon bg-muted shadow-sm hover:bg-accent hover:text-accent-foreground rounded-full",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9 md:h-11 md:w-11",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
