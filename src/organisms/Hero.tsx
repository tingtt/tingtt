import { PropsDarkMode } from '../../domain/model/Theme/@types'
import {
  GenreSkillBarChart,
  PropsGenreSkillBarChart,
} from '../atoms/GenreSkillBarChart'
import { HeroLogoCaption } from '../molecules/HeroLogoCaption'

export const Hero = ({
  genreSkills,
  isDarkMode,
}: PropsGenreSkillBarChart & PropsDarkMode) => {
  return (
    <div
      className={`
        min-h-screen bg-base-200 xl:p-48 xl:pr-16 2xl:pr-48
        grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center
      `}
    >
      <div className='xl:justify-self-start'>
        <HeroLogoCaption />
      </div>
      <div className='w-full min-w-[300px] max-w-[300px] sm:max-w-[480px] xl:max-w-[400px] h-[300px] flex xl:justify-self-end'>
        <GenreSkillBarChart genreSkills={genreSkills} isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}
