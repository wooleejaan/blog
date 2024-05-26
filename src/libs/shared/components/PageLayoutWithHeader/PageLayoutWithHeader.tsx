import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import styles from "./PageLayoutWithHeader.module.scss";
import classNames from "classnames/bind";
import useWindowSize from "../../hooks/useWindowSize";

const cx = classNames.bind(styles);

interface Props {
  title: string;
  shouldRenderLinks?: boolean;
  shouldRenderHeader?: boolean;
}

const LINKS: {
  href: string;
  name: string;
  isExternal?: boolean;
  mobliePath: string;
}[] = [
  {
    href: "/about",
    name: "About",
    isExternal: false,
    mobliePath: "/icon/about.svg",
  },
  {
    href: "https://github.com/wooleejaan",
    name: "GitHub",
    isExternal: true,
    mobliePath: "/icon/github.svg",
  },
  {
    href: "https://www.linkedin.com/in/wooleejaan/",
    name: "LinkedIn",
    isExternal: true,
    mobliePath: "/icon/linkedin.svg",
  },
];

const PageLayoutWithHeader = ({
  title,
  shouldRenderLinks,
  shouldRenderHeader,
  children,
}: PropsWithChildren<Props>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDesktop } = useWindowSize();

  const handleScroll = () => {
    const mainNodeTop = containerRef.current?.getBoundingClientRect()?.top ?? 0;
    const hasScrolled = mainNodeTop < -10;
    setIsScrolled(hasScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={cx("container")} ref={containerRef}>
      {shouldRenderHeader && (
        <header className={cx("headerWrapper", { isScrolled })}>
          <div className={cx("header")}>
            <h1 className={cx("title")}>{title}</h1>
            {shouldRenderLinks && (
              <nav className={cx("nav")}>
                {LINKS.map(({ href, name, isExternal, mobliePath }) => (
                  <a
                    className={cx("navItem")}
                    href={href}
                    target={isExternal ? "_blank" : "_self"}
                    key={name}
                  >
                    {isDesktop ? (
                      <>
                        {name}
                        <img
                          className={cx("image")}
                          src="/icon/external-link.svg"
                          alt={name}
                        />
                      </>
                    ) : (
                      <img
                        className={cx("mobileImage")}
                        src={mobliePath}
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
      <div className={cx("contents")}>{children}</div>
    </main>
  );
};

export default PageLayoutWithHeader;
