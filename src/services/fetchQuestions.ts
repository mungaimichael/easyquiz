import {Question} from "../types";
const url = import.meta.env.VITE_API_URL;

async function fetchQuestions():Promise<Question[] | string >
{

    try {
       const  response = await fetch(`${url}allQuestions`);
       const data = await response.json();
       return data;
    }
    catch (e) {
        console.log(e);
        return 'error loadinng questions'

    }
}

export default fetchQuestions;