import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
  const posts = await getCollection('engineering')
  const notes = await getCollection('note')
  const collections = await getCollection('collection')

  const getItems = () => {
    const postItems = posts.map((post) => ({
      ...post.data,
      link: `/post/${post.slug}/`,
    }))
    const noteItems = notes.map((post) => ({
      ...post.data,
      link: `/note/${post.slug}/`,
    }))
    const collectionItems = collections.map((post) => ({
      ...post.data,
      link: `/collection/${post.slug}/`,
    }))

    return [...postItems, ...noteItems, ...collectionItems]
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: getItems(),
  })
}
