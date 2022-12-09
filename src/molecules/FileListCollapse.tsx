import { Component } from '../../domain/model/Inspector/@types'
import { FileReact } from '../atoms/FileReact'

export const FileListCollapse = ({
  dirName,
  files,
}: {
  dirName: string
  files: Component[]
}) => {
  return (
    <div tabIndex={0} className='collapse collapse-arrow bg-base-100'>
      <input type='checkbox' defaultChecked={true} />
      <div className='collapse-title font-semibold'>{dirName}</div>
      <div className='collapse-content'>
        {files.map((f) => (
          <div className='pl-4' key={f.name}>
            <FileReact file={f} />
          </div>
        ))}
      </div>
    </div>
  )
}
