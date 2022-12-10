import { Dispatch, SetStateAction } from 'react'

export type PropsToggleInspect = {
  inspecting: boolean
  setInspecting: Dispatch<SetStateAction<boolean>> | ((b: boolean) => void)
}

export const ToggleInspect = ({
  inspecting,
  setInspecting,
}: PropsToggleInspect) => {
  return (
    <div className='alert shadow-lg border-2'>
      <div className='flex gap-4'>
        <span>Inspect</span>
        <input
          type='checkbox'
          className='toggle'
          checked={inspecting}
          onChange={(e) => {
            setInspecting(e.target.checked)
          }}
        />
      </div>
    </div>
  )
}
