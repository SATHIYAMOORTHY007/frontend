import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
function Homepage() {
  const [data, setData] = useState('')
  const gethome = async () => {
    try {
      const res = await axios.get('http://localhost:4768/auth/home')
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    gethome()
  }, [])
  return (
    <>
      <div>
        <h1>{data}</h1>
      </div>
    </>
  )
}

export default Homepage
