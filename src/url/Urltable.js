import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
function Urltable() {
  const [value, SetValue] = useState('')
  const getdata = async () => {
    try {
      const values = await axios.get('http://localhost:4768/auth/getall', {
        headers: {
          access_token: window.sessionStorage.getItem('access_token'),
        },
      })
      SetValue(values.data)
    } catch {
      alert('not auth')
    }
  }
  console.log(value.data)
  useEffect(() => {
    getdata()
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-6 text-center">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Long Url</th>
                <th scope="col">Short Url</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {value &&
                  value.map((d) => (
                    <tr>
                      <td key={d.id}>{d.longUrl}</td>

                      <a target="_bank">
                        <td key={d.id}>{d.shortUrl}</td>
                      </a>
                    </tr>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default Urltable
