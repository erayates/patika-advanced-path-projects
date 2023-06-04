import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IForm {
  weight: number,
  height: number,
  type: 'metric' | 'imperial'
}

const Calculator = () => {
  const [form, setForm] = useState<IForm>({
    weight: 0,
    height: 0,
    type: 'metric'
  })

  const navigate = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target

    if (isNaN(Number(value))) {
      alert('Please enter a number!')
      event.target.value = ''
      return
    }

    setForm((prevForm) => ({
      ...prevForm,
      [id]: Number(value)
    }))
  }

  const handleRadioButton = (event: ChangeEvent<HTMLInputElement>): void => {
    setForm((prevForm) => ({
      ...prevForm,
      type: event.target.id as 'metric' | 'imperial'
    }))
  }

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (!form.weight || !form.height || !form.type) {
      alert('Please fill all the fields!')
      return
    }

    const { weight, height, type } = form

    if (
      (type === 'metric' && (height < 100 || height > 250)) ||
      (type === 'imperial' && (height < 40 || height > 300))
    ) {
      const minHeight = type === 'imperial' ? '40 inch' : '100 cm'
      const maxHeight = type === 'imperial' ? '300 inch' : '250 cm'

      alert(`Please enter a height between ${minHeight} and ${maxHeight}!`)
      return
    }

    navigate({
      pathname: '/diets',
      search: `?w=${weight}&h=${height}&type=${type}`
    })
  }

  return (
    <div className="calculator">
      <h3 className="calculator-title">
        Enter your details below
      </h3>
      <form className="calculator-form" onSubmit={handleSubmitForm}>
        <div className="calculator-form-radio-button-container mb-2">
          <input
            id="metric"
            type="radio"
            name="radio-btn"
            checked={form.type === 'metric'}
            onChange={handleRadioButton}
          />
          <label htmlFor="metric" className="calculator-form-radio-button-label">Metric</label>
        </div>
        <div className="calculator-form-radio-button-container">
          <input
            id="imperial"
            type="radio"
            name="radio-btn"
            checked={form.type === 'imperial'}
            onChange={handleRadioButton}
          />
          <label htmlFor="imperial" className="calculator-form-radio-button-label">Imperial</label>
        </div>

        <label className="calculator-form-input-label">Height</label>
        <div className="calculator-form-input-container">
          <input
            type="text"
            id="height"
            className="calculator-form-input"
            onChange={handleChange}
          />
          <label htmlFor="height" className="font-semibold">
            {form.type === 'imperial' ? 'inches' : 'cm'}
          </label>
        </div>

        <label className="calculator-form-input-label">Weight</label>
        <div className="calculator-form-input-container">
          <input
            type="text"
            id="weight"
            className="calculator-form-input"
            onChange={handleChange}
          />
          <label htmlFor="weight" className="font-semibold">
            {form.type === 'imperial' ? 'pounds' : 'kg'}
          </label>
        </div>

        <div className="calculator-button flex justify-end mt-5">
          <button className="btn-calculate bg-[#DEE8FC] px-4 py-2 rounded-lg font-medium" type="submit">
            Calculate
          </button>
        </div>
      </form>

      <div className="calculator-info">
        <p className="calculator-info-text">
          Metric height must be between {form.type === 'imperial' ? '40 inch and 300 inch' : '100 cm and 250 cm'}
        </p>
      </div>
    </div>
  )
}

export default Calculator
