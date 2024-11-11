import {Question} from "../types";
const url = import.meta.env.VITE_API_URL;

const createQuestion = async  ({questionOptions, questionTitle, difficultyLevel, correctAnswer}:Question):Promise<String> => {
    try{
        const question = {
            questionOptions,
            questionTitle,
            difficultyLevel,
            correctAnswer
        }
        const configs = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(question)
        }
        const response = await fetch(`${url}create`, configs )
        const data = await response.text()
        console.log(data);
        return "success"
    }
    catch (e) {
        console.log(e);
        return "error adding question"
    }
};
export default createQuestion;