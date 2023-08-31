import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
    return rss({
        title: 'Fido\'s Tutorial | Blog',
        description: 'Learning Astro',
        site: 'https://fido-blog.netlify.app/',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}