import { GiFruitBowl, GiNightSleep, GiMuscleUp } from "react-icons/gi"
import { MdSportsHandball, MdOutlinePregnantWoman } from "react-icons/md"
import { BsGenderAmbiguous } from "react-icons/bs"
import { FaBirthdayCake } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"

const Home = () => {
  return (
    <main className="home mb-20">
      <div className="home-info text-center px-6">
        <div className="home-info__image   rounded-xl relative">
          <div className="home-info__image__overlay bg-[#DEE8FC] w-full h-[300px] inset-0 aspect-video absolute"></div>
          <img src="https://rococo-shortbread-8c82fb.netlify.app/assets/healthy-person-886c8d03.png" alt="fitness tracker" className="object-contain relative " />
        </div>
        <h3 className="home-info__title text-[28px] font-semibold">What Is Your BMI Results Means?</h3>
        <p className="home-info__text mt-5">
          Body Mass Index (BMI) is a numerical value derived from your weight and height.
          Its a common indicator to categorize your body size. Underweight is a BMI less than 18.5.
          Normal weight ranges from 18.5 to 24.9. Overweight is from 25 to 29.9, and 30 or above is considered obese.
          To maintain a healthy BMI, its recommended to engage in regular physical activity and follow a balanced diet rich in fruits, vegetables, lean proteins, and whole grains.
        </p>
      </div>
      <div className="home-benefits mt-20 p-12">
        <div className="home-benefits__item">
          <div className="home-benefits__item__image rounded-full bg-[#F3DFEC]  w-[70px] h-[70px] flex justify-center items-center">
            <GiFruitBowl className="text-[36px] text-[#d46798] " />
          </div>
          <h3 className="home-benefits__item__title text-[22px] font-semibold mt-5 mb-3">Healthy Eating</h3>
          <p className="home-benefits__item__text">
            Healthy eating promotes wight control, disease prevention, better digestion, immunity, mental clarity, and mood.
          </p>
        </div>

        <div className="home-benefits__item mt-20">
          <div className="home-benefits__item__image rounded-full bg-[#F8EFE2]  w-[70px] h-[70px] flex justify-center items-center">
            <MdSportsHandball className="text-[36px] text-[#D7A86C] " />
          </div>
          <h3 className="home-benefits__item__title text-[22px] font-semibold mt-5 mb-3">Regular Exercise</h3>
          <p className="home-benefits__item__text">
            Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
          </p>
        </div>

        <div className="home-benefits__item mt-20">
          <div className="home-benefits__item__image rounded-full bg-[#708c8e]  w-[70px] h-[70px] flex justify-center items-center">
            <GiNightSleep className="text-[36px] text-[#b3b3b3] " />
          </div>
          <h3 className="home-benefits__item__title text-[22px] font-semibold mt-5 mb-3">Adequate Sleep</h3>
          <p className="home-benefits__item__text">
            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </div>

      <div className="home-limitations mt-20 px-6 text-center">
        <h3 className="home-limitations__title text-[28px] font-semibold">Limitations of BMI</h3>
        <p className="home-limitations__subtitle">Explanation of the limitations of the BMI calculation</p>

        <div className="home-limitations__item mt-10 rounded-xl shadow-xl p-8">
          <div className="home-limitations__item__header flex">
            <BsGenderAmbiguous className="text-[36px] text-[#d28869]" />
            <h4 className="home-limitations__item__title ml-5 text-[24px] font-semibold">Gender</h4>
          </div>
          <div className="home-limitations__item__body mt-5">
            <p className="home-limitations__item__text text-left">
              The development and body fat composition of girls and body vary with age. Consequently, a childs age and gender are considered when evaluating BMI.
            </p>
          </div>
        </div>
        <div className="home-limitations__item mt-10 rounded-xl p-8">
          <div className="home-limitations__item__header flex">
            <FaBirthdayCake className="text-[36px] text-[#94bdbc]" />
            <h4 className="home-limitations__item__title ml-5 text-[24px] font-semibold">Age</h4>
          </div>
          <div className="home-limitations__item__body mt-5">
            <p className="home-limitations__item__text text-left">
              In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
            </p>
          </div>
        </div>
        <div className="home-limitations__item mt-10 rounded-xl p-8">
          <div className="home-limitations__item__header flex">
            <GiMuscleUp className="text-[36px] text-[#ab85ea]" />
            <h4 className="home-limitations__item__title ml-5 text-[24px] font-semibold">Muscle</h4>
          </div>
          <div className="home-limitations__item__body mt-5">
            <p className="home-limitations__item__text text-left">
              BMI may misclassify muscular individuals as overweight or obese, as it does not differentiate muscle.
            </p>
          </div>
        </div>
        <div className="home-limitations__item mt-10 rounded-xl  p-8">
          <div className="home-limitations__item__header flex">
            <MdOutlinePregnantWoman className="text-[36px] text-[#e9d95d]" />
            <h4 className="home-limitations__item__title ml-5 text-[24px] font-semibold">Pregnancy</h4>
          </div>
          <div className="home-limitations__item__body mt-5">
            <p className="home-limitations__item__text text-left">
              Expectant mother experience weight gain due to their growing baby. Maintaining a healthy pregnancy BMI is advisable to minimize health risks for both mother and child.
            </p>
          </div>
        </div>
        <div className="home-limitations__item mt-10 rounded-xl p-8">
          <div className="home-limitations__item__header flex">
            <IoIosPeople className="text-[36px] text-[#c26996]" />
            <h4 className="home-limitations__item__title ml-5 text-[24px] font-semibold">Race</h4>
          </div>
          <div className="home-limitations__item__body mt-5">
            <p className="home-limitations__item__text text-left">
              Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, is it advised to discuss this with your GP or practice nurse
            </p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Home