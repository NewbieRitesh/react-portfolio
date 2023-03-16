import { useState } from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    const [toggle, setToggle] = useState('list')
    const [togglePosition, setTogglePosition] = useState("top-[-160px]")
    async function onToggleMenu(e) {
        const navLinks = await document.querySelector('.nav-links')
        setToggle(toggle === 'list' ? 'x-lg' : 'list')
        navLinks.classList.toggle(setTogglePosition(toggle !== 'list' ? "top-[-160px]" : "top-[80px]"))
    }
    async function onToggleMenuClick(){
        if(toggle!=='list'){
            onToggleMenu()
        }
    }
    return (
        <header className="bg-transperent z-40">
            <nav className="flex justify-between h-20 items-center max-w-[1200px] px-5 mx-auto text-white font-semibold">
                <Link onClickCapture={onToggleMenuClick} className="z-40" to='/'>
                    <img src="/imgs/profile.jpg" alt="error" className="h-14 sm:m-auto border rounded-full sm:mr-1" />
                </Link>
                <div className={`nav-links backdrop-blur-sm z-30 duration-500 md:static absolute left-0 ${togglePosition} md:w-auto  w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:justify-between z-40 md:items-center ">
                        <Link className="m-2.5 hover:text-gray-300" onClickCapture={onToggleMenuClick} to="/about">About</Link>
                        <Link className="m-2.5 hover:text-gray-300" onClickCapture={onToggleMenuClick} to="/project">Projects</Link>
                        <Link className="m-2.5 hover:text-gray-300" onClickCapture={onToggleMenuClick} to="/contact">Contact</Link>
                        {/* <li className="m-2.5">
                            <a className="hover:text-gray-300" href="/">Solution</a>
                        </li> */}
                        {/* <li className="m-2.5">
                            <a className="hover:text-gray-300" href="/">Pricing</a>
                        </li> */}
                    </ul>
                </div>
                <div className="z-40 flex items-center gap-6">
                    <div id="social-links">
                        <ul>
                            <a href="https://github.com/NewbieRitesh" className="hover:text-gray-300 mx-1 p-1"><i className="bi bi-github"></i> <span className="text-sm">GitHub</span></a>
                            <a href="mailto:riteshsharma34567@gmail.com" className="hover:text-gray-300 mx-1 p-1"><i className="bi bi-envelope-at-fill"></i></a>
                            <a href="https://twitter.com/NewbieRitesh" className="hover:text-gray-300 mx-1 p-1"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/riteshsharma34567" className="hover:text-gray-300 mx-1 p-1"><i className="bi bi-linkedin"></i></a>
                            <a href="https://wa.me/+919664958294" className="hover:text-gray-300 mx-1 p-1"><i className="bi bi-whatsapp"></i></a>
                        </ul>
                    </div>
                    <button className="hover:text-gray-300 text-3xl cursor-pointer md:hidden" onClick={onToggleMenu}><i className={`bi bi-${toggle}`} /></button>
                </div>
            </nav>
        </header>
    );
}