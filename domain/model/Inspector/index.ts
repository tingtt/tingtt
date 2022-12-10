import { Component } from './@types'

import { useCallback, useEffect, useState } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const componentState = atom<Component>({
  key: 'component',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
})

export const useComponent = (): [
  Component | undefined,
  (c: Component) => void
] => {
  //* Note: React Hydration Error
  //  https://nextjs.org/docs/messages/react-hydration-error
  const [isInitial, setIsInitial] = useState(true)
  useEffect(() => {
    setIsInitial(false)
  }, [])
  const [component, setComponent] = useRecoilState(componentState)
  return [
    isInitial === true ? undefined : component,
    useCallback((c: Component) => setComponent(c), [setComponent]),
  ]
}

export const useComponentSelected = (c: Component) => {
  const component = useRecoilValue(componentState)
  const { equals } = useComponentEquals()
  return equals(component, c)
}

export const useComponentEquals = () => {
  return {
    equals: (a: Component | undefined, b: Component | undefined) => {
      if (a == undefined || b == undefined) {
        return false
      }
      return a.name == b.name && a.level == b.level
    },
  }
}
