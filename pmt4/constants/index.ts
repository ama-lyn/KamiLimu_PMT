import { Building2, ShieldCheck, Award, Mic, Heart, Lightbulb, BookOpen
  } from 'lucide-react';
import type { ExhibitCollection } from '@/interfaces/index'

export const exhibits: ExhibitCollection = {
    entrance: {
      title: "Museum of Monthly Mastery",
      subtitle: "A Curated Collection of Learning Excellence",
      description: "Welcome to a gallery of curated knowledge. Each exhibition hall showcases a domain of intellectual pursuit from this month's journey. Begin your tour to explore the artifacts within.",
      lucideIcon: Building2
    },
    interview: {
      title: "The Interview Atelier",
      subtitle: "Professional Excellence & Career Artistry",
      description: "An exhibition of frameworks, methodologies, and refined techniques for professional presentation mastery.",
      lucideIcon: Mic,
      content: [
        { type: 'masterpiece', title: 'The Cornerstone: Your Narrative', description: 'The most effective way to answer "Tell me about yourself" is to structure it as a compelling story using the Present → Past → Future model. This provides a clear, confident, and relevant introduction.' },
        { type: 'flowchart', title: 'Essential Frameworks', items: ["Circumstance → Action → Result (CAR)", "Situation → Task → Action → Result (STAR)"]},
        { type: 'checklist', title: 'The Complete Interview Cycle', items: ["Before: Research the company, interviewer, and role.", "During: Provide evidence-based answers and ask thoughtful questions.", "After: Send a thank-you note and connect on LinkedIn."] },
        { type: 'default', title: 'Navigating the "Weakness" Question', items: ["Choose a genuine skill you are actively improving.", "Frame it as a journey of growth, not a fixed flaw.", "Example: 'A technical skill I\'m currently developing is X, and I\'m taking Y course to master it.'"] }
      ]
    },
    problems: {
      title: "The Innovation Wing",
      subtitle: "Human-Centered Design & Problem Architecture",
      description: "A comprehensive study of identifying, analyzing, and solving problems that transform human experiences.",
      lucideIcon: Lightbulb,
      content: [
        { type: 'masterpiece', title: 'The Lens: What Makes a Problem Worth Solving?', description: 'A problem is worth solving only if it is Relevant (high user frustration), Solvable (with available resources), and Marketable (with potentially profitable or impactful results). All three criteria must be met.' },
        { type: 'flowchart', title: 'The "5 Whys" Technique', items: ["Define Problem", "Ask 'Why?'", "Ask 'Why?' Again", "Repeat x3", "Identify Root Cause"]},
        { type: 'checklist', title: 'Innovation Metrics', items: ["Addresses a real need", "Creates tangible value", "Is technically feasible", "Is user-friendly and sustainable", "Is scalable"] },
        { type: 'default', title: 'Anatomy of a Problem Statement', items: ["The general challenge you're solving.", "The specific, root cause of that challenge.", "The target group it profoundly affects.", "A clear explanation of why the issue matters."] }
      ]
    },
    storytelling: {
      title: "The Narrative Gallery",
      subtitle: "Stories That Move Mountains",
      description: "Master works in the art of transforming experiences into compelling narratives that inspire and connect.",
      lucideIcon: BookOpen,
      content: [
          { type: 'masterpiece', title: 'Design Thinking for Storytelling', description: 'The key to a powerful story is to arrange the structure *before* writing. Use sticky notes or a board to visualize the arc, define a specific purpose, and build a solid Introduction, Body (2-4 movements), and Conclusion.'},
          { type: 'quote', author: 'On Craftsmanship', text: 'A good title is like a door—it invites the audience in. Use strong imagery, spark curiosity, and hint at the heart of the message.'},
          { type: 'checklist', title: 'Core Storytelling Skills', items: ["Reflecting on personal experiences", "Note-taking to capture key moments", "Using vivid sensory descriptions"] },
          { type: 'quote', author: 'On Practice', text: 'Don’t memorize a script, internalize the flow. True mastery is testing your flexibility by rephrasing on the fly.'},
      ]
    },
    cloud: {
      title: "The Digital Fortress",
      subtitle: "Cloud Security & Identity Architecture",
      description: "An exploration of secure cloud foundations, identity management, and the architecture of digital trust.",
      lucideIcon: ShieldCheck,
      content: [
        { type: 'masterpiece', title: 'The Golden Rule of Cloud Security', description: 'The root account has complete control and should never be used for daily tasks. Always create an IAM user with specific, limited permissions. This principle of "least privilege" is the foundation of a secure cloud environment.'},
        { type: 'flowchart', title: 'IAM Entities', items: ["IAM Users (Long-term identities)", "IAM Roles (Temporary access)", "IAM Policies (Permissions)"]},
        { type: 'checklist', title: 'Key Access Control Principles', items: ["Everything is denied by default", "Permissions must be explicitly allowed", "Avoid complex Access Control Lists (ACLs) when possible"] },
        { type: 'default', title: 'Policy Management Approaches', items: ["AWS Managed Policies: Predefined, for common use cases.", "Customer Managed Policies: Custom, reusable policies you create.", "Inline Policies: Embedded directly into a single user, group, or role."] }
      ]
    },
    scholarship: {
      title: "The Achievement Archives",
      subtitle: "Excellence in Academic & Professional Pursuits",
      description: "A masterclass in crafting competitive applications and capturing high-value opportunities.",
      lucideIcon: Award,
      content: [
        { type: 'masterpiece', title: 'The Cardinal Rules of Submission', description: 'First impressions are final. Strictly adhere to all instructions: word counts, file formats (e.g., Word vs. PDF), and file naming conventions. Never miss a deadline. These non-negotiable details signal professionalism and respect.'},
        { type: 'checklist', title: 'The Application Portfolio', items: ["Core Essays or Personal Statement", "Curriculum Vitae (CV) and Transcripts", "1-3 Professional or Academic References", "Links to projects or prior work (if applicable)."] },
        { type: 'quote', author: 'On Formal Address', text: 'When in doubt, do not use "Sir/Madam." Address your letter to the "Scholarship Selection Committee" for a professional and appropriate tone.'},
        { type: 'checklist', title: 'Preparing for Success', items: ["Thoroughly research the organization and its values", "Articulate clear short and long-term goals", "Ask yourself: 'What do I bring beyond good grades?'"]},
      ]
    },
    speaking: {
      title: "The Oratory Pavilion",
      subtitle: "The Art of Commanding Presence",
      description: "Classical techniques and modern mastery in the timeless art of public speaking and audience captivation.",
      lucideIcon: Mic,
      content: [
        { type: 'masterpiece', title: 'The Speaking Triangle', description: 'Movement on stage must be purposeful. Define three points: Point A for your opening, Point B for your first key message, and Point C for your second or concluding message. Moving between these points provides structure and meaning to your physical presence.'},
        { type: 'flowchart', title: 'The Four Pillars of Vocal Variety', items: ["Power (Volume)", "Pause (Suspense)", "Pitch (Tone)", "Pace (Speed)"]},
        { type: 'checklist', title: 'The Performance Begins: Entry & Exit', items: ["Entry: Pause, scan the room, make eye contact, and plant your feet before speaking.", "Exit: Smile, take a calm breath, and walk off confidently without rushing."] },
        { type: 'quote', author: 'On Connection', text: 'When you speak to a room, you speak to no one. When you speak to a person, you connect with everyone.'},
      ]
    },
    reflection: {
      title: "The Contemplation Chamber",
      subtitle: "Wisdom Through Introspection",
      description: "A quiet sanctuary where insights crystallize and personal principles find their voice.",
      lucideIcon: Heart,
      content: [
        { type: 'masterpiece', title: 'The Core Insight', description: 'What you truly need often reveals itself only when you slow down and reflect. Making reflection a daily habit, not just a crisis response, is transformative.' },
        { type: 'quote', author: 'Personal Mantras', text: 'Don’t disqualify yourself. You can’t be mediocre in peace. Show up and give 110%.'},
        { type: 'quote', author: 'On Community and Comparison', text: 'Don’t be intimidated by people’s success.'},
        { type: 'default', title: 'The Power of Community', items: ["The compliment wall was a powerful reminder of the reciprocal nature of appreciation and the strength found in kind words, both given and received."] },
      ]
    }
  };
