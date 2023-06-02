import { useEffect,useState} from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { calculateBMI, findBMIType } from "../utils/helpers";

const SpecialDietList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [params,setParams] = useState({
    weight: '',
    height: '',
    type: '',
    bmi: '',
    bmiType: '',
  })  

  useEffect(() => {
    if(!searchParams.get('w') || !searchParams.get('h') || !searchParams.get('type')){
      navigate('/');
    }

    const bmi = calculateBMI(searchParams.get('w'),searchParams.get('h'));
    const bmiType = findBMIType(bmi);

    setParams({
      weight: searchParams.get('w'),
      height: searchParams.get('h'),
      type: searchParams.get('type'),
      bmi: bmi,
      bmiType: bmiType,
    })

  },[searchParams])

  return (
    <main className="special-diet flex">
      <div className="special-diet-left w-1/2">
        <div className="special-diet-left-header">
          <h3 className="font-semibold text-[36px]">Special Diet List For You:</h3>
          <p className="text-[20px]">Your Weight: <span className="font-semibold">{params.weight}</span></p>
          <p className="text-[20px]">Your Height: <span className="font-semibold">{params.height}</span></p>
          <hr className="my-4"></hr>
          <p className="text-[20px]">Your BMI: <span className="font-semibold">{params.bmi} - {params.bmiType}</span></p>
        </div>
      </div>
      <div className="special-diet-right w-1/2 flex justify-center items-center">
        <div className="special-diet-right-div bg-[#DEE8FC] h-[400px] w-[400px]  absolute"></div>
        <img src="https://www.pngall.com/wp-content/uploads/2/Healthy-Meal-PNG.png" className="h-[500px] w-[500px] relative"/>
      </div>
    </main>
  )
}

export default SpecialDietList