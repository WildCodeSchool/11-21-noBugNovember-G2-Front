import React from 'react'
import '../components/styles/AddArticle.css'
import CardArticle from '../components/CardArticle'
import Preview from '../components/Preview'
import { useState, useEffect } from 'react'

//////////////////////// Open graph propre ////////////////////////
//////////////////////// Open graph propre ////////////////////////
//////////////////////// Open graph propre ////////////////////////
//////////////////////// Open graph propre ////////////////////////

function AddArticle() {
  let url =
    'https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/'

  let req = new Request(url)

  const [harry, setHarry] = useState([])
  const [imageArticle, setImageArticle] = useState(false)
  const [titleArticle, setTitleArticle] = useState(false)
  const [descriArticle, setDescriArticle] = useState(false)

  useEffect(() => {
    fetch(req)
      .then(response => response.text())
      .then(data => setHarry(data))
  }, [])

  let parser = new DOMParser()
  let html2 = parser.parseFromString(harry, 'text/html')
  let metas = html2.querySelectorAll('meta')
  imageArticle || titleArticle || descriArticle
    ? ''
    : metas.forEach(meta => {
        const property = meta.getAttribute('property')
        const content = meta.getAttribute('content')
        if (property != null) {
          if (property == 'og:description') {
            // console.log('content', content)
            setDescriArticle(content)
          } else if (property == 'og:image') {
            setImageArticle(content)
          } else if (property == 'og:title') {
            setTitleArticle(content)
          }
        }
      })
  console.log('imageArticle', imageArticle)
  console.log('titleArticle', titleArticle)
  console.log('descriArticle', descriArticle)

  return (
    <div>
      <div className='addArticle'>
        <h1>Test</h1>
        <input placeholder='https://votreurl.ici'></input>
        <Preview />
        <CardArticle description={descriArticle} img={imageArticle} />
      </div>
    </div>
  )
}

export default AddArticle
