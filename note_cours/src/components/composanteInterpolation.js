import React from 'react'

const composanteInterpolation = () => {
  const blog = {
    title: "Mon titre",
    paragraphe: "Mon texte"
  }
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.paragraphe}</p>
    </div>
  )
}

export default composanteInterpolation