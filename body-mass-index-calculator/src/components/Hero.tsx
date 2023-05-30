import Calculator from "./Calculator"

const Hero = () => {
    return (
        <div className="px-6">
            <div className='hero text-center pt-32 px-6'>
                <h2 className='hero-title'>
                    Body Mass Index Calculator
                </h2>
                <p className="hero-subtitle">
                    A BMI calculator is a simple tool that helps users determine their Body Mass Index (BMI) by inputting their weight and height. The calculator uses a standard formula to evaluate the individuals weight status, providing insights into whether they are underweight, normal weight, overweight, or obese. This can be a useful starting point for understanding ones health and fitness levels.
                </p>
            </div>
            <Calculator/>
        </div>
    )
}

export default Hero