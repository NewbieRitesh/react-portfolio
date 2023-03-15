import Skills from "./Skills";

export default function About() {
    return (<div className="flex z-0 justify-center">
        <div className="backdrop-blur-sm rounded-lg md:w-[800px] m-2 p-3 text-white font-semibold">
            <h1 className="text-2xl">About Me</h1>            
            <p>
                My name is Ritesh Sharma. <br />
                I study in M.Sc. CA & IT in tehsil Modasa and previously i completed my BCA from same campus college (Matrushri L. J. Gandhi B.C.A. and P.G.D.C.A. College) with 8.31 CGPA. <br />
                In my last sem. final project my team made a library management system on asp.net with backend language c#. and in that project my role is to design the whole website.
                <br />
                I like to play chess and code with listing music. <br />
                To view my react projects click on project link from navigation menu.
            </p>
            <br />
            <Skills />
            <h1 className="text-2xl">About this PortFolio</h1>
            <p>
                This PortFolio is created with react technology <br />
                In this portfolio i use tailwind css and javascript to design and all this responsiveness is made by react.
            </p>

        </div>
    </div>)
};
