
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='p-6 flex justify-between items-center relative text-[#253345] z-30 bg-white'>
            <div className='nav-logo'>
                <h1 className='nav-logo__title text-[32px] font-semibold'>BMI</h1>
            </div>

            <GiHamburgerMenu className="md:hidden text-[24px] cursor-pointer" onClick={handleMenuToggle} />
            {isOpen && (
                <div className='nav-mobile-menu md:hidden absolute top-[90px]'>
                    <ul className='nav-mobile-menu__list flex flex-col'>
                        <li className='nav-mobile-menu__list-item mb-2 font-medium '>
                            <Link to="/">Home</Link>
                        </li>

                        <li className='nav-mobile-menu__list-item mb-2 font-medium '>
                            <Link to="what-is-the-bmi">
                                What is The BMI?
                            </Link>
                        </li>
                        <li className='nav-mobile-menu__list-item mb-2 font-medium '>
                            <Link to="/diets">
                                Diets
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            <div className='nav-menu hidden md:flex'>
                <ul className='nav-menu__list flex '>
                    <li className='nav-menu__list-item mr-6 font-medium  cursor-pointer'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-menu__list-item mr-6 font-medium  cursor-pointer'>
                        <Link to="what-is-the-bmi">
                            What is The BMI?
                        </Link>
                    </li>
                    <li className='nav-menu__list-item mr-6 font-medium  cursor-pointer'>
                        <Link to="/diets">
                            Diets
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation