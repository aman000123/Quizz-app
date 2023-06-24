
import { quiz } from "./QuestionsApi1";

import { useState } from "react";

const Quizz = () => {



    const [activequestion, setActiveQuestion] = useState(0)

    const [selectedAnswer, setSelectedAnswer] = useState("")

    const [showResult, setShowResult] = useState(false)

    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    })



    const { questions } = quiz

    const { question, choices, correctAnswer } = questions[activequestion]





    const onNextQuestionsHandler = () => {
        setSelectedAnswerIndex(null)

        setResult((prev) => selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1

            } :
            {
                ...prev, wrongAnswers: prev.wrongAnswers + 1
            }

        )

        if (activequestion !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        }
        else {
            setActiveQuestion(0)
            setShowResult(true)
        }


    }



    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

    const onAnswerSelecetd = (answer, index) => {
        setSelectedAnswerIndex(index)

        if (answer === correctAnswer) {

            setSelectedAnswer(true)
            console.log('right')

        } else {

            setSelectedAnswer(false)
            console.log('false')

        }

    }


    return (
        <>
            <h1>Quiz</h1>


            {
                !showResult ? (
                    <div>
                        <h2>{questions[activequestion].question}</h2>


                        <ul>
                            {choices.map((answer, index) => (
                                <li onClick={() => onAnswerSelecetd(answer, index)} key={answer}

                                    className={selectedAnswerIndex === index ? 'selectd-answer' : null}




                                >{answer}</li>
                            ))}
                        </ul>
                        <button onClick={onNextQuestionsHandler} disabled={selectedAnswerIndex === null}>


                            {activequestion === questions.length - 1 ? 'Finish' : 'Next'}



                        </button>
                    </div>
                ) : (

                    <div>
                        <h3>Result</h3>
                        <p>totalQuestions <span>{questions.length}</span></p>
                        <p>score <span>{result.score}</span></p>
                        <p>correct answer <span>{result.correctAnswers}</span></p>
                        <p>wrongAnswers<span>{result.wrongAnswers}</span></p>
                    </div>
                )
            }


        </>



    )
}

export default Quizz