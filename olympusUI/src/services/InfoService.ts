import axios, {AxiosError} from 'axios';

export const client = axios.create({
    baseURL: "/olympusService/api"
});

export interface Info {
    teamName: String,
    greeting: String
}

export const getInfo = async(): Promise<Info> => {
    console.log('Inside service getInfo...');

    try{
        const data:Info = (await client.get<Info>("info")).data;
        console.log(data);
        return data;
    }catch(error){
        const err = error as AxiosError;
        console.log(err.message);
        console.log(err.name);
    }
    return {teamName:"Placeholder", greeting: "Placeholder"};
}