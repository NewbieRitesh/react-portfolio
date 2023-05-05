export default function Contact() {
    return (
        <>
            <div className="backdrop-blur-sm text-white rounded-lg flex justify-center m-2 p-3 font-semibold">
                <ul className="md:w-[800px]">
                    <li className="m-3">
                        <a href="https://github.com/riteshsharma-pc" className="hover:text-gray-300 text-4xl mx-1 p-1"><i className="bi bi-github"></i><span className="text-2xl"> /riteshsharma-pc</span></a>
                    </li>
                    <li className="m-3">
                        <a href="mailto:riteshsharma34567@gmail.com" className="hover:text-gray-300 mx-1 p-1 text-4xl"><i className="bi bi-envelope-at-fill"></i><span className="text-2xl"> riteshsharma34567@gmail.com</span></a>
                    </li>
                    <li className="m-3">
                        <a href="https://twitter.com/riteshsharma_pc" className="hover:text-gray-300 mx-1 p-1 text-4xl"><i className="bi bi-twitter"></i><span className="text-2xl"> /riteshsharma_pc</span></a>
                    </li>
                    <li className="m-3">
                        <a href="https://www.linkedin.com/in/riteshsharma34567/" className="hover:text-gray-300 mx-1 p-1"><i className="hover:text-gray-300 bi bi-linkedin text-4xl"></i><span className="text-2xl"> /riteshsharma34567</span></a>
                    </li>
                    <li className="m-3">
                        <a href="https://wa.me/+919664958294" className="hover:text-gray-300 mx-1 p-1 text-4xl"><i className="bi bi-whatsapp"></i><span className="text-2xl"> +919664958294</span></a>
                    </li>
                    <li className="m-3">
                        <a href="tel:+919664958294" className="hover:text-gray-300 mx-1 p-1 text-4xl"><i className="bi bi-telephone"></i><span className="text-2xl"> +919664958294</span></a>
                    </li>
                </ul>
            </div>
        </>
    )
};
