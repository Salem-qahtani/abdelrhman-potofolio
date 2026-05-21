import { blenderProjects, aeProjects } from '../../data/projects.js';
import Reveal from '../Reveal/Reveal.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import BlenderGrid from './BlenderGrid.jsx';
import VideoStack from './VideoStack.jsx';
import ViewAllButton from './ViewAllButton.jsx';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={['container', styles.inner].join(' ')}>
        <Reveal className={styles.heading}>
          <SectionHeading as="h1">Projects</SectionHeading>
        </Reveal>

        <div className={styles.columns}>
          <Reveal className={styles.col}>
            <BlenderGrid items={blenderProjects} />
          </Reveal>
          <Reveal className={styles.col} delay={80}>
            <VideoStack items={aeProjects} />
          </Reveal>
        </div>

        <Reveal className={styles.viewAll} delay={160}>
          <ViewAllButton />
        </Reveal>
      </div>
    </section>
  );
}
