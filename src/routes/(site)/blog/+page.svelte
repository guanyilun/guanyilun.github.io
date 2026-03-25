<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	let { data } = $props();
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<div class="blog-page">
	<div class="page-label">Blog</div>

	<PostsList posts={data.posts} />

	<Pagination currentPage={1} totalPosts={data.total} />
</div>

<style>
	.page-label {
		font-size: 0.875rem; /* 14px */
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text);
		margin-bottom: 2rem;
		font-weight: 500;
		opacity: 0.7;
	}

	.blog-page {
		font-size: 1rem; /* 16px base */
	}

	.blog-page :global(h2) {
		font-size: 1.5rem; /* 24px - down from ~28-32px */
	}

	.blog-page :global(p) {
		font-size: 1rem; /* 16px - down from 1.4-1.5rem */
		line-height: 1.6;
	}

	.blog-page :global(.posts-list li) {
		margin-bottom: 4rem; /* reduce from 6rem */
	}
</style>