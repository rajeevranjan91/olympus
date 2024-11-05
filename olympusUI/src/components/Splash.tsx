import { Info } from "../services/InfoService";
import logo from "./../assets/olympus.jpg"

interface PropData {
    data:Info;
}

function Splash({data}: PropData) {
    return (<div className="bg-cyan-200">
        <img className="scale-25" src={logo}/>
        <h2 className="col-span-6">{data.teamName}</h2>
        <h3 className="col-span-6">{data.greeting}</h3>
        </div>);
}

export default Splash;
