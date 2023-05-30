
const Calculator = () => {
    return (
        <div className="calculator bg-white mr-5 ml-5 shadow-xl mt-[-10rem] mb-20 pb-10 rounded-lg text-center relative px-5 ">
            <h3 className="calculator-title pt-8 text-[22px] font-bold">
                Enter your details below
            </h3>
            <form className="flex w-full flex-col mt-5">
                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 ">
                    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Metric</label>
                </div>
                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mt-2">
                    <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Imperial</label>
                </div>

                <label className="text-left mt-5 text-[#838c9a] font-semibold">Height</label>
                <div className="flex items-center px-4 border rounded dark:border-gray-700  text-[#253345]">
                    <input type="text" className=" w-full py-2 px-2 outline-none   border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="font-semibold">cm</label>
                </div>

                <label className="text-left mt-5 text-[#838c9a] font-semibold">Width</label>
                <div className="flex items-center px-4 border rounded dark:border-gray-700 text-[#253345]">
                    <input type="text" className=" w-full py-2 px-2 outline-none   border-gray-300   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="font-semibold">kg</label>
                </div>
            </form>
            <div className="calculator-info bg-[#486FFB] text-white mt-10 p-4 rounded-s-xl">
                <p className="calculator-info__text">
                    Metric height must be between 100cm and 300cm
                </p>
            </div>

        </div>
    )
}

export default Calculator