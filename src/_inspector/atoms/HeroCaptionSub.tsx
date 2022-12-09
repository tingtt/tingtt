import { PropsInspecting } from '../../../domain/model/Inspector/@types'

export const HeroCaptionSub = ({ inspecting }: PropsInspecting) => {
  return (
    <p className='relative whitespace-nowrap'>
      I love Kubernetes. <br />
      Is there anyone who agrees with me?
      {/* Cover */}
      {inspecting && <div className='atomic-atom-cover' />}
    </p>
  )
}
