import { json } from '@sveltejs/kit'

export const prerender = 'auto'

export const GET = () => {
  const posts = import.meta.glob(`$lib/posts/*.md`)

  return json(Object.keys(posts).length)
}