import React from 'react'

const DietListItem = ({fileContent}) => {
    return (
        <>
            {
                fileContent.mealPlan.map((item: any) => {
                    return (
                        <div className="meal-plan__item">
                            <h3 className="meal-plan__item-title">
                                {item.day}
                            </h3>
                            {
                                item.meals.map((meal: any) => {
                                    return (
                                        <div className="mb-5">
                                            <h4 className="meal-plan__item-meal-title">
                                                {meal.name}
                                            </h4>
                                            {
                                                meal.items.map((item: any) => {
                                                    return (
                                                        <>
                                                            <p className="text-left font-medium">
                                                                {item.name}
                                                            </p>
                                                            <p className="text-left">
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
        </>
    )
}

export default DietListItem