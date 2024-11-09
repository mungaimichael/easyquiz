import useQuestionFetch from "../hooks";
import Loader from "../../components/Loader";
import {useState} from "react";
import QuestionChoice from "../../components/QuestionChoice";

export default function QuestionPage() {
    const [currentQuestion] = useState<number>(0);

const {query:{isPending, data, isError}} = useQuestionFetch();

if (isPending) return <div className={"min-h-screen w-full flex justify-center items-center flex-col gap-4"} >
    <Loader/>
    <h3 className={"text-text font-heading font-semibold"} >Loading</h3>

</div>;
if (isError) return <div>Error...</div>;
    return (
        <div className="min-h-screen w-full flex flex-col items-center pt-10 " >
            <h1
                onClick={() =>console.log(data[0].questionOptions)}
            className={"text-text font-heading text-xl   "}
            >Questions</h1>

            {/*// container to hold the questions*/}
            <div className={"w-full flex flex-col items-start gap-4"} >
                <div
                    className="w-full flex justify-around items-center"
                >
                             <span
                                 className={"flex items-end font-heading "}
                             ><h3 className={"text-2xl text-text font-semibold"}>1</h3>/10</span>

                </div>
                {/*    Image container */}
                <div className={"w-full flex flex-col items-center"}>
                    <img
                        className={"w-full h-full object-cover rounded-xl"}
                    src={"https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                    alt={"question-random-image"}
                    />
                    <div className={" mt-4 w-full flex flex-col"} >
                        <p className={"text-text font-body text-xl leading-8"} >
                            {
                                data?.[currentQuestion]?.questionTitle
                            }
                        </p>
                    </div>
                {/*  Choices container   */}
                    <div
                    className={"w-full flex flex-col items-center mt-5 gap-2"}
                    >
                        {
                            new Array(4).fill(0).map((_,i)=>{

                                const {questionOptions} = data[currentQuestion] ;
                                return (
                                    <QuestionChoice
                                        key={i}
                                        letter={String.fromCharCode(65 + i)}
                                        answer={questionOptions[i]}
                                        onClick={()=>console.log("clicked")}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}