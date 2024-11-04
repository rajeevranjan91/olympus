import { Info } from "../services/InfoService";

interface PropData {
    data:Info;
}

function Splash({data}: PropData) {
    return (<div>
        <h2>{data.teamName}</h2>
        <h3>{data.greeting}</h3>
        </div>);
}

export default Splash;
