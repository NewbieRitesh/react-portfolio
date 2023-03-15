import ProjectStur from "./ProjectStur";
import obj from "./projects.json";
export default function Project() {
    return (
        <>
            {obj.map((element) => {
                return (<div className="flex justify-center" key={element.id}>
                    
                    <ProjectStur id={element.id} title={element.title} gitLink={element.git} webLink={element.web} desc={element.desc} tech={element.tech} />
                
                </div>)
            })}
        </>
    )
};
