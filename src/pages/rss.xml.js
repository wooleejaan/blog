import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
  const archives = await getCollection('archives')

  const getItems = () => {
    const scribbleItems = archives.map((post) => ({
      ...post.data,
      link: `/archives/${post.slug}/`,
    }))

    return [...scribbleItems]
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: getItems(),
  })
}
