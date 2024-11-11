import {Question} from "../../types";
import React, {useState} from "react";
import useQuestionFetch from "../../pages/hooks";

const index = () => {

    const {mutation} = useQuestionFetch();

    const [formData, setFormData] = useState<Question>({
        questionTitle: "",
        correctAnswer: "",
        questionOptions: [],
        difficultyLevel: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate(formData);
        console.log(formData);
    }
    const handleOptionChange = (index: number, value: string) => {
        const newQuestionOptions = [...formData.questionOptions];
        newQuestionOptions[index] = value;
        setFormData({ ...formData, questionOptions: newQuestionOptions });
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Selected value:', e.target.value);
        setFormData({ ...formData, difficultyLevel: e.target.value });
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen absolute z-10 w-[90%] ">
            <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col">
                    <input
                        onChange={(e) => setFormData({...formData, questionTitle: e.target.value})}
                        value={formData.questionTitle}
                        placeholder="Question title"
                           className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                           type="text"/>
                    <input
                        onChange={(e) => setFormData({...formData, correctAnswer: e.target.value})}
                        value={formData.correctAnswer}
                        placeholder="Correct answer"
                           className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                           type="text"/>
                    <select
                        onChange={handleChange}
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        id="difficulty-level"
                        name="difficulty-level"
                        value={formData.difficultyLevel}
                    >
                        <option value="EASY">Easy</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HARD">Hard</option>
                    </select>
                    <input
                        onChange={(e) => handleOptionChange(0, e.target.value)}
                        value={formData.questionOptions[0]}
                        placeholder="Option one"
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"/>

                    <input
                        onChange={(e) => handleOptionChange(1, e.target.value)}
                        value={formData.questionOptions[1]}
                        placeholder="Option two"
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"/>

                    <input
                        onChange={(e) => handleOptionChange(2, e.target.value)}
                        value={formData.questionOptions[2]}
                        placeholder="Option three"
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                        type="text"/>

                    <button
                        className="bg-accent text-text font-body  py-2 px-4 rounded-md mt-4 hover:bg-secondary hover:to-blue-600 transition ease-in-out duration-150"
                        type="submit">Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default index;
