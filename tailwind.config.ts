
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom colors for our resume app
				resume: {
					purple: "#9b87f5",
					"dark-purple": "#7E69AB",
					"light-purple": "#D6BCFA",
					"soft-green": "#F2FCE2",
					"soft-yellow": "#FEF7CD",
					"soft-orange": "#FEC6A1",
					"soft-pink": "#FFDEE2",
					"soft-blue": "#D3E4FD",
					"soft-gray": "#F1F0FB",
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-gentle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				"float-reverse": {
					"0%, 100%": {
						transform: "translateY(-5px)",
					},
					"50%": {
						transform: "translateY(5px)",
					},
				},
				"float-slow": {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-15px)",
					},
				},
				"pulse-gentle": {
					"0%, 100%": {
						opacity: "1",
					},
					"50%": {
						opacity: "0.8",
					},
				},
				"slide-in-right": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0",
					},
					"100%": {
						transform: "translateX(0)",
						opacity: "1",
					},
				},
				"rotate-360": {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				"bounce-slow": {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-20px)",
					},
				},
				"ping-slow": {
					"0%": {
						transform: "scale(1)",
						opacity: "1",
					},
					"50%": {
						transform: "scale(1.2)",
						opacity: "0.8",
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1",
					},
				},
				"spin-slow": {
					"0%": {
						transform: "rotate(0deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				"pulse-slow": {
					"0%, 100%": {
						opacity: "1",
						transform: "scale(1)",
					},
					"50%": {
						opacity: "0.7",
						transform: "scale(0.9)",
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'pulse-gentle': 'pulse-gentle 3s infinite',
				"float": "float 3s ease-in-out infinite",
				"float-reverse": "float-reverse 3.5s ease-in-out infinite",
				"float-slow": "float-slow 6s ease-in-out infinite",
				"pulse-gentle": "pulse-gentle 3s infinite",
				"slide-in-right": "slide-in-right 0.3s ease-out",
				"rotate-360": "rotate-360 1s linear infinite",
				"bounce-slow": "bounce-slow 4s infinite",
				"ping-slow": "ping-slow 3s ease-in-out infinite",
				"spin-slow": "spin-slow 12s linear infinite",
				"pulse-slow": "pulse-slow 5s infinite",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'purple-gradient': 'linear-gradient(102.3deg, rgba(147,39,143,1) 5.9%, rgba(234,172,232,1) 64%, rgba(246,219,245,1) 89%)',
				'blue-gradient': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
				'orange-gradient': 'linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
				'green-gradient': 'linear-gradient(90deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%)',
				'grid-pattern': 'linear-gradient(to right, #20202022 1px, transparent 1px), linear-gradient(to bottom, #20202022 1px, transparent 1px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
