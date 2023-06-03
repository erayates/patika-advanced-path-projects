import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IForm {
    weight: number,
    height: number,
    type: string
}


const Calculator = () => {
    const [form, setForm] = useState<IForm>({
        weight: 0,
        height: 0,
        type: ''
    });

    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = event.target;
        if (isNaN(Number(value))) {
            alert('Please enter a number!')
            return
        }

        setForm((prevForm) => ({
            ...prevForm,
            [id]: Number(value)
        }));

    };

    const handleRadioButton = (event: any): void => {
        setForm((prevForm) => ({
          ...prevForm,
          type: event.currentTarget.id
        }));
      };
      


    const handleSubmitForm = (event: FormEvent<HTMLFormElement>): any => {
        event.preventDefault();
        if (!form.weight || !form.height || !form.type) {
            alert('Please fill all the fields!')
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
                    <input id="metric" defaultChecked type="radio" name="radio-btn" onClick={handleRadioButton} />
                    <label htmlFor="metric" className="calculator-form-radio-button-label">Metric</label>
                </div>
                <div className="calculator-form-radio-button-container">
                    <input id="imperial" type="radio" name="radio-btn" onClick={handleRadioButton} />
                    <label htmlFor="imperial" className="calculator-form-radio-button-label">Imperial</label>
                </div>

                <label className="calculator-form-input-label">Height</label>
                <div className="calculator-form-input-container">
                    <input type="text" id="height" className="calculator-form-input" onChange={handleChange} />
                    <label htmlFor='height' className="font-semibold">{form.type === 'imperial' ? 'inches' : 'cm'}</label>
                </div>

                <label className="calculator-form-input-label">Width</label>
                <div className="calculator-form-input-container">
                    <input type="text" id='weight' className="calculator-form-input" onChange={handleChange} />
                    <label htmlFor='weight' className="font-semibold">{form.type === 'imperial' ? 'pounds' : 'kg'}</label>
                </div>

                <div className='calculator-button flex justify-end mt-5'>
                    <button className='btn-calculate bg-[#DEE8FC] px-4 py-2 rounded-lg font-medium' type='submit'>Calculate</button>
                </div>
            </form>



            <div className="calculator-info">
                <p className="calculator-info-text">
                    Metric height must be between {form.type === 'imperial' ? '40 inch and 300 inch' : '100 cm and 300 cm'}
                </p>
            </div>
        </div>
    )
}

export default Calculator