// Eager-loaded posts for individual page lookup
export const posts = import.meta.glob('/content/posts/*.md', { eager: true })

// Lazy-loaded posts for list views (metadata only)
export const postsLazy = import.meta.glob('/content/posts/*.md')

// Helper to get a single post by slug
export async function getPost(slug) {
  const match = Object.entries(posts).find(([path]) => path.endsWith(`/${slug}.md`))
  if (!match) return null
  const [, post] = match
  return {
    content: post.default,
    metadata: post.metadata,
    slug
  }
}

// Helper to get post count
export function getPostCount() {
  return Object.keys(postsLazy).length
}

// Helper to get all posts metadata
export async function getAllPosts() {
  const allPosts = await Promise.all(
    Object.entries(postsLazy).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = path.split('/').pop().slice(0, -3)
      return { ...metadata, slug }
    })
  )
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
}
