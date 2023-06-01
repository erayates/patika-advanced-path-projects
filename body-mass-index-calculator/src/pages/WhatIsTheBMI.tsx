import { AiOutlineQuestion } from 'react-icons/ai'

const WhatIsTheBMI = () => {
  return (
    <main className='about-bmi'>
      <div className='about-bmi__header relative flex flex-col md:flex-row'>
        <div className='about-bmi-left w-full lg:w-1/2'>
          <div className='about-bmi-left__icon text-[72px] md:text-[100px] flex items-center  bg-[#d1e4ff] rounded-full '>
            <div className='inline-block bg-[#E4EFFE] rounded-full p-6'>
              <AiOutlineQuestion />
            </div>
            <h3 className='text-[24px] md:text-[36px] inline-block font-medium ml-8  lg:ml-12 '>What is the BMI?</h3>
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

        <div className='about-bmi-right mt-20 md:mt-0 w-full lg:w-1/2 h-[500px] md:h-[600px] flex justify-center items-center' >
          <img 
            src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/37396/man-weight-scale-fat-clipart-md.png'
            className='h-full object-cover'            
          />
        </div>
      </div>

    </main>
  )
}

export default WhatIsTheBMI