import { Component } from '../../domain/model/Inspector/@types'
import { SvgReact } from '../_inspector/atoms/SvgReact'

export const FileListCollapse = ({
  dirName,
  files,
  selected,
}: {
  dirName: string
  files: Component[]
  selected: Component
}) => {
  return (
    <div tabIndex={0} className='collapse collapse-arrow bg-base-100'>
      <input type='checkbox' defaultChecked={true} />
      <div className='collapse-title font-semibold'>{dirName}</div>
      <div className='collapse-content'>
        {files.map((f) => (
          <div className='pl-4' key={f.name}>
            <div
              className={`
                flex items-center gap-1 p-3 hover:bg-base-200 rounded
                ${selected == f ? 'bg-base-300/90' : ''}
              `}
            >
              <SvgReact width={20} height={20} />
              {f.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
