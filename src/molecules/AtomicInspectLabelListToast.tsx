import { AtomicInspectLabelAtom } from '../atoms/AtomicInspectLabelAtom'
import { AtomicInspectLabelMolecule } from '../atoms/AtomicInspectLabelMolecule'
import { AtomicInspectLabelOrganism } from '../atoms/AtomicInspectLabelOrganism'
import { AtomicInspectLabelaPage } from '../atoms/AtomicInspectLabelPage'
import { AtomicInspectLabelTemplate } from '../atoms/AtomicInspectLabelTemplate'

export const AtomicInspectLabelListToast = () => {
  return (
    <div className='alert shadow-lg border-2 gap-4'>
      <AtomicInspectLabelAtom />
      <AtomicInspectLabelMolecule />
      <AtomicInspectLabelOrganism />
      <AtomicInspectLabelTemplate />
      <AtomicInspectLabelaPage />
    </div>
  )
}
