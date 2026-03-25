<script>
	let { posts = [] } = $props();

	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<img
					src={post.coverImage}
					alt=""
					width={post.coverWidth}
					height={post.coverHeight}
					style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
					<div class="title-row">
						<h2>{post.title}</h2>
						<time datetime={post.date} class="post-date">
							{formatDate(post.date)}
						</time>
					</div>
				</a>
			</article>
			<p>{post.excerpt}</p>
		</li>
	{/each}
</ul>

<style>
	.title-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
	}

	.title-row h2 {
		margin-top: 1rem;
		margin-bottom: 0.25rem;
	}

	.post-date {
		font-size: 0.875rem;
		color: var(--text);
		opacity: 0.7;
		white-space: nowrap;
	}
</style>