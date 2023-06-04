import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { calculateBMI, convertToMetric, findBMIType } from "../utils/helpers";
import DietList from "../components/common/DietList";


interface IParams {
  weight: number,
  height: number,
  type: string,
  bmi: number,
  bmiType: string,
  description: string,
}

const SpecialDietList = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const [params, setParams] = useState<IParams>({
    weight: 0,
    height: 0,
    type: '',
    bmi: 0,
    bmiType: '',
    description: '',
  })

  useEffect(() => {
    if (!searchParams.get('w') || !searchParams.get('h') || !searchParams.get('type')) {
      navigate('/');
    }

    const { weight, height, unit } = convertToMetric(searchParams.get('w'), searchParams.get('h'), searchParams.get('type'));

    const bmi = calculateBMI(searchParams.get('w'), searchParams.get('h'));
    const bmiType = findBMIType(bmi);


    setParams({
      weight: weight,
      height: height,
      type: unit,
      bmi: bmi,
      bmiType: bmiType,
      description: '',
    })



  }, [searchParams])


  return (
    <main className="special-diet flex flex-col">
      <div className="flex">
        <div className="special-diet-left w-1/2">
          <div className="special-diet-left-header">
            <h3 className="font-semibold text-[36px]">Special Diet List For You:</h3>
            <p className="text-[20px]">Your Weight: <span className="font-semibold">{params.weight} cm</span></p>
            <p className="text-[20px]">Your Height: <span className="font-semibold">{params.height} kg</span></p>
            <hr className="my-4"></hr>
            <p className="text-[20px]">Your BMI: <span className="font-semibold">{params.bmi} - {params.bmiType}</span></p>
            <p className="text-[16px] mt-5">{params.description}</p>
          </div>
        </div>
        <div className="special-diet-right w-1/2 flex justify-center items-center">
          <div className="special-diet-right-div bg-[#DEE8FC] h-[400px] w-[400px]  absolute rounded-2xl"></div>
          <img src="https://www.pngall.com/wp-content/uploads/2/Healthy-Meal-PNG.png" className="h-[500px] w-[500px] relative" />
        </div>
      </div>
      <div>
        <DietList bmiType={params.bmiType} setParams={setParams} />
      </div>
    </main>
  )
}

export default SpecialDietList