import React, { useState } from 'react';
import type {Exhibit, ArtifactContent, DefaultContent, ArtifactProps} from "@/interfaces/index";
import { exhibits }  from '@/constants/index';
import { ChevronRight, Crown, CheckSquare, Quote, MapPin } from 'lucide-react';

const Artifact = ({ title, items, icon: Icon = MapPin }: ArtifactProps) => (
  <div className="mb-6 p-4 border border-stone-900/10 rounded-sm bg-white/30">
    <h3 className="font-serif text-lg text-stone-900 mb-3">{title}</h3>
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start space-x-3">
          <Icon className="w-4 h-4 mt-1 flex-shrink-0 text-stone-600" />
          <p className="font-sans text-sm text-stone-800">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const MasterpieceArtifact = ({ title, description }: { title: string; description: string; }) => (
  <div className="mb-6 p-6 border-2 border-yellow-600/50 rounded-sm bg-yellow-400/5 bg-opacity-50 shadow-lg">
    <div className="flex items-center space-x-3 mb-3">
      <Crown className="w-6 h-6 text-yellow-700" />
      <h3 className="font-serif text-xl text-yellow-800">{title}</h3>
    </div>
    <p className="font-sans text-base text-stone-800 leading-relaxed pl-9">{description}</p>
  </div>
);

const ChecklistArtifact = ({ title, items }: { title: string; items: string[]; }) => <Artifact title={title} items={items} icon={CheckSquare} />;

const QuoteArtifact = ({ text, author }: { text: string; author: string; }) => (
  <div className="mb-6 pl-6 py-4 border-l-2 border-stone-400">
    <Quote className="w-8 h-8 text-stone-400/50 mb-2" />
    <blockquote className="font-serif text-lg italic text-stone-800 leading-relaxed">"{text}"</blockquote>
    {author && <cite className="block text-right font-sans text-sm text-stone-600 mt-2 not-italic">— {author}</cite>}
  </div>
);

const FlowchartArtifact = ({ title, items }: { title: string; items: string[]; }) => (
    <div className="mb-6 p-4 border border-stone-900/10 rounded-sm bg-white/30">
        <h3 className="font-serif text-lg text-stone-900 mb-4">{title}</h3>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <div className="text-center p-3 border border-stone-300 rounded-md bg-white shadow-sm min-w-[120px]">
                        <p className="font-sans text-sm font-medium text-stone-800">{item}</p>
                    </div>
                    {i < items.length - 1 && <ChevronRight className="w-6 h-6 text-stone-400 transform md:rotate-0 rotate-90" />}
                </React.Fragment>
            ))}
        </div>
    </div>
);

const ProgressBubble = ({ percentage }: { percentage: number; }) => (
  <div className="fixed bottom-6 right-6 z-50">
    <div className="w-20 h-20 bg-white/80 backdrop-blur-md border border-stone-900/10 rounded-full flex flex-col items-center justify-center shadow-lg">
      <div className="font-sans text-2xl font-bold text-stone-800">
        {percentage}%
      </div>
      <div className="text-xs text-stone-600">Explored</div>
    </div>
  </div>
);


