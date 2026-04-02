export type NavItem = {
  label: string
  to: string
}

export type ProgramTier = {
  name: string
  sessions: string
  summary: string
  focus: string[]
}

export type ServiceItem = {
  title: string
  description: string
}

export type ResourceItem = {
  title: string
  type: string
  description: string
}

export type EventItem = {
  title: string
  format: string
  status: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ProductItem = {
  title: string
  category: string
  price: string
}
