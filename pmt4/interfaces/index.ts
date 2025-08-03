import { LucideProps  } from 'lucide-react';

export type MasterpieceContent = { type: 'masterpiece'; title: string; description: string; };
export type ChecklistContent = { type: 'checklist'; title: string; items: string[]; };
export type QuoteContent = { type: 'quote'; text: string; author: string; };
export type FlowchartContent = { type: 'flowchart'; title: string; items: string[]; };
export type DefaultContent = { type: 'default'; title: string; items: string[]; };

export type ArtifactContent = MasterpieceContent | ChecklistContent | QuoteContent | FlowchartContent | DefaultContent;

export type Exhibit = {
  title: string;
  subtitle: string;
  description: string;
  lucideIcon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  content?: ArtifactContent[];
};

export type ExhibitCollection = {
  [key: string]: Exhibit;
};

// --- ARTIFACT & UI COMPONENTS ---
export type ArtifactProps = {
  title: string;
  items: string[];
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};