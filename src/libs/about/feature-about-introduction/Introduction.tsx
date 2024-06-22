import classNames from 'classnames/bind'
import styles from './Introduction.module.scss'

const cx = classNames.bind(styles)

const Introduction = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('section')}>
        <p className={cx('heroText')}>
          <span>
            He believes a good product understands users, even when they make
            errors. His key idea is that users are never wrong. He creates
            easy-to-use designs that get what users want to do. His products fit
            people's needs, not the other way around. He loves minimalism and
            enjoys building things from the ground up.
          </span>
        </p>
      </div>
      <div className={cx('section')}>
        <h3 className={cx('sectionTitle')}>Experience</h3>
        <div className={cx('items')}>
          <div className={cx('item')}>
            <div className={cx('itemTitle')}>
              Software Engineer, Web Front End
            </div>
            <div className={cx('description')}>
              <li>
                <a href="https://www.prix.im/" target="_blank">
                  Prix
                </a>{' '}
                by{' '}
                <a href="https://www.lattice.im/" target="_blank">
                  Lattice
                </a>{' '}
                | November 2023 - Present
              </li>
              <li>
                - Currently engaged in developing Prix, a product by Lattice
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
                - Conducted user interviews with focus groups based on FGI
                (Focus Group Interview) and FGD (Focus Group Discussion)
                methodologies
              </li>
              <li>- Evaluated the UX design of AI applications</li>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('section')}>
        <h3 className={cx('sectionTitle')}>Education</h3>
        <div className={cx('items')}>
          <div className={cx('item')}>
            <div className={cx('itemTitle')}>
              Codeit Front-End Sprint Program (Pilot Cohort)
            </div>
            <div className={cx('description')}>
              <li>
                <a href="https://www.codeit.kr/" target="_blank">
                  Codeit
                </a>{' '}
                | March 2023 - September 2023
              </li>
              <li>
                - Completed an intensive 6-month front-end development bootcamp
              </li>
              <li>
                - Gained expertise in React ecosystem: TypeScript, NextJS, state
                management
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
          <div className={cx('item')}>
            <div className={cx('itemTitle')}>Yonsei University</div>
            <div className={cx('description')}>
              <li>Bachelor of Science | March 2016 - August 2022</li>
              <li>
                - Major:{' '}
                <a
                  href="https://rus.yonsei.ac.kr/che_en/design/design_intro.do"
                  target="_blank"
                >
                  Integrated Design
                </a>{' '}
                (Previously Human Environment & Design)
              </li>
              <li>- Combined Major: Culture and Criticism Studies</li>
              <li>
                - Studied UX Design, Product Design, and
                Qualitative/Quantitative UX Research
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
