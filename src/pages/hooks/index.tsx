import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import fetchQuestions from "../../services/fetchQuestions.ts";
import {Question} from "../../types";
import createQuestion from "../../services/createQuestion.ts";

export default function useQuestionFetch(){


    const query:UseQueryResult<Question[]> = useQuery({queryKey: ['questions'], queryFn: fetchQuestions })

    const mutation = useMutation({
        mutationFn: createQuestion,

    });

    return {
        query, mutation}



}