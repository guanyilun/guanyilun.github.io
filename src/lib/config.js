/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Yilun Guan'
export const siteDescription = 'Academic homepage of Yilun Guan'
export const siteURL = 'guanyilun.github.io'
export const siteLink = 'https://guanyilun.github.io'
export const siteAuthor = 'Yilun Guan'
// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	},
	// {
	// 	title: 'Research',
	// 	route: '/#research'
	// },
	// {
	// 	title: 'Blog',
	// 	route: '/blog'
	// },
	{
		title: 'CV',
		route: '/CV.pdf'
	}
]