import { Skills } from '../../domain/model/Skills'
import { Skill } from '../../domain/model/Skills/@types'

export const migrate = (i: Skills, skills: Skill[]): Error | null => {
  var err: Error | null = null
  skills.some((s) => {
    err = i.add(s)
    if (err != null) {
      return true
    }
  })
  return err
}
