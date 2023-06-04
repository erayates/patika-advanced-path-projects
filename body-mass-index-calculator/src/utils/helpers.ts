export const calculateBMI = (weight: string | null, height: string | null): any => {
    const parsedWeight = weight ? parseFloat(weight) : 0;
    const parsedHeight = height ? parseFloat(height) : 0;
  
    let bmi = parsedWeight / ((parsedHeight / 100) ** 2);
    bmi = Math.round(bmi * 100) / 100;
  
    return bmi;
};


export const findBMIType = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight'
    if (bmi < 25) return 'Normal'
    if (bmi < 30) return 'Overweight'
    return 'Obese'
}


export const convertToMetric = (weight: any, height: any, unit: any): any => {
    if (unit === 'metric') return { weight, height, unit };

    const metricWeight: string = (weight / 2.205).toFixed(2);
    const metricHeight: string = (height * 2.54).toFixed(2);

    return { weight: metricWeight, height: metricHeight, unit: 'metric' };
};


