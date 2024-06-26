import { useEffect, useRef, useState, type PropsWithChildren } from 'react'
import styles from './PageLayoutWithHeader.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface Props {
  title: string
  shouldRenderLinks?: boolean
  shouldRenderHeader?: boolean
  isHomePage?: boolean
  pageTitle?: string
}

const PageLayoutWithHeader = ({
  title,
  shouldRenderLinks,
  shouldRenderHeader,
  isHomePage = false,
  pageTitle,
  children,
}: PropsWithChildren<Props>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const LINKS: {
    href: string
    name: string
    isExternal?: boolean
    mobliePath: string
  }[] = [
    {
      href: 'https://github.com/wooleejaan',
      name: 'github',
      isExternal: true,
      mobliePath: '/icon/github.svg',
    },
    {
      href: 'https://www.linkedin.com/in/wooleejaan/',
      name: 'linkedin',
      isExternal: true,
      mobliePath: '/icon/linkedin.svg',
    },
  ]

  const handleScroll = () => {
    const mainNodeTop = containerRef.current?.getBoundingClientRect()?.top ?? 0
    const hasScrolled = mainNodeTop < -180 // $section-header-height(60px) * 3
    setIsScrolled(hasScrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className={cx('container')} ref={containerRef}>
      {shouldRenderHeader && (
        <header className={cx('headerWrapper', { isScrolled })}>
          <div className={cx('header')}>
            <h1 className={cx('title')}>
              <a href="/">{isScrolled ? pageTitle : title}</a>
            </h1>
            {shouldRenderLinks && (
              <nav className={cx('nav')}>
                {LINKS.map(({ href, name, isExternal, mobliePath }) => (
                  <a
                    className={cx('navItem')}
                    href={href}
                    target={isExternal ? '_blank' : '_self'}
                    key={name}
                  >
                    {name}
                    {isExternal && (
                      <img
                        className={cx('image')}
                        src="/icon/external-link.svg"
                        alt={name}
                      />
                    )}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </header>
      )}
      <div className={cx('contents')}>{children}</div>
    </main>
  )
}

export default PageLayoutWithHeader
