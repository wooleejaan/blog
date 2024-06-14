import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
  const scribbles = await getCollection('note')

  const getItems = () => {
    const scribbleItems = scribbles.map((post) => ({
      ...post.data,
      link: `/note/${post.slug}/`,
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
