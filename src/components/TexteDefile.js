import '../components/styles/TextScroll.css'

export default function TexteDefile({ title }) {
  return (
    <div className='messagedefilant'>
      <div className='messageContent' data-text={title}>
        <span className='messageH2'>{title}</span>
      </div>
    </div>
  )
}
