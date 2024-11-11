interface Question {
    id?:number,
    questionTitle:string,
    questionOptions:string[],
    difficultyLevel:string,
    correctAnswer:string,
}

interface QuestionChoiceProps {
    letter: string;
    answer: string;
    correctAnswer: string;
    onClick: (selectedAnswer: string) => void;
    selectedAnswer: string | null;
}



export type { Question, QuestionChoiceProps}