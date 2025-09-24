import type { FC } from 'react';
import { motion } from 'framer-motion';

interface ComicPanelProps {
  imageUrl: string;
}

const ComicPanel: FC<ComicPanelProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-screen h-screen flex-shrink-0 snap-center">
      <motion.img
        src={imageUrl}
        alt="Comic panel"
        className="w-full h-full object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default ComicPanel;
