import classNames from "classnames/bind";
import styles from "./Introduction.module.scss";

const cx = classNames.bind(styles);

const Introduction = () => {
  const experiences = (): { title: string; descriptions: string[] }[] => [
    {
      title: "Software Engineer, Web Front End",
      descriptions: [
        "Nov 2023 - Present",
        "Currently engaged in developing Prix, a product by Lattice, experiencing the growth of both the product and organization in an early-stage startup environment. Joined during the seed stage and am now in the pre-Series A stage.",
      ],
    },
    {
      title: "Intern, UX Researcher - Qualitative",
      descriptions: [
        "May 2022 - Jul 2022 (3 months)",
        "Digital Media Lab, Yonsei University",
        "Conducted user interviews with focus groups based on FGI (Focus Group Interview) and FGD (Focus Group Discussion) methodologies to evaluate the UX design of AI application.",
      ],
    },
  ];

  const educations = (): { title: string; descriptions: string[] }[] => [
    {
      title: "Codeit Front-End Sprint Program (Inaugural Class)",
      descriptions: [
        "Mar 2023 - Sep 2023 (7 months)",
        "Expertise in React ecosystem: TypeScript, NextJS, state management",
        "Proficient in scalable architectures and monorepo approach",
        "Skilled in front-end testing, CI/CD pipelines, and deployment",
        "Versed in collaborative workflows: branching strategies, code reviews",
      ],
    },
    {
      title: "Yonsei University, Bachelor of Science",
      descriptions: [
        "Mar 2016 - Aug 2022 (6 years, 5 months)",
        "Majored in Human Environment & Design (Combined Major: Culture and Criticism Studies)",
        "Studied UX Design, Product Design, and Qualitative/Quantitative UX Research",
      ],
    },
  ];

  return (
    <div className={cx("container")}>
      <div className={cx("section")}>
        <p className={cx("heroText")}>
          <span>
            I find joy in logically approaching complex problems and simplifying
            them. I have a passion for smooth motion interfaces and clean,
            refined graphic work. I am a quick learner and can rapidly acquire
            knowledge in any field. I am deeply interested in creating
            attractive and user-friendly products.
          </span>
        </p>
      </div>
      <div className={cx("section")}>
        <h3 className={cx("sectionTitle")}>Experience</h3>
        <div className={cx("items")}>
          {experiences().map(({ title, descriptions }) => (
            <div className={cx("item")} key={title}>
              <div className={cx("itemTitle")}>{title}</div>
              <div className={cx("descriptions")}>
                {descriptions.map((description) => (
                  <li>- {description}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cx("section")}>
        <h3 className={cx("sectionTitle")}>Education</h3>
        <div className={cx("items")}>
          {educations().map(({ title, descriptions }) => (
            <div className={cx("item")} key={title}>
              <div className={cx("itemTitle")}>{title}</div>
              <div className={cx("descriptions")}>
                {descriptions.map((description) => (
                  <li>- {description}</li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
