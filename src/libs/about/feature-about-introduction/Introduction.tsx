import classNames from 'classnames/bind'
import styles from './Introduction.module.scss'

const cx = classNames.bind(styles)

const Introduction = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('section')}>
        <h3 className={cx('sectionTitle')}>Experience</h3>
        <div className={cx('items')}>
          <div className={cx('item')}>
            <div className={cx('itemTitle')}>
              Software Engineer, Web Front End
            </div>
            <div className={cx('description')}>
              <li>
                <a href="https://www.lattice.im/" target="_blank">
                  Lattice
                </a>{' '}
                | November 2023 - Present
              </li>
              <li>
                - Currently engaged in developing{' '}
                <a href="https://www.prix.im/" target="_blank">
                  Prix
                </a>
                , a product by Lattice
              </li>
              <li>
                - Experiencing the growth of both the product and organization
                in an early-stage startup environment
              </li>
              <li>
                - Joined during the seed stage and am now in the pre-Series A
                stage
              </li>
            </div>
          </div>
          <div className={cx('item')}>
            <div className={cx('itemTitle')}>
              UX Researcher Intern (Qualitative)
            </div>
            <div className={cx('description')}>
              <li>
                <a
                  href="https://sites.google.com/view/yonseidmlab"
                  target="_blank"
                >
                  Digital Media Lab
                </a>
                , Yonsei University | May 2022 - July 2022
              </li>
              <li>
                - Conducted user interviews using FGI and FGD methodologies
              </li>
              <li>
                - Evaluated the UX design of AI applications, providing insights
                for improvement
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <h3 className={cx('sectionTitle')}>Education</h3>
        <div className={cx('items')}>
          <div className={cx('item')}>
            <div className={cx('itemTitle')}>
              Yonsei University, Seoul, Korea
            </div>
            <div className={cx('description')}>
              <li>
                Bachelor of Science in Human Environment & Design (now{' '}
                <a
                  href="https://rus.yonsei.ac.kr/che_en/design/design_intro.do"
                  target="_blank"
                >
                  Integrated Design
                </a>
                ) | March 2016 - August 2022
              </li>
              <li>- Combined Major: Culture and Criticism Studies</li>
              <li>
                - Relevant coursework: UX Design, Product Design,
                Qualitative/Quantitative UX Research
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <h3 className={cx('sectionTitle')}>Professional Development</h3>
        <div className={cx('items')}>
          <div className={cx('item')}>
            <div className={cx('itemTitle')}>Codeit</div>
            <div className={cx('description')}>
              <li>
                <a href="https://www.codeit.kr/" target="_blank">
                  Codeit
                </a>{' '}
                Front-End Sprint Program (Pilot Cohort) | March 2023 - September
                2023
              </li>
              <li>
                - Completed an intensive 6-month front-end development bootcamp
              </li>
              <li>
                - Gained expertise in React ecosystem: TypeScript, NextJS, and
                state management
              </li>
              <li>- Learned scalable architectures and monorepo approaches</li>
              <li>
                - Practiced front-end testing, CI/CD pipelines, and deployment
              </li>
              <li>
                - Experienced collaborative workflows: branching strategies,
                code reviews
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
