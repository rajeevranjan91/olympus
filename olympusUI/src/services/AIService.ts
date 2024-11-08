import axios, {AxiosError} from 'axios';

export const client = axios.create({
    baseURL: "/olympusService/api"
});

export interface AIRequest {
    question: String
}

export interface AIResponse {
    responseStr: String
}

export const invokeAI = async(req :AIRequest): Promise<AIResponse> => {
    console.log('Inside service invokeAI...');
    console.log('Question in the request is:' + req.question);
    if(import.meta.env.MODE == "development"){
        return {responseStr:"This is a dummy response on behalf of AI Service as the app is running in Dev mode."};
    }
    try{
        const res:AIResponse = (await client.get<AIResponse>("invokeAI")).data;
        console.log(res);
        return res;
    }catch(error){
        const err = error as AxiosError;
        console.log(err.message);
        console.log(err.name);
    }
    return {responseStr:"Placeholder for error condition"};
}