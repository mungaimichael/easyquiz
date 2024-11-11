import {QuestionChoiceProps} from "../../types";


export default function QuestionChoice({
                                           letter,
                                           answer,
                                           correctAnswer,
                                           onClick,
                                           selectedAnswer
                                       }: QuestionChoiceProps) {
    const isCorrect = selectedAnswer && selectedAnswer === correctAnswer;
    const isSelected = selectedAnswer && selectedAnswer === answer;
    const choiceClasses = `w-full h-14 flex items-center gap-4 px-2 cursor-pointer bg-accent ${
        isSelected
            ? isCorrect
                ? 'border-2 border-green-500 opacity-100'
                : 'border-2 border-red-500 opacity-50'
            : selectedAnswer
                ? ''
                : ''
    }`;

    return (
        <div onClick={() => onClick(answer)} className={choiceClasses}>
            <div className="h-5/6 w-[50px] rounded-md flex items-center justify-center bg-black">
                <h3 className="text-white font-heading text-xl">{letter}</h3>
            </div>
            <div className="h-5/6 w-full flex items-center">
                <h3 className="text-text font-heading text-md">{answer}</h3>
            </div>
        </div>
    );
}
