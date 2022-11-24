import SKILLS from '../../data/Skills'
import { Skills } from '../../domain/model/Skills'

export const migrate = (skills: Skills): Error | null => {
  var err: Error | null = null
  SKILLS.some((s) => {
    err = skills.add(s)
    if (err != null) {
      return true
    }
  })
  return err
}
