import classNames from 'classnames/bind'
import styles from './PageSection.module.scss'
import type { PropsWithChildren } from 'react'

const cx = classNames.bind(styles)

interface Props {
  title?: string
  disableTitleMarginBottom?: boolean
}

const PageSection = ({
  children,
  title,
  disableTitleMarginBottom,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cx('container')}>
      <div className={cx('contents')}>
        {title && (
          <h3 className={cx('title', { disableTitleMarginBottom })}>{title}</h3>
        )}
        {children}
      </div>
    </div>
  )
}

export default PageSection
