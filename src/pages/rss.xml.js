import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
  const engineeringNotes = await getCollection('engineering')
  const scribbles = await getCollection('note')

  const getItems = () => {
    const engineeringNoteItems = engineeringNotes.map((post) => ({
      ...post.data,
      link: `/engineering/${post.slug}/`,
    }))
    const scribbleItems = scribbles.map((post) => ({
      ...post.data,
      link: `/note/${post.slug}/`,
    }))

    return [...engineeringNoteItems, ...scribbleItems]
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: getItems(),
  })
}
