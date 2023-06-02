import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IForm {
    weight: number,
    height: number,
    type: string
}


const Calculator = () => {
    const [form, setForm] = useState<IForm[]>([]);

    const navigate = useNavigate();

    const handleChange = (event: any): void => {
        event.target.id === 'height' ?
            setForm({ ...form, height: event.target.value })
            : setForm({ ...form, weight: event.target.value })

    };

    const handleRadioButton = (event: any): void => {
        setForm({...form, type: event.target.id })
    };


    const handleSubmitForm = (event: any): void => {
        event.preventDefault();
        if(!form.weight || !form.height || !form.type){
            alert('Please fill all the fields')
            return
        }

        navigate({
            pathname: '/diets',
            search: `?w=${form.weight}&h=${form.height}&type=${form.type}`
        })
    }

    return (
        <div className="calculator">
            <h3 className="calculator-title">
                Enter your details below
            </h3>
            <form className="calculator-form" onSubmit={handleSubmitForm} >
                <div className="calculator-form-radio-button-container mb-2">
                    <input id="metric" type="radio" name="radio-btn"  onClick={handleRadioButton}/>
                    <label htmlFor="metric" className="calculator-form-radio-button-label">Metric</label>
                </div>
                <div className="calculator-form-radio-button-container">
                    <input id="imperial" type="radio" name="radio-btn" onClick={handleRadioButton}/>
                    <label htmlFor="imperial" className="calculator-form-radio-button-label">Imperial</label>
                </div>

                <label className="calculator-form-input-label">Height</label>
                <div className="calculator-form-input-container">
                    <input type="text" id="height" className="calculator-form-input" onChange={handleChange} />
                    <label htmlFor='height' className="font-semibold">cm</label>
                </div>

                <label className="calculator-form-input-label">Width</label>
                <div className="calculator-form-input-container">
                    <input type="text" id='weight' className="calculator-form-input" onChange={handleChange} />
                    <label htmlFor='weight' className="font-semibold">kg</label>
                </div>

                <div className='calculator-button flex justify-end mt-5'>
                    <button className='btn-calculate bg-[#DEE8FC] px-4 py-2 rounded-lg font-medium' type='submit'>Calculate</button>
                </div>
            </form>



            <div className="calculator-info">
                <p className="calculator-info-text">
                    Metric height must be between 100cm and 300cm
                </p>
            </div>
        </div>
    )
}

export default Calculator