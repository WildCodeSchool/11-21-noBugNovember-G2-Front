import './styles/SearchContainer.css'
export default function SearchContainer(props) {
  const setValues = (el) => {
    props.handleSearch(el)
    props.setInput(el)(!props.isSearchButton && props.setIsSearchButton(true))
  }

  return (
    <div className={`searchContainer ${props.display}`}>
      <div className='searchGrid'>
        {props.tab.map((el) => (
          <div className='elGrid'>
            <p onClick={() => setValues(el)}>{el}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
