
const Playground = () => {
    return (
        <div className="playground flex flex-col relative  items-center mt-[10rem]">
            <img src="../images/bg-triangle.svg" alt="bg-triangle" className="playground-triangle w-[350px]" />
            <div className="playground-items ">
                <div className="playground-item playground-item--paper "></div>
                <div className="playground-item playground-item--rock"></div>
                <div className="playground-item playground-item--scissors "></div>
            </div>

        </div>
    )
}

export default Playground