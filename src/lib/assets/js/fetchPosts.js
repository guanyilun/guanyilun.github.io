import { postsPerPage } from '$lib/config'
import { getAllPosts } from '$lib/posts'

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
	let sortedPosts = await getAllPosts()
	
	if (category) {
    sortedPosts = sortedPosts.filter(post => post.categories.includes(category))
	}
  
	if (offset) {
		sortedPosts = sortedPosts.slice(offset)
	}
	
	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit)
	}

	sortedPosts = sortedPosts.map(post => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth, 
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories,
	}))

	return {
		posts: sortedPosts
	}
}

export default fetchPosts