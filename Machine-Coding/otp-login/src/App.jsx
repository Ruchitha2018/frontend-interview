import { useEffect, useState, useRef } from 'react'
import './App.css'
import OtpInput from './components/OtpInput';

function App() {


  useEffect(() => {
  }, [])

  return (
    <>
   
    <OtpInput length={4} />
    </>
  )
}

export default App
