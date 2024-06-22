import React from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import { useEffect, useState } from 'react'
const API_KEY = process.env.REACT_APP_API_KEY

const Tag = () => {
  const [tag, setTag]=useState('')
  const [gif, setGif] = useState('')
  const [loading, setLoading] = useState(false)

  async function fetchData () {
    try {
      setLoading(true)
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
      const { data } = await axios.get(url)
      setGif(data.data.images.downsized_large.url)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const clickHandler = () => {
    fetchData()
  }

  const setHandler = (event) => {
    setTag(event.target.value)
  }

  return (
    <div>
      <div className='div2'>
        <h1>RANDOM {tag} GIF</h1>

        {loading ? (<Spinner />) : (<img src={gif} alt='Random Gif' />)}

        <input onChange={setHandler} type='text' placeholder='Enter the meme you wish to see' />
        <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  )
}

export default Tag
