import {useQuery, UseQueryResult} from "@tanstack/react-query";
import fetchQuestions from "../../services/fetchQuestions.ts";
import {Question} from "../../types";

export default function useQuestionFetch(){


    const query:UseQueryResult<Question[]> = useQuery({queryKey: ['questions'], queryFn: fetchQuestions })

    return {
        query}



}