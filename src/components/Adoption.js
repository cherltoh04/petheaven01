import React, { useState } from "react"
import "../Login.css"

const Adoption = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const [allValue, setAllValue] = useState([])
  const formSubmit = (e) => {
    e.preventDefault()

    const newValue = { fname, lname, phone, email}
    setAllValue([...allValue, newValue])

    setFname("")
    setLname("")
    setPhone("")
    setEmail("")
  }
  return (
    <>
      <section className=''>
        <div className='adopt'>
            <h2>Adopt a pet today!</h2>
            <p>Enter your details below and our friendly team will contact you within the next 2-3 working days</p>

            <form onSubmit={formSubmit}>
              <div className=''>
                <div className='input'>
                  <span>
                    Name <label>*</label>
                  </span>
                  <input type='text' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} required />
                  </div>
                <div className='input'>
                  <span>
                    Select the pet <label>*</label>
                  </span>
                  <select type='text' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} required>
                  <option value=""></option>
                  <option value="Tommy">Tommy</option>
                  <option value="Bailey">Bailey</option>
                  <option value="Laia">Laia</option>
                  <option value="Maneki and Neko">Maneki and Neko</option>
                  </select>
                </div>
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                
              </div>
              <button type='submit' name="submit-button">
                Submit Now
              </button>
            </form>
          </div>
      </section>

      <section className='show-data'>
        {allValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Your application have been sent! We will contact you within the next 2-3 days!</h1>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Adoption