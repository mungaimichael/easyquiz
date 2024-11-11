import useQuestionFetch from "../hooks";
import Loader from "../../components/Loader";
import {useState} from "react";
import QuestionChoice from "../../components/QuestionChoice";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateQuestionForm from "../../components/CreateQuestionForm";

export default function QuestionPage() {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const {query: {isPending, data, isError}} = useQuestionFetch();
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    const [showAddQuestion, setShowAddQuestion] = useState<boolean>(false);

    const handleChoiceClick = (answer: string) => {
        setSelectedAnswer(answer);
    }

    const handleNextQuestion = () => {
        if (selectedAnswer === data?.[currentQuestion].correctAnswer) {
            toast.success('Correct Answer!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setCurrentQuestion((prev) => prev + 1);
        } else {
            toast.error('Wrong Answer! Try again', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    const generateGradient = (questionIndex: number) => {
        const gradientPairs = [
            ['#B0B1F3', '#152E32'],
            ['#E1FEC7', '#152E32'],
            ['#616099', '#276977'],
            ['#4a7fc4', '#276977'],
        ];

        const pair = gradientPairs[questionIndex % gradientPairs.length];
        return `linear-gradient(to right, ${pair[0]}, ${pair[1]})`;
    };

    if (isPending) return <div className={"min-h-screen w-full flex justify-center items-center flex-col gap-4"} >
        <Loader/>
        <h3 className={"text-text font-heading font-semibold"} >Loading</h3>
    </div>;

    if (isError) return <div>Error...</div>;

    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-10 relative">
            {
                showAddQuestion ? <CreateQuestionForm/> : null
            }
            <h1 onClick={() => console.log(selectedAnswer)} className={"text-text font-heading text-xl"}>
                Questions
            </h1>
            {/* container to hold the questions */}
            <div className={"w-full flex flex-col items-start gap-4"}>
                <div className="w-full flex justify-between pr-4 items-center">
                    <span
                        onClick={()=>{
                            setShowAddQuestion(true);
                            console.log("success");
                        }}
                        className={"flex items-center justify-center rounded-full bg-accent p-3"}
                    >
                        <img
                            className={"w-5 h-5 cursor-pointer"}
                            alt={"add-question"}
                        src={"/images/add.svg"}
                        />
                    </span>
                    <span className={"flex items-end font-heading"}>
                        <h3 className={"text-2xl text-text font-semibold"}>{currentQuestion + 1}</h3>/{data?.length }
                    </span>
                    <div className="flex justify-around items-center">
                        <img onClick={handleNextQuestion} src={"/images/right.svg"} className="w-5 cursor-pointer" />
                    </div>
                </div>
                {/* Image container */}
                <div className={"w-full flex flex-col items-center"}>
                    <div
                        className={"w-full h-[200px] flex flex-col items-center p-10 rounded-2xl"}
                        style={{
                            backgroundImage: generateGradient(currentQuestion),
                        }}
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
                <ToastContainer/>
            </div>
            );
            }