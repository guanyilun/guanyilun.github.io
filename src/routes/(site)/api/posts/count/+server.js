import { json } from '@sveltejs/kit'
import { getPostCount } from '$lib/posts'

export const prerender = 'auto'

export const GET = () => {
  return json(getPostCount())
}