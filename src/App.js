import Form from './form/Form'
import Homepage from './home/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './registerForm/Register'
import Forgetpassword from './forgetpassword/Forgetpassword'
import Reset from './resetpassword/Reset'
function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/resetpassword/:id/:token" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
