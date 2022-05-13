const Gif = (props) => {
  return(
    <div>
      <h2>Use Giphy To Pull Some Gifs</h2>
      <img src={props.gifData?.images.original.url} alt=''/>
    </div>
  )
}

export default Gif
