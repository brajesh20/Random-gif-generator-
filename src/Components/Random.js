import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

const API_KEY = process.env.REACT_APP_API_KEY

const Random = () => {
  const [gif, setGif] = useState('')
  const [loading, setLoading]= useState(false)

  async function fetchData () {
    try {
      setLoading(true)
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
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

  return (
    <div>
      <div className='div1'>
        <h1>RANDOM GIF</h1>

        {
          loading ? ( <Spinner /> ) : (<img src={gif} alt='Random Gif' />)
        }

        <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  )
}

export default Random
