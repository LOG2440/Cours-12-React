import React from 'react'

// Un nom avec une majuscule n'est pas imposé, mais c'est la bonne convention à utiliser
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