import { useEffect } from "react";
import useFileReader from "../hooks/useFileReader"

const DietList = () => {
    const { fileContent, readFile, status } = useFileReader();
    useEffect(() => {
        const getData = async () => {
            await readFile("../../src/data/lose-weight-data.json");
        }
        getData();
    }, [])

    useEffect(() => {
        console.log(fileContent);
    }, [fileContent]);

 

    return (
        <div className="meal-plan mt-10">
            <div className="meal-plan__header">
                <h3 className="diet-list__title text-[28px] font-semibold">Meal Plan</h3>
                <p className="diet-list__subtitle">Meal plan for losing weight</p>
            </div>
            {status.loading ? <p>Loading...</p> : (
                <div className="meal-plan__body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
                    {
                        fileContent.mealPlan.map((item:any) => {
                            <div className="meal-plan__item shadow-xl mx-10 h-[500px]  rounded-xl ">
                        
                            </div>
                        })
                    }
                </div>

            )}

        </div>
    )
}

export default DietList