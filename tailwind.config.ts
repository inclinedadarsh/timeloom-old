/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["media", "class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
			},
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			flex: {
				2: "2",
				1: "1",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				icon: "hsl(var(--icon))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				"primary-custom": {
					DEFAULT: "hsl(var(--primary-custom))",
					foreground: "hsl(var(--primary-custom-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				"tag-purple-light": {
					DEFAULT: "rgba(112, 87, 255, .18)",
					foreground: "rgba(90, 34, 139, 1)",
					border: "rgba(90, 34, 139, .5)",
				},
				"tag-purple": {
					DEFAULT: "rgba(112, 87, 255, .18)",
					foreground: "rgba(193, 184, 255, 1)",
					border: "rgba(193, 184, 255, .5)",
				},
				"tag-cyan-light": {
					DEFAULT: "rgba(162, 238, 239, .18)",
					foreground: "rgba(22, 128, 136, 1)",
					border: "rgba(22, 128, 136, .5)",
				},
				"tag-cyan": {
					DEFAULT: "rgba(162, 238, 239, .18)",
					foreground: "rgba(162, 238, 239, 1)",
					border: "rgba(162, 238, 239, .5)",
				},
				"tag-green-light": {
					DEFAULT: "rgba(0, 134, 114, .18)",
					foreground: "rgba(0, 169, 144, 1)",
					border: "rgba(0, 169, 144, .5)",
				},
				"tag-green": {
					DEFAULT: "rgba(0, 134, 114, .18)",
					foreground: "rgba(0, 230, 196, 1)",
					border: "rgba(0, 230, 196, .5)",
				},
				"tag-pink-light": {
					DEFAULT: "rgba(216, 118, 227, .18)",
					foreground: "rgba(209, 137, 168, 1)",
					border: "rgba(209, 137, 168, .5)",
				},
				"tag-pink": {
					DEFAULT: "rgba(216, 118, 227, .18)",
					foreground: "rgba(217, 126, 229, 1)",
					border: "rgba(217, 126, 229, .5)",
				},
				link: "hsl(var(--link))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			boxShadow: {
				purple: "0 0px 10px 0 rgba(193, 184, 255, .5)",
				cyan: "0 0px 10px 0 rgba(162, 238, 239, .5)",
				green: "0 0px 10px 0 rgba(0, 230, 196, .5)",
				pink: "0 0px 10px 0 rgba(217, 126, 229, .5)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
