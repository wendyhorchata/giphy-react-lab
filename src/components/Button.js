import React, {useState} from 'react'

function Button(props) {
  const[gifUrl, setGifUrl] = useState({})


const handleSubmit = e => {
  e.preventDefault()
  props.handleSubmit(gifUrl)
  setGifUrl({})
}

return (
  <>
  <form onSubmit={handleSubmit}>
    <input type='submit' value='Make API Call Again' 
    />
  </form>
  </>
)
}
export default Button