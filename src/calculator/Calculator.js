import React, { useState } from 'react'
import '../styles/Calculator.css'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

function Calculator() {
  const calculatorIcon = <FontAwesomeIcon icon={faCalculator} color="white" />;

  const [value, setValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const [npd, setNpd] = useState('-')
  const [gpm, setGpm] = useState('-')
  const [psd, setPsd] = useState('-')
  const [vsd, setVsd] = useState('-')

  const [onPaper, setOnPaper] = useState('-')
  const [inHand, setInHand] = useState('-')
  const [fullPrice, setFullPrice] = useState('-')

  const [pension, setPension] = useState(0)



  const handleNpdSelector = e => {
    if (e.target.value === "nekaupiu") setPension(0)
    else if (e.target.value === "1.8%") setPension(1.8)
    else if (e.target.value === "3.6%") setPension(3.6)
  }

  const calcGpm = 20 + pension;
  const calcPsd = 6.98;
  const calcVsd = 12.52;
  const calcNpd = calcGpm + calcPsd + calcVsd;


  const handleSubmit = e => {
    e.preventDefault();
    if (isNaN(value)) {
      setErrorMessage('*KLAIDA: privalote įrašytį skaičius!')
      setSuccessMessage('')
    } else {
      setErrorMessage('')
      setSuccessMessage('*Sėkmingai apskaičiuota')
    }
    setNpd((value * calcNpd / 100).toFixed(2));
    setGpm((value * calcGpm / 100).toFixed(2));
    setPsd((value * calcPsd / 100).toFixed(2));
    setVsd((value * calcVsd / 100).toFixed(2));
    setOnPaper((+value).toFixed(2));
    // BUGAS, skaičiuojant pinigus "į rankas" reikia paspausti antrą kartą "Skaičiuoti" kad gauti tikslų skaičių, pirma kart gaunamas NaN...
    setInHand((+value - npd).toFixed(2));
  }

  return (
    <div className="container">
      <div className="grid">

        <form className="selectors" onSubmit={handleSubmit}>
          <div className="special-padding">
            <label>Darbo užmokesčio dydis<br /> "ant popieriaus"</label>
          </div>
          <div>
            <input type="text" placeholder="€" value={value} onChange={e => setValue(e.target.value)} />
          </div>
          <div>
            <label>Kaip skaičiuoti NPD?</label>
          </div>
          <div>
            <select>
              <option value="automatiškai">automatiškai</option>
              <option value="nurodysiu">nurodysiu pats</option>
            </select>
          </div>
          <div>
            <label>Ar kaupiate pensijai papildomai?</label>
          </div>
          <div>
            <select onChange={handleNpdSelector}>
              <option value="nekaupiu">nekaupiu</option>
              <option value="1.8%">1.8%</option>
              <option value="3.6%">3.6%</option>
            </select>
          </div>
          <button className="color">{calculatorIcon} Skaičiuoti</button>
        </form>
        <section className="calculator">
          <h3>Darbo užmokesčio suvestinė*</h3>
          <div className="summary">
            <div>
              <p>Darbo užmokesčio dydis "ant popieriaus"</p>
              <span>{onPaper} €</span>
              <hr />
            </div>
            <div>
              <p>Darbo užmokesčio dydis "į rankas"</p>
              <span>{inHand} €</span>
              <hr />
            </div>
            <div>
              <p>Visa darbo vietos kaina</p>
              <span>{fullPrice} €</span>
            </div>
            <hr />
          </div>
          <div className="calc-results">
            <div>
              <p>NPD</p>
              <span>{npd} €</span>
            </div>
            <div>
              <p>GPM 20%</p>
              <span>{gpm} €</span>
            </div>
            <div>
              <p>PSD 6.98%</p>
              <span>{psd} €</span>
            </div>
            <div>
              <p>VSD 12.52%</p>
              <span>{vsd} €</span>
            </div>
          </div>
        </section>
        <p></p>
        <p className="rights">*atitinka 2019 m. sausio 1 d. galiojančius teisės aktus</p>
        <span className="msgError-success">
          {errorMessage}
          {successMessage}
        </span>
      </div>
    </div>
  )
}

export default Calculator
