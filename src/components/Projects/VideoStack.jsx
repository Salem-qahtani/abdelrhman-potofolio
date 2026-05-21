import { useCallback, useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading.jsx';
import VideoCard from './VideoCard.jsx';
import styles from './VideoStack.module.css';

export default function VideoStack({ items }) {
  const [activeId, setActiveId] = useState(null);

  const activate = useCallback((id) => setActiveId(id), []);

  return (
    <div className={styles.column}>
      <SectionHeading as="h2" className={styles.heading}>
        After Effects
      </SectionHeading>
      <div className={styles.stack}>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <VideoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              thumbSrc={item.thumbSrc}
              videoSrc={item.videoSrc}
              videoSrcWebm={item.videoSrcWebm}
              isActive={isActive}
              onActivate={activate}
              onDeactivate={() =>
                setActiveId((curr) => (curr === item.id ? null : curr))
              }
            />
          );
        })}
      </div>
    </div>
  );
}