const Museum = () => {
  const [currentExhibit, setCurrentExhibit] = useState('entrance');
  const [visitedExhibits, setVisitedExhibits] = useState(new Set(['entrance']));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const exhibitKeys = Object.keys(exhibits).filter(key => key !== 'entrance');

  const navigateToExhibit = (exhibitKey: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentExhibit(exhibitKey);
      setVisitedExhibits(prev => new Set(prev).add(exhibitKey));
      setIsTransitioning(false);
    }, 400);
  };
  
  const currentExhibitData = exhibits[currentExhibit];
  const currentIdx = exhibitKeys.indexOf(currentExhibit);
  const nextExhibitKey = exhibitKeys[(currentIdx + 1) % exhibitKeys.length];
  const prevExhibitKey = exhibitKeys[(currentIdx - 1 + exhibitKeys.length) % exhibitKeys.length];
  const percentageExplored = Math.round((visitedExhibits.size - 1) / exhibitKeys.length * 100);

   const GrandHall = () => {
    const entranceData = exhibits.entrance;
    return (
      <div className="text-center max-w-4xl mx-auto py-16 px-4">
        <entranceData.lucideIcon className="w-16 h-16 mx-auto mb-6 text-stone-700" />
        <h1 className="font-serif text-5xl text-stone-900 mb-4">{entranceData.title}</h1>
        <h2 className="font-sans text-xl text-stone-600 mb-8">{entranceData.subtitle}</h2>
        <p className="font-sans text-base text-stone-700 leading-relaxed mb-12">{entranceData.description}</p>
        <button
          onClick={() => navigateToExhibit(exhibitKeys[0])}
          className="bg-stone-800 text-white font-sans px-8 py-3 rounded-sm shadow-md hover:bg-stone-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Begin The Tour
        </button>

        <div className="mt-24 pt-12 border-t border-stone-900/10">
            <h3 className="font-serif text-2xl text-stone-800 mb-8">Or, Visit a Specific Wing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
                {exhibitKeys.map(key => {
                    const exhibit = exhibits[key];
                    return (
                        <div key={key} onClick={() => navigateToExhibit(key)} className="group cursor-pointer p-3 transition-colors duration-200 hover:bg-black/5 rounded-sm">
                            <div className="flex items-center space-x-3">
                                <exhibit.lucideIcon className="w-5 h-5 text-stone-600 transition-colors group-hover:text-stone-800" />
                                <h4 className="font-serif text-lg text-stone-700 transition-colors group-hover:text-stone-900">{exhibit.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    );
  };

  const ExhibitDisplay = () => {
    const { lucideIcon: Icon, title, subtitle, description, content } = currentExhibitData as Exhibit & { content: ArtifactContent[] };
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <header className="text-left mb-12 pb-8 border-b border-stone-900/10">
          <Icon className="w-12 h-12 mb-4 text-stone-700" />
          <h1 className="font-serif text-5xl text-stone-900 mb-3">{title}</h1>
          <h2 className="font-sans text-xl text-stone-600">{subtitle}</h2>
          <p className="font-sans text-base text-stone-700 leading-relaxed mt-4 max-w-3xl">{description}</p>
        </header>

        <main>
          {content.map((item, index) => {
            switch (item.type) {
              case 'masterpiece': return <MasterpieceArtifact key={index} title={item.title} description={item.description} />;
              case 'checklist': return <ChecklistArtifact key={index} title={item.title} items={item.items} />;
              case 'quote': return <QuoteArtifact key={index} text={item.text} author={item.author} />;
              case 'flowchart': return <FlowchartArtifact key={index} title={item.title} items={item.items} />;
              default: return <Artifact key={index} title={(item as DefaultContent).title} items={(item as DefaultContent).items} />;
            }
          })}
        </main>

        <footer className="mt-24 pt-8 border-t border-stone-900/10 flex items-center justify-between">
            <button onClick={() => navigateToExhibit(prevExhibitKey)} className="font-sans text-stone-700 hover:text-stone-900 transition-all group flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                <span>Previous Exhibit</span>
            </button>
            <button onClick={() => navigateToExhibit('entrance')} className="font-serif text-stone-700 hover:text-stone-900 transition-all">
                Return to Grand Hall
            </button>
            <button onClick={() => navigateToExhibit(nextExhibitKey)} className="font-sans text-stone-700 hover:text-stone-900 transition-all group flex items-center space-x-2">
                <span>Next Exhibit</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
        </footer>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen font-sans transition-all duration-500"
      style={{ 
          backgroundColor: '#f8f9f0',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentExhibit === 'entrance' ? <GrandHall /> : <ExhibitDisplay />}
      </div>
      <ProgressBubble percentage={percentageExplored} />
    </div>
  );
};

export default Museum;