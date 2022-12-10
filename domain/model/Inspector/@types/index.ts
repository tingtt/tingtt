export type Component = {
  name: string
  level: AtomicLevel
}

export type AtomicLevel = [
  typeof ATOMIC_LEVEL_ATOM,
  typeof ATOMIC_LEVEL_MOLECULE,
  typeof ATOMIC_LEVEL_ORGANISM,
  typeof ATOMIC_LEVEL_TEMPLATE,
  typeof ATOMIC_LEVEL_PAGE
][number]

export const ATOMIC_LEVEL_ATOM: {
  name: 'atom'
  color: 'cyan-500'
} = {
  name: 'atom',
  color: 'cyan-500',
}
export const ATOMIC_LEVEL_MOLECULE: {
  name: 'molecule'
  color: 'teal-500'
} = {
  name: 'molecule',
  color: 'teal-500',
}
export const ATOMIC_LEVEL_ORGANISM: {
  name: 'organism'
  color: 'green-500'
} = {
  name: 'organism',
  color: 'green-500',
}
export const ATOMIC_LEVEL_TEMPLATE: {
  name: 'template'
  color: 'yellow-900'
} = {
  name: 'template',
  color: 'yellow-900',
}
export const ATOMIC_LEVEL_PAGE: {
  name: 'page'
  color: 'orange-400'
} = {
  name: 'page',
  color: 'orange-400',
}
