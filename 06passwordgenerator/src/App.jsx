import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [passLength, setPassLength] = useState(8)
  let [password, setPassword] = useState('')
  let [numberIncluded, setNumberIncluded] = useState(false)
  let [specialCharacterIncluded, setSpecialCharacterIncluded] = useState(false)

  const copyPassword = useRef(null)

  const passGenerator = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newPassword = ''

    chars = (numberIncluded) ? chars += '0123456789' : chars
    chars = (specialCharacterIncluded) ? chars += '!@#$%^&*()_+[]{}|;:,.<>?' : chars

    for (let i = 1; i <= passLength; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length)
      newPassword += chars.charAt(randomIndex)
    }
    setPassword(newPassword)

  }, [passLength, numberIncluded, specialCharacterIncluded])


  useEffect(() => {
    passGenerator()
  }, [passGenerator])


  return (
    <>
      <h3>Password Generator</h3>

      <input
        type='text'
        value={password}
        readOnly
        style={{ marginBottom: "20px" }}
        size={30}
        ref={copyPassword}
      />

      <br />

      <input
        type='range'
        min={8}
        max={25}
        value={passLength}
        onChange={(e) => setPassLength(e.target.value)}
      />

      <br />

      Numbers <input type="checkbox" value={numberIncluded} onChange={() => setNumberIncluded(!numberIncluded)} />

      <br />

      Special Characters <input type="checkbox" value={specialCharacterIncluded} onChange={() => setSpecialCharacterIncluded(!specialCharacterIncluded)} />

      <br /><br />

      <button onClick={() => navigator.clipboard.writeText(copyPassword.current.value)}>Copy</button>
    </>
  )
}

export default App