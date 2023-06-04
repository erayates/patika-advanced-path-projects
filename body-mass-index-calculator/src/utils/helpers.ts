
export const calculateBMI = (weight: number, height: number): any => {
    let bmi = weight / ((height / 100) ** 2);
    bmi = Math.round(bmi * 100) / 100;
    return bmi
}

export const findBMIType = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight'
    if (bmi < 25) return 'Normal'
    if (bmi < 30) return 'Overweight'
    return 'Obese'
}


export const convertToMetric = (weight: number, height: number, unit: string): any => {
    if (unit === 'metric') return { weight, height, unit}
    const metricWeight = (weight / 2.205).toFixed(2)
    const metricHeight = (height * 2.54).toFixed(2)
    return { weight: metricWeight, height: metricHeight, unit: 'metric' }
}


