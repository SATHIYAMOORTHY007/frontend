import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
function Urlsumbit() {
  const token = window.sessionStorage.getItem('access_token')
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
          'http://localhost:4768/auth/create',
          values,
          {
            headers: {
              access_token: token,
            },
          },
        )

        myformik.values.longurl = ''
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <>
      <div className="row wrapper ">
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
