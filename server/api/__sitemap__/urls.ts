export default defineSitemapEventHandler(() => {
    // const prismic = usePrismic();
    // const { data: page } = useAsyncData("[artist]", () =>
    //     prismic.client.getByType("artist"), {
    //     transform: (res) => {
    //         return res?.results.slice().sort((a: any, b: any) => {
    //             const aLastName = a?.data?.name?.split(" ").pop();
    //             const bLastName = b.data.name?.split(" ").pop();
    //             return aLastName?.localeCompare(bLastName);
    //         })
    //     }
    // }
    // );
    return [
        {
            loc: '/about-us',
            // will end up in the pages sitemap
            _sitemap: 'pages',
        }
    ]
})