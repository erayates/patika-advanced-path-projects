import { AiOutlineQuestion } from 'react-icons/ai'

const WhatIsTheBMI = () => {
  return (
    <main className='about-bmi'>
      <div className='about-bmi__header '>
        <div className='w-full lg:w-1/2'>
          <div className='about-bmi-left__icon'>
            <div className='inline-block bg-[#E4EFFE] rounded-full p-6'>
              <AiOutlineQuestion />
            </div>
            <h3 className='about-bmi-left__title'>What is the BMI?</h3>
          </div>
          <div className='about-bmi-left__text mt-10 text-[16px] md:text-[20px]'>
            The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.
            <br></br>
            The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.
            BMI ranges
            <br></br>
            For most adults, an ideal BMI is in the 18.5 to 24.9 range.
            For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight.
            <br></br>
            If your BMI is:
            <ul>
              <li>
                &nbsp;&nbsp;below 18.5 – you're in the underweight range
              </li>
              <li>
                &nbsp;&nbsp;between 18.5 and 24.9 – you're in the healthy weight range
              </li>
              <li>
                &nbsp;&nbsp;between 25 and 29.9 – you're in the overweight range
              </li>
              <li>
                &nbsp;&nbsp;30 or over – you're in the obese range
              </li>
            </ul>
          </div>
        </div>

        <div className='about-bmi-right' >
          <img 
            src='../images/man-weight-scale.png'
            className='h-full object-cover'            
          />
        </div>
      </div>

    </main>
  )
}

export default WhatIsTheBMI