


import { useState } from "react"
import { quiz } from "./quizquestionsApi"

import { Button, Stack, Card, ListGroup } from 'react-bootstrap'





const Quiz = () => {



  const [activeQuestion, setActiveQuestion] = useState(0)

  const [selectedAnswer, setSelectedAnswer] = useState('')

  const { questions } = quiz

  const { question, choices, correctAnswer } = questions[activeQuestion]

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

  const [showResult, setShowResult] = useState(false)

  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })





  const onClickNext = () => {

    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {

      setActiveQuestion((prev) => prev + 1)

    } else {
      setActiveQuestion(0)

      setShowResult(true)
    }
  }







  const onAnswerSelected = (answer, index) => {

    setSelectedAnswerIndex(index)

    if (answer === correctAnswer) {

      setSelectedAnswer(true)

      console.log('right')
    } else {
      setSelectedAnswer(false)

      console.log('wrong')
    }


  }


  const onClickAgain = () => {
    alert('Are You want to play quiz again ?')

    //console.log("play again");

    setActiveQuestion(0)

    setShowResult(false)


  }

  let hasPrev = activeQuestion > 0;

  const onPreviousQuestions = () => {
    if (hasPrev) {
      setActiveQuestion((prev) => prev - 1)
    }
  }


  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)



  return (
    <>



      {!showResult ? (
        <div>


          <Card border="primary" style={{ width: '550px', paddingBottom: '20px' }}>
            <Card.Header as="h4">My Quiz App</Card.Header>
            <Card.Body>



              <Card.Title>
                <span className="active-question-no">
                  Q.No.{addLeadingZero(activeQuestion + 1)}
                </span>
                <span className="total-question"> /{addLeadingZero(questions.length)}
                </span>
              </Card.Title>

              <Card.Title>{question}</Card.Title>

              <ListGroup>
                <Stack gap={6} className="col-md-7 mx-auto">
                  {choices.map((answer, index) => (
                    <ListGroup.Item onClick={() => onAnswerSelected(answer, index)} key={answer}
                      className={selectedAnswerIndex === index ? 'selected-answer' : null}>

                      {answer}
                    </ListGroup.Item>


                  ))}
                </Stack>
              </ListGroup>

              {
                <div className="btt">
                  <Button className="btnn1" size="lg" onClick={onPreviousQuestions}
                    disabled={!hasPrev}>prev</Button>

                  <Button className="btnn" size="lg" onClick={onClickNext}
                    disabled={selectedAnswerIndex === null}>
                    {activeQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}</Button>
                </div>
              }

            </Card.Body>
          </Card>
            </div>
         )
        : (
          <div className="result">
            <Card style={{ width: '500px', padding: '40px 0px', margin: 'auto' }}>
              <Card.Body>
                <Card.Title>Result</Card.Title>
                <Card.Text>
                  Total Question:: <span>{questions.length}</span>
                </Card.Text>
                <Card.Text>
                  Total Score::<span> {result.score}</span>
                </Card.Text>
                <Card.Text>
                  Correct Answers::<span> {result.correctAnswers}</span>
                </Card.Text>
                <Card.Text>
                  Wrong Answers::<span> {result.wrongAnswers}</span>
                </Card.Text>
                <div className="bt">
                  <Button className="btnnn" size="lg" onClick={onClickAgain}>Restart Quiz</Button>
                </div>

              </Card.Body>
            </Card>

          </div>

        )}




    </>
  )
}

export default Quiz