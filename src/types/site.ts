export type NavItem = {
  label: string
  to: string
  highlight?: boolean
}

export type ProgramTier = {
  name: string
  sessions: string
  summary: string
  ideal: string
  focus: string[]
}

export type ServiceItem = {
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ConsultationStep = {
  step: number
  title: string
  description: string
}

export type FounderStoryBlock = {
  phase: string
  title: string
  description: string
}

export type HealingPillar = {
  title: string
  description: string
}
