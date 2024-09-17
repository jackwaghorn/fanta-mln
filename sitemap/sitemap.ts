import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    // fetch data directly in the correct type
    // const posts = await $fetch<ReturnType<typeof asSitemapUrl>>('/api/posts')
    // const pages = await $fetch<{ pages: { slug: string, title: string } }>('/api/posts')
    const prismic = usePrismic();
    const { data: page } = useAsyncData("[artist]", () =>
        prismic.client.getByType("artist"))

    return [
        // map URLS as needed
        ...page.map(p => asSitemapUrl({
            loc: `/artists/${p.uid}`,
        }))
    ]
})