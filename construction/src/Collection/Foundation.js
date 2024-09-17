import React, { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
const Foundation = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className = "facad foundations">
      <div className = "fac ">
      <p>Drag 'n' drop some files here, or click to select files</p>

      <div {...getRootProps()}>

      <input {...getInputProps()} />

      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <button className = "Submit">Submit</button>
      }
      </div>
    </div>
    </div>
)
}

export default Foundation