<script>
	import { siteAuthor } from '$lib/config';
</script>

<footer>
	<p>
		&copy;{new Date().getFullYear()} {siteAuthor}
		&middot;
		<a href="/api/rss.xml" data-sveltekit-reload>RSS</a>
	</p>
</footer>
