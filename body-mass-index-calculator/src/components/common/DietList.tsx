import { useEffect } from "react";
import useFileReader from "../../hooks/useFileReader";
import DietListItem from "./DietListItem";


interface DietListProps {
    bmiType: string;
    setParams: (params: object) => void;
}

const DietList: React.FC<DietListProps> = ({ bmiType, setParams }) => {
    const { fileContent, readFile, status } = useFileReader();

    useEffect(() => {
        const getData = async () => {
            if (bmiType === 'Underweight') await readFile("../../src/services/data/gain-weight-data.json");
            if (bmiType === 'Normal') await readFile("../../src/services/data/maintain-weight-data.json");
            if (bmiType === 'Obese' || bmiType === 'Overweight') await readFile("../../src/services/data/lose-weight-data.json");
        };
        getData();

    }, [bmiType])

    useEffect(() => {
        setParams((prevParams: object) => ({
            ...prevParams,
            description: fileContent.description
        }))
    }, [fileContent])


    return (
        <div className="meal-plan mt-10">
            <div className="meal-plan__header">
                <h3 className="text-[28px] font-semibold">Meal Plan</h3>
                <p className="w-full md:w-1/2">
                    Our tailored meal plan nourishes your body with a range of nutrients,
                    supporting your health goals. It includes balanced portions of healthy proteins, complex carbohydrates, and essential fats.
                    Designed to meet your specific needs, this plan promotes overall well-being.
                </p>
            </div>
            {status.loading && <p>Loading...</p>}
            {fileContent.mealPlan && (
                <div className="meal-plan__body">
                    <DietListItem fileContent={fileContent} />
                </div>
            )}
        </div>
    )
}

export default DietList