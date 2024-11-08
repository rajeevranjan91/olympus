import { Info } from "../services/InfoService";
import logo from "./../assets/olympus.jpg"

interface PropData {
    data:Info;
}

function Splash({data}: PropData) {
    return (<div className="h-screen flex flex-col items-center justify-center p-4" >
        <h2>{data.teamName}</h2>
        <img className="scale-35" src={logo}/>
        <h3>{data.greeting}</h3>
        </div>);
}

export default Splash;
