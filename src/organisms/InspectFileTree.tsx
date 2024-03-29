import { Component } from '../../domain/model/Inspector/@types'
import { FileListCollapse } from '../molecules/FileListCollapse'

export type PropsInspectFileTree = {
  files: {
    pages: Component[]
    templates: Component[]
    organisms: Component[]
    molecules: Component[]
    atoms: Component[]
  }
}

export const InspectFileTree = ({ files }: PropsInspectFileTree) => {
  return (
    <div>
      {Object.keys(files).map((key) => {
        const dir = key as
          | 'pages'
          | 'templates'
          | 'organisms'
          | 'molecules'
          | 'atoms'
        return <FileListCollapse key={dir} dirName={dir} files={files[dir]} />
      })}
    </div>
  )
}
