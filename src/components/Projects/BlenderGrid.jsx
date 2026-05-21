import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import ProjectCard from './ProjectCard.jsx';
import styles from './BlenderGrid.module.css';

export default function BlenderGrid({ items }) {
  return (
    <div className={styles.column}>
      <SectionHeading as="h2" className={styles.heading}>
        Blender
      </SectionHeading>
      <div className={styles.grid}>
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            thumbSrc={item.thumbSrc}
          />
        ))}
      </div>
    </div>
  );
}
