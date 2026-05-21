import { tools } from '../../data/tools.js';
import Reveal from '../Reveal/Reveal.jsx';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import ToolTile from './ToolTile.jsx';
import styles from './Tools.module.css';

export default function Tools() {
  return (
    <section id="tools" className={styles.section}>
      <div className={['container', styles.inner].join(' ')}>
        <Reveal className={styles.heading}>
          <SectionHeading as="h1">Tools</SectionHeading>
        </Reveal>
        <Reveal className={styles.grid} delay={80}>
          {tools.map((tool) => (
            <ToolTile key={tool.id} name={tool.name} Icon={tool.Icon} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
