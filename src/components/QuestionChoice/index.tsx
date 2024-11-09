interface QuestionChoiceProps {
    letter: string,
    answer: string,
    onClick: () => void
}

export default  function QuestionChoice({letter, answer, onClick}: QuestionChoiceProps) {
    return (
        <div className={"w-full h-14 bg-accent flex items-center gap-4 px-2  "} >
            <div
                className={"h-5/6 w-[50px] rounded-md  flex items-center justify-center cursor-pointer bg-black"}
                 onClick={onClick} >
                <h3 className={"text-white font-heading text-xl"} >{letter}</h3>
            </div>
            <div className={"h-5/6 w-full  flex items-center "} >
                <h3 className={"text-text font-heading text-md"} >{answer}</h3>
            </div>
        </div>
    )
}