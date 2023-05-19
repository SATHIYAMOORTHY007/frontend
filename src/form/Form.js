import 'bootstrap/dist/css/bootstrap.min.css'
import '../form/form.css'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Form() {
  const [isLoading, setLoading] = useState(false)
  const navigator = useNavigate()
  const [data, setData] = useState('')

  const myformik = useFormik({
    initialValues: {
      email_id: '',
      pwd: '',
    },
    validate: (values) => {
      let errors = {}
      if (!values.email_id) {
        errors.email_id = 'please enter email'
      }
      /* else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_id)
      )  {
        errors.email_id = 'Invalid email address'
      }*/
      if (!values.pwd) {
        errors.pwd = 'please enter password'
      }
      return errors
    },
    onSubmit: async (values) => {
      setLoading(true)
      try {
        console.log('values', values)
        const value = await axios.post(
          'http://localhost:4768/auth/login/',
          values,
        )
        console.log('values', values)
        console.log('data', value)
        navigator('/home')
      } catch (error) {
        setData(error.response.data)
        setLoading(false)
      }
    },
  })

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Login Form</h1>
      <h1>{data}</h1>
      <div className="container">
        <form onSubmit={myformik.handleSubmit}>
          <div className="row">
            <div className="col-8">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className={`form-control ${
                  myformik.errors.email_id ? 'is-invalid' : 'is-valid'
                }`}
                onChange={myformik.handleChange}
                values={myformik.values.email_id}
                name="email_id"
              />
              <span style={{ color: 'red' }}>{myformik.errors.email_id}</span>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <label htmlFor="email" className="form-label">
                password
              </label>
              <input
                type="password"
                className={`form-control ${
                  myformik.errors.pwd ? 'is-invalid' : 'is-valid'
                }`}
                onChange={myformik.handleChange}
                values={myformik.values.pwd}
                name="pwd"
              />
              <span style={{ color: 'red' }}>{myformik.errors.pwd}</span>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <Link to="/register">NewUser Register?</Link>
            </div>
            <div className="col-3">
              <Link to="/forgetpassword">Forget password?</Link>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <button
                type="submit"
                disabled={isLoading}
                className="btn mt-2 btn-primary"
              >
                submit
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="computer"
          />
        </div>
      </div>
    </>
  )
}

export default Form
