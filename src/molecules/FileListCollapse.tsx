import { useComponent, useComponentEquals } from '../../domain/model/Inspector'
import { Component } from '../../domain/model/Inspector/@types'
import { FileReact } from '../atoms/FileReact'

export const FileListCollapse = ({
  dirName,
  files,
}: {
  dirName: string
  files: Component[]
}) => {
  const [selected, setComponent] = useComponent()
  const { equals } = useComponentEquals()

  return (
    <div tabIndex={0} className='collapse collapse-arrow bg-base-100'>
      <input type='checkbox' defaultChecked={true} />
      <div className='collapse-title font-semibold'>{dirName}</div>
      <div className='collapse-content'>
        {files.map((f) => (
          <div className='pl-4' key={f.name}>
            <FileReact
              file={f}
              selected={equals(selected, f)}
              onClick={() => {
                setComponent(f)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
