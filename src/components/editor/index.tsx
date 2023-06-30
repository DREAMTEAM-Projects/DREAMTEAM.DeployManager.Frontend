import React from 'react'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

export const EditorComponent: React.FC<any> = ({ value, onChange }) => {
  const handleEditorChange = (content: string) => {
    onChange?.(content)
  }

  return (
    <ReactQuill
      value={value}
      onChange={handleEditorChange}
      placeholder="Digite seu texto aqui..."
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ color: [] }, { background: [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }}
    />
  )
}
