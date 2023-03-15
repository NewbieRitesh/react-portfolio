export default function Skills() {
    return (
        <>
            <h1 className="text-2xl">Skills</h1>
            <div className="flex justify-center bg-transperent align-center my-5">
                <table className="table-auto rounded  w-full">
                    <tbody>
                        <tr className="border-y">
                            <td>Language</td>
                            <td>HTML <br />CSS<br />JavaScript</td>
                        </tr>
                        <tr className="border-y">
                            <td>Frameworks and Libraries</td>
                            <td>React <br />Redux <br />Tailwind CSS <br />BootStrap CSS <br /> Node JS (learning) <br />Express JS (learning)</td>
                        </tr>
                        <tr className="border-y">
                            <td>Database</td>
                            <td>MongoDB (learning) </td>
                        </tr>
                        <tr className="border-y">
                            <td>Program and Tools</td>
                            <td>VS code <br />Photopia</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
