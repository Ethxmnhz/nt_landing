import type {
  ConsultationStep,
  FaqItem,
  FounderStoryBlock,
  HealingPillar,
  NavItem,
  ProgramTier,
  ServiceItem,
} from '../types/site'

export const site = {
  name: 'Naturenergy',
  tagline: 'Reset and protect your energetic system naturally',
  heroTitle: 'Bridging Medical Science and Ancient Wisdom for Better Recovery',
  heroSubtitle:
    'Holistic healing across your mental, emotional, and physical dimensions — because even with support around you, you can still feel alone.',
  email: 'hello@naturenergy.sg',
  whatsappUrl: 'https://wa.me/6590000000',
  bookingEmailUrl:
    'mailto:hello@naturenergy.sg?subject=Book%20Consultation%20-%20Naturenergy',
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Story', to: '/story' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book Consultation', to: '/book', highlight: true },
]

export const healingPillars: HealingPillar[] = [
  {
    title: 'Chakra Energy Healing',
    description:
      'Guided energy healing through your chakra system to restore emotional balance, release energetic blocks, and strengthen inner regulation.',
  },
  {
    title: 'Physical Movement',
    description:
      'Simple, practical body movements to rebuild physical confidence, maintain flow between sessions, and reconnect with your body.',
  },
  {
    title: 'Emotional Support',
    description:
      'Tools and practices to reduce isolation, improve day-to-day emotional steadiness, and build genuine resilience through difficult phases.',
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Energy Mapping Consultation',
    description:
      'Deep initial evaluation of your lifestyle, emotional environment, and recovery pressure points before any session plan begins.',
  },
  {
    title: 'Chakra Energy Rebalancing',
    description:
      'Guided healing sessions to support energetic reset, regulation, and resilience for people going through heavy life phases.',
  },
  {
    title: 'Recovery Movement Practice',
    description:
      'Simple and practical body movements to improve physical confidence and maintain energy flow between sessions.',
  },
  {
    title: 'Emotional Support Coaching',
    description:
      'Support tools to reduce isolation and improve day-to-day emotional steadiness, even when life circumstances are intense.',
  },
]

export const consultationProcess: ConsultationStep[] = [
  {
    step: 1,
    title: 'Assess',
    description:
      'We review your daily routines, family support, work environment, and emotional landscape to understand your complete healing context.',
  },
  {
    step: 2,
    title: 'Heal',
    description:
      'Personalized sessions combining chakra healing, physical movement, and emotional support tools tailored to your recovery phase.',
  },
  {
    step: 3,
    title: 'Integrate',
    description:
      'Build sustainable self-management practices so your healing continues long after our sessions together.',
  },
]

export const programs: ProgramTier[] = [
  {
    name: '5-Session Package',
    sessions: '5 sessions',
    summary:
      'Ideal first package to stabilize energy and create a basic recovery rhythm.',
    ideal: 'Best for people beginning their healing journey',
    focus: [
      'Baseline emotional support',
      'Daily routine reset',
      'Core chakra balancing',
    ],
  },
  {
    name: '8-Session Package',
    sessions: '8 sessions',
    summary:
      'Balanced package for deeper healing momentum across body, mind, and energy.',
    ideal: 'Best for people navigating complex recovery phases',
    focus: [
      'Movement progression',
      'Structured emotional practices',
      'Energetic strengthening',
    ],
  },
  {
    name: '10-Session Package',
    sessions: '10 sessions',
    summary:
      'Full support for sustained recovery and long-term self-management practices.',
    ideal: 'Best for people committed to lasting transformation',
    focus: [
      'Long-term care map',
      'Lifestyle integration',
      'Self-regulation mastery',
    ],
  },
]

export const founderStory: FounderStoryBlock[] = [
  {
    phase: 'The Challenge',
    title: 'A Life-Changing Moment',
    description:
      'A serious accident became the turning point. What began as a physical recovery journey revealed deeper emotional and energetic dimensions that conventional medicine alone could not address.',
  },
  {
    phase: 'The Discovery',
    title: 'Finding a New Path',
    description:
      'Through personal healing, the connection between medical science and ancient wisdom became clear. Chakra healing, physical movement, and emotional support formed an integrated recovery framework.',
  },
  {
    phase: 'The Purpose',
    title: 'Helping Others Heal',
    description:
      'What helped one person recover became a practice dedicated to helping others. Naturenergy was created to support people who feel alone in their healing journey, even when surrounded by caring people.',
  },
  {
    phase: 'The Practice',
    title: 'Practical & Grounded',
    description:
      'Every session is built on practical experience, relevant certifications, and lived understanding of what it means to recover from adversity. No empty promises — just real, structured support.',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'How many sessions should I start with?',
    answer:
      'Most people begin with a 5-session package. If your recovery phase is more complex or you want deeper work, we extend to 8 or 10 sessions based on your needs and pace.',
  },
  {
    question: 'Is this approach spiritual, practical, or both?',
    answer:
      'It is both practical and energetic. Sessions include real routine changes, movement practices, emotional support tools, and chakra-based healing. The approach bridges medical understanding with ancient wisdom.',
  },
  {
    question: 'What happens in the first consultation?',
    answer:
      'During the first consultation, I review your daily routines, family support system, work environment, and emotional state to understand your complete healing context. This helps me design a personalized session plan.',
  },
  {
    question: 'Is this suitable for people in emotional recovery?',
    answer:
      'Absolutely. This work is specifically designed for people navigating emotional overwhelm, fatigue, isolation, and high-stress life recovery. Even if you have supportive people around you, you may still feel alone — this practice addresses that directly.',
  },
  {
    question: 'How do I book a consultation?',
    answer:
      'You can book through email at hello@naturenergy.sg or send a direct WhatsApp message. We will respond to discuss your situation and find a suitable time for your first session.',
  },
]
