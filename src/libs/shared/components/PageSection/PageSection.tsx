import classNames from "classnames/bind";
import styles from "./PageSection.module.scss";
import type { PropsWithChildren } from "react";

const cx = classNames.bind(styles);

interface Props {
  title: string;
}

const PageSection = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <div className={cx("container")}>
      <div className={cx("contents")}>
        <h1 className={cx("title")}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default PageSection;
