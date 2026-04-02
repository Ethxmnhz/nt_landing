import type {
  EventItem,
  FaqItem,
  NavItem,
  ProductItem,
  ProgramTier,
  ResourceItem,
  ServiceItem,
} from '../types/site'

export const site = {
  name: 'Naturenergy',
  tagline: 'Reset and protect your energetic system naturally',
  heroTitle: 'Bridging the gap between medical science and ancient wisdom for better recovery.',
  heroSubtitle:
    'I work on the overall aspect of each individual: mental, emotional, and physical. Every first consultation reviews routine, family support, and work environment to understand the complete healing context.',
  email: 'hello@naturenergy.sg',
  whatsappUrl: 'https://wa.me/6590000000',
  bookingEmailUrl:
    'mailto:hello@naturenergy.sg?subject=Book%20Consultation%20-%20Naturenergy',
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Retreats', to: '/programs' },
  { label: 'Story', to: '/story' },
  { label: 'Events', to: '/events' },
  { label: 'Resources', to: '/resources' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export const services: ServiceItem[] = [
  {
    title: 'Energy Mapping Consultation',
    description:
      'Deep initial evaluation of lifestyle, emotional environment, and recovery pressure points before any session plan begins.',
  },
  {
    title: 'Chakra Energy Rebalancing',
    description:
      'Guided healing sessions to support energetic reset, regulation, and resilience for people going through heavy life phases.',
  },
  {
    title: 'Recovery Movement Practice',
    description:
      'Simple and practical body movements used to improve physical confidence and maintain flow between sessions.',
  },
  {
    title: 'Emotional Support Coaching',
    description:
      'Support tools to reduce isolation and improve day-to-day emotional steadiness, even when life circumstances are intense.',
  },
]

export const programs: ProgramTier[] = [
  {
    name: 'Foundation Reset',
    sessions: '5 sessions',
    summary: 'Ideal first package to stabilize energy and create basic recovery rhythm.',
    focus: ['Baseline emotional support', 'Daily routine reset', 'Core chakra balancing'],
  },
  {
    name: 'Recovery Integration',
    sessions: '8 sessions',
    summary: 'Balanced package for deeper healing momentum across body, mind, and energy.',
    focus: ['Movement progression', 'Structured emotional practices', 'Energetic strengthening'],
  },
  {
    name: 'Transformation Support',
    sessions: '10 sessions',
    summary:
      'Full-package support for sustained recovery and long-term self-management practices.',
    focus: ['Long-term care map', 'Lifestyle integration', 'Relapse prevention routines'],
  },
]

export const events: EventItem[] = [
  {
    title: 'Healing Foundations Workshop',
    format: 'Live group session',
    status: 'Upcoming',
    description:
      'A guided introduction to energetic self-protection, recovery mindset, and everyday regulation practices.',
  },
  {
    title: 'Recovery Circle',
    format: 'Small cohort',
    status: 'Upcoming',
    description:
      'Safe space sessions for people navigating emotional overwhelm, fatigue, and high-stress life recovery.',
  },
  {
    title: 'Corporate Wellbeing Talk',
    format: 'Team event',
    status: 'By request',
    description:
      'Practical framework for protecting energy and maintaining mental clarity in demanding work environments.',
  },
]

export const resources: ResourceItem[] = [
  {
    title: 'Daily Energy Hygiene Checklist',
    type: 'Guide',
    description:
      'Morning and evening system for protecting and resetting your personal energy across a busy day.',
  },
  {
    title: 'Breath + Movement Recovery Protocol',
    type: 'Practice',
    description:
      'Short method combining breathing and physical movement to regulate overwhelm and improve body confidence.',
  },
  {
    title: 'Recovery Reflection Journal',
    type: 'Workbook',
    description:
      'Journaling framework to track emotional patterns, triggers, and healing progress each week.',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'How many sessions should I start with?',
    answer:
      'Most people begin with a 5-session package. If your recovery phase is complex, we extend to 8 or 10 sessions.',
  },
  {
    question: 'Is this approach practical or spiritual?',
    answer:
      'It is both practical and energetic. Sessions include real routine changes, movement practices, and emotional support tools.',
  },
  {
    question: 'Do you have testimonials?',
    answer:
      'Not yet. This practice is in an early growth phase and testimonials will be added as clients complete journeys.',
  },
]

export const featuredProducts: ProductItem[] = [
  { title: 'Generating Flow', category: 'Meditations', price: '$25.00' },
  { title: 'Generating Joy', category: 'Meditations', price: '$25.00' },
  { title: 'Progressive Online Course', category: 'Courses', price: '$349.00' },
  { title: 'Believing, Behaving, Becoming Abundance', category: 'Courses', price: '$349.00' },
]

export const upcomingRetreats = [
  'Aurora, Colorado - Week Long Retreat - April 04-10, 2026',
  'Texas - Week Long Retreat - May 10-16, 2026',
  'Riviera Maya - Advanced Follow Up Retreat - June 08-17, 2026',
]

export const homeHighlights = [
  {
    title: 'Read Naturenergy Blog',
    description:
      'Educational posts covering mindset, energy hygiene, emotional regulation, and healing practices.',
    cta: 'View All Blogs',
  },
  {
    title: 'Naturenergy Live',
    description:
      'Join member livestream sessions for direct guidance, questions, and practical walkthroughs.',
    cta: 'Join Naturenergy Live',
  },
  {
    title: 'Stories of Transformation',
    description:
      'Real journeys of people moving from adversity into strength, clarity, and meaningful recovery.',
    cta: 'View All Stories',
  },
]
