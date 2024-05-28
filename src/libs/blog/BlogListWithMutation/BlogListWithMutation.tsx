import classNames from 'classnames/bind'
import styles from './BlogListWithMutation.module.scss'
import { useState } from 'react'

const cx = classNames.bind(styles)

interface Data {
  data: {
    pubDate: Date
    title: string
  }
  slug: string
}

interface Props<T> {
  items: T[]
  pathName: string
  disableClick?: boolean
}

const BlogListWithMutation = <T extends Data>({
  items,
  pathName,
  disableClick = false,
}: Props<T>) => {
  const [showItems, setShowItems] = useState<Data[]>(items.slice(0, 3))

  const shouldRenderMoreButton = () =>
    items.length > 3 && showItems.length !== items.length

  const showAllItems = () => {
    setShowItems(items)
  }

  return (
    <>
      {showItems.map((post, index) => (
        <div className={cx('item')} key={index.toString()}>
          <span className={cx('date')}>
            <time>
              {post.data.pubDate.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          </span>
          {disableClick ? (
            <span className={cx('title', { disableClick })}>
              {post.data.title}
            </span>
          ) : (
            <a href={`/${pathName}/${post.slug}`} className={cx('title')}>
              {post.data.title}
            </a>
          )}
        </div>
      ))}
      {shouldRenderMoreButton() && (
        <button type="button" className={cx('button')} onClick={showAllItems}>
          ...more
        </button>
      )}
    </>
  )
}

export default BlogListWithMutation
