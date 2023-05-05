export default function ProjectStur(props) {
    return (
        <>
            <div className={`bg-transperent backdrop-blur-sm rounded-lg md:w-[720px] m-2 p-3 font-semibold text-white`}>
                <div className="title border-white border-b-2">
                    <label htmlFor="Title">
                        Project Name:
                    </label>
                    <span> {props.title}</span></div>
                <div className="git">
                    <label htmlFor="git">
                        GitHub Link:
                    </label><br />
                    {props.gitLink.backend ? <><span className="text-sm"><label> backend:</label><a className="text-blue-800" href={props.gitLink.backend}> {props.gitLink.backend}</a></span><br /></> : ""}
                    {props.gitLink.frontend ? <><span className="text-sm"><label> frontend:</label><a className="text-blue-800" href={props.gitLink.frontend}> {props.gitLink.frontend}</a></span><br /></> : ""}
                </div>
                <div className="web">
                    <label htmlFor="web">
                        Web Link:
                    </label>
                    <span><a className="text-blue-800" href={props.webLink} > {props.webLink !== null && props.webLink ? props.webLink : "Not available"}</a></span></div>
                <div className="description">
                    <label htmlFor="description">
                        Description:
                    </label>
                    <span> {props.desc}</span></div>
                <div className="tech">
                    <label htmlFor="tech">
                        Technology Used:
                    </label>
                    <span className="text-blue-800"> {props.tech}</span></div>
            </div>
        </>
    )
};
