import { asSitemapUrl, defineSitemapEventHandler } from '#imports'


export default defineSitemapEventHandler(async () => {
    // fetch data directly in the correct type
    const prismic = usePrismic();
    const { data: page } = await useAsyncData("[artist]", () =>
        prismic.client.getByType("artist")
    );

    // Ensure page.value is accessed correctly
    const artists = page.value?.results ?? [];

    return [
        // map URLs as needed
        ...artists.map(p => asSitemapUrl({
            loc: `/artists/${p.uid}`,
        }))
    ]
})