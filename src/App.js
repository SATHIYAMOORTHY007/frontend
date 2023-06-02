import Form from './form/Form'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Register from './registerForm/Register'
import Forgetpassword from './forgetpassword/Forgetpassword'
import Reset from './resetpassword/Reset'
import Urlsumbit from './url/Urlsumbit'
import Urltable from './url/Urltable'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'

import Cookies from 'js-cookie'
import { useEffect } from 'react'

function Auth({ children }) {
  const token = window.sessionStorage.getItem('access_token')

  if (!token) {
    return <Navigate to="/" />
  } else {
    return children
  }
}

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/resetpassword/:id/:token" element={<Reset />} />
          <Route
            path="/url/submit"
            element={
              <Auth>
                <Urlsumbit />
              </Auth>
            }
          />
          <Route
            path="/url/table"
            element={
              <Auth>
                <Urltable />
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
