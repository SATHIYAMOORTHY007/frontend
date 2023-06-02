import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
function Urlsumbit() {
  /*   const token = window.sessionStorage.getItem('access_token') */

  const [loading, setLoading] = useState(false)
  const myformik = useFormik({
    initialValues: {
      longurl: '',
    },
    validate: (values) => {
      let error = {}
      if (!values.longurl) return (error.longurl = 'url need')
    },
    onSubmit: async (values) => {
      try {
        const data = await axios.post(
          'https://passwordrestflow.onrender.com/auth/create',
          values,
          {
            headers: {
              Access_token: window.sessionStorage.getItem('Access_token'),
            },
          },
        )

        myformik.values.longurl = ''
        alert('submit successfully')
      } catch (error) {
        console.log(error)
      }
    },
  })
  const navigator = useNavigate()
  function log() {
    window.sessionStorage.clear('access_token')
    navigator('/')
  }
  return (
    <>
      <div className="row wrapper ">
        <>
          <div className="row position-relative">
            <div className="col position-absolute top-50 start-100 translate-middle">
              <button
                className="btn btn-danger "
                onClick={() => {
                  log()
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </>
        <form onSubmit={myformik.handleSubmit}>
          <div class="input-group mb-3">
            <div className="col-4">
              <input
                type="text"
                class="form-control"
                onChange={myformik.handleChange}
                value={myformik.values.longurl}
                placeholder=" (e.x)www.google/font-icon"
                name="longurl"
              />
            </div>
            <span style={{ color: 'red' }}>{myformik.errors.longurl}</span>
            <button value="submit" type="submit" className="btn  btn-danger ">
              sumbit
            </button>
          </div>
        </form>

        <div className="row">
          <div className="col-12">
            <Link to="/url/table">
              <button type="button" class="btn btn-primary">
                Url Table
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Urlsumbit
