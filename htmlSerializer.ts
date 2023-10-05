type HtmlSerializer = {
    [key: string]: (...args: any[]) => string;
};
export const htmlSerializer: HtmlSerializer = {
    heading4: ({ children }: { children: string }) =>
        `<p style="text-decoration:underline; text-decoration-thickness: 1px;">${children}</p>`,
    paragraph: ({ children }: { children: any }) => `<p style="margin-bottom:1.6rem">${children}</p>`,
    hyperlink: ({ node, children }: { node: any, children: any }) => {
        const url = node.data.url
        return `<a target="_blank" href="${url}">${children}</a>`
    }
};