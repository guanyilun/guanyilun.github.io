import { error } from '@sveltejs/kit'
import { getPost } from '$lib/posts'

export const load = async ({ params }) => {
	const post = await getPost(params.post)

	if (!post) {
		error(404, 'Post not found')
	}

	return {
		PostContent: post.content,
		meta: { ...post.metadata, slug: post.slug }
	}
}
