import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [passLength, setPassLength] = useState(8)
  let [password, setPassword] = useState('')
  let [numberIncluded, setNumberIncluded] = useState(false)
  let [specialCharacterIncluded, setSpecialCharacterIncluded] = useState(false)

  const passGenerator = () => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    password = ''

    chars = (numberIncluded) ? chars += '0123456789' : chars
    chars = (specialCharacterIncluded) ? chars += '!@#$%^&*()_+[]{}|;:,.<>?' : chars

    for (let i = 1; i <= passLength; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length)
      password += chars.charAt(randomIndex)
    }
    setPassword(password)
  }


  useEffect(() => {
    passGenerator()
  }, [passLength, numberIncluded, specialCharacterIncluded])


  return (
    <>
      <h3>Password Generator</h3>

      <input
        type='text'
        value={password}
        readOnly
        style={{ marginBottom: "20px" }}
        size={30}
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
    </>
  )
}

export default App