import SKILLS from '..'

it('skill data not contain duplicate name', () => {
  expect(
    SKILLS.map((s) => s.name).filter((s, index, arr) => arr.indexOf(s) != index)
      .length
  ).toBe(0)
})
