import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
    title: "Steven",
    subtitle: "HOME",
    lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
    themeColor: {
        hue: 280, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
        fixed: true, // Hide the theme color picker for visitors
    },
    banner: {
        enable: false,
        src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
        position: "bottom", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
        credit: {
            enable: false, // Display the credit text of the banner image
            text: "", // Credit text to be displayed
            url: "", // (Optional) URL link to the original artwork or artist's page
        },
    },
    toc: {
        enable: true, // Display the table of contents on the right side of the post
        depth: 2, // Maximum heading depth to show in the table, from 1 to 3
    },
    favicon: [
        // Leave this array empty to use the default favicon
	 {
        src: '/favicon/cion.png',    // Path of the favicon, relative to the /public directory
        theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
        sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
         }
    ],
};


export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/stevenlu0919/steven0919", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Steven Lu",
	bio: "Welcome to my world.",
	links: [
		{
			name: "QQ",
			icon: "fa6-brands:qq", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://qm.qq.com/q/jO3xjgb5y8",
		},
		{
			name: "WeChat",
			icon: "fa6-brands:weixin",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/stevenlu0919/steven0919",
		},
	],
};


export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
