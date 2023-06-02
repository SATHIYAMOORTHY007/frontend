import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate, Link, redirect } from 'react-router-dom'
import { useEffect } from 'react'
function Urltable() {
  const [value, SetValue] = useState('')
  const getdata = async () => {
    try {
      const values = await axios.get(
        'https://passwordrestflow.onrender.com/auth/getall',
        {
          headers: {
            Access_token: window.sessionStorage.getItem('access_token'),
          },
        },
      )
      SetValue(values.data)
    } catch {
      alert('not auth')
    }
  }
  console.log(value.data)
  useEffect(() => {
    getdata()
  }, [getdata])
  const navigator = useNavigate()
  function log() {
    window.sessionStorage.clear('access_token')
    navigator('/')
  }
  return (
    <>
      <div className="row wrapper">
        <div className="col-11 position-relative">
          <button
            className="btn btn-danger position-absolute top-0 start-100 translate-middle "
            onClick={() => {
              log()
            }}
          >
            Logout
          </button>
        </div>
      </div>
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

                      <a href={d.longUrl} target="_bank">
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
