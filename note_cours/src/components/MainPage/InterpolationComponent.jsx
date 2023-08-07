import React from 'react'

const InterpolationComponent = () => {
  const blog = {
    title: "Mon titre interpolé",
    paragraphe: "Mon texte interpolé"
  }
  return (
    <section className='post'>
      <h1>{blog.title}</h1>
      <p>{blog.paragraphe}</p>
    </section>
  )
};

export default InterpolationComponent;