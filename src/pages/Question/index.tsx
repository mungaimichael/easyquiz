import useQuestionFetch from "../hooks";
import Loader from "../../components/Loader";
import {useState} from "react";
import QuestionChoice from "../../components/QuestionChoice";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // import CSS for default styling

export default function QuestionPage() {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const {query: {isPending, data, isError}} = useQuestionFetch();
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    const handleChoiceClick = (answer: string) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        if (selectedAnswer === data?.[currentQuestion].correctAnswer) {
            toast.success('Correct Answer!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setCurrentQuestion((prev) => prev + 1);
        } else {
            toast.error('Wrong Answer!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    if (isPending) return <div className={"min-h-screen w-full flex justify-center items-center flex-col gap-4"} >
        <Loader/>
        <h3 className={"text-text font-heading font-semibold"} >Loading</h3>
    </div>;

    if (isError) return <div>Error...</div>;

    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-10">
            <h1 onClick={() => console.log(selectedAnswer)} className={"text-text font-heading text-xl"}>
                Questions
            </h1>
            {/* container to hold the questions */}
            <div className={"w-full flex flex-col items-start gap-4"}>
                <div className="w-1/2 ml-auto flex justify-between pr-4 items-center">
                    <span className={"flex items-end font-heading"}>
                        <h3 className={"text-2xl text-text font-semibold"}>1</h3>/10
                    </span>
                    <div className="w-1/2 flex justify-around items-center">
                        <img src={"/images/left.svg"} className="w-5 cursor-pointer" />
                        <img onClick={handleNextQuestion} src={"/images/right.svg"} className="w-5 cursor-pointer" />
                    </div>
                </div>
                {/* Image container */}
                <div className={"w-full flex flex-col items-center"}>
                    <img
                        className={"w-full h-full object-cover rounded-xl"}
                        src={"https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                        alt={"question-random-image"}
                    />
                    <div className={"mt-4 w-full flex flex-col"}>
                        <p className={"text-text font-body text-xl leading-8"}>
                            {data?.[currentQuestion]?.questionTitle}
                        </p>
                    </div>
                    {/* Choices container */}
                    <div className={"w-full flex flex-col items-center mt-5 gap-2"}>
                        {data?.[currentQuestion].questionOptions.map((choice, index) => (
                            <QuestionChoice
                                key={choice}
                                letter={String.fromCharCode(65 + index)}
                                answer={choice}
                                correctAnswer={data?.[currentQuestion].correctAnswer}
                                selectedAnswer={selectedAnswer}
                                onClick={handleChoiceClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}