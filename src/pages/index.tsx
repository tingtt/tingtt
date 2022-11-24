import type { NextPage } from 'next'
import Head from 'next/head'
import { getSkills } from '../../application/Skills'
import { Skill } from '../../domain/model/Skills/@types'

type Props = {
  skills: Skill[]
}

const Home: NextPage<Props> = (props) => {
  return (
    <div className='px-[2rem]'>
      <Head>
        <title>{`tingtt's portfolio`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <table className='table m-4'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {props.skills.map((s) => {
            return (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.level}</td>
                <td>{s.genre}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const [skills, err] = getSkills()
  if (err != null) {
    throw err
  }

  return {
    props: {
      skills,
    },
  }
}

export default Home
