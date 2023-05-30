
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='p-6 flex justify-between items-center relative text-[#253345]'>
            <div className='nav-logo'>
                <h1 className='nav-logo__title text-[32px] font-semibold'>BMI</h1>
            </div>

            <GiHamburgerMenu className="md:hidden text-[24px] cursor-pointer" onClick={handleMenuToggle} />

            {isOpen && (
                <div className='nav-mobile-menu md:hidden absolute top-[90px]'>
                    <ul className='nav-mobile-menu__list flex flex-col'>
                        <li className='nav-mobile-menu__list-item mb-2 font-medium uppercase'>Home</li>
                        <li className='nav-mobile-menu__list-item mb-2 font-medium uppercase'>What is The BMI?</li>
                        <li className='nav-mobile-menu__list-item mb-2 font-medium uppercase'>Diets</li>
                    </ul>
                </div>
            )}

            <div className='nav-menu hidden md:flex'>
                <ul className='nav-menu__list flex '>
                    <li className='nav-menu__list-item mr-6 font-medium uppercase cursor-pointer'>Home</li>
                    <li className='nav-menu__list-item mr-6 font-medium uppercase cursor-pointer'>What is The BMI?</li>
                    <li className='nav-menu__list-item mr-6 font-medium uppercase cursor-pointer'>Diets</li>
                </ul>
            </div>
        </nav>

    )
}

export default Navigation