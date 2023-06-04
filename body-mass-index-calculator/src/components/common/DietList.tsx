import { useEffect } from "react";
import useFileReader from "../../hooks/useFileReader";

const DietList = ({ bmiType}) => {
    const { fileContent, readFile, status } = useFileReader();

    useEffect(() => {
        const getData = async () => {
            if (bmiType === 'Underweight') await readFile("../../src/services/data/gain-weight-data.json");
            if (bmiType === 'Normal') await readFile("../../src/services/data/maintain-weight-data.json");
            if (bmiType === 'Obese' || bmiType === 'Overweight') await readFile("../../src/services/data/lose-weight-data.json");
        };
        getData();


    }, [bmiType])

    console.log(fileContent)




    return (
        <div className="meal-plan mt-10">
            <div className="meal-plan__header">
                <h3 className="diet-list__title text-[28px] font-semibold">Meal Plan</h3>
                <p className="diet-list__subtitle w-1/2">
                    Our tailored meal plan nourishes your body with a range of nutrients,
                    supporting your health goals. It includes balanced portions of healthy proteins, complex carbohydrates, and essential fats.
                    Designed to meet your specific needs, this plan promotes overall well-being.
                </p>
            </div>
            {status.loading && <p>Loading...</p>}
            {fileContent.mealsPlan && (
                <div className="meal-plan__body grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {
                        fileContent.mealsPlan.map((item: any) => {
                            return (
                                <div className="meal-plan__item shadow-xl my-10 rounded-xl p-8">
                                    <h3 className="meal-plan__item-title text-[24px] font-medium">
                                        {item.day}
                                    </h3>
                                    {
                                        item.meals.map((meal: any) => {
                                            return (
                                                <div className="meal-plan__item-meal mb-5">
                                                    <h4 className="meal-plan__item-meal-title text-[20px] font-semibold">
                                                        {meal.name}
                                                    </h4>
                                                    {
                                                        meal.items.map((item: any) => {
                                                            return (
                                                                <>
                                                                    <p className="meal-plan__item-meal-text text-left font-medium">
                                                                        {item.name}
                                                                    </p>
                                                                    <p className="meal-plan__item-meal-text text-left">
                                                                        {item.description}
                                                                    </p>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            )}


        </div>
    )
}

export default DietList