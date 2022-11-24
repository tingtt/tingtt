import { RepositorySkills } from '../../../../domain/model/Skills'
import { Skill } from '../../../../domain/model/Skills/@types'

export class RepositorySkillsInMemory implements RepositorySkills {
  private data: Skill[] = []

  add(s: Skill): Error | null {
    // add
    this.data.push(s)
    return null
  }

  find(): [Skill[], Error | null] {
    return [this.data, null]
  }

  findOne(name: string): [Skill | undefined, Error | null] {
    const filtered = this.data.filter(({ name: n }) => n == name).pop()
    if (filtered == undefined) {
      // not found
      return [filtered, new Error(`'Skill' "${name}" not found`)]
    }
    return [filtered, null]
  }
}
