import { useState } from "react";
import { Progress, Flex, Space, Button } from "antd";

import { Timer } from "./Timer";
import { Question } from "./Question";

export function Test ({ questions, timeLeft, setFinished, answers, setAnswers }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const nextQuestion = () => {
        if(currentQuestion === questions.length -1 ) {
            setFinished(true)
            return
        }

        setCurrentQuestion(prev => prev + 1)
    }

    const handleAnswer = (answer) => {
        setAnswers(prev => {
            const newAnswers = [...prev]
            newAnswers[currentQuestion] = answer
            return newAnswers
        })

        nextQuestion()
    }

    return (
        <>
            <Flex
                vertical
                align="center"
                justify="center"
                style={{
                    height: '100%',
                    width: '100%'
                }}
            >
                <Progress
                    style={{
                        width: '90%'
                    }}
                    percent={((currentQuestion + 1) / questions.length) * 100}
                    format={() => `${currentQuestion + 1} / ${questions.length}`}
                />
                <Question
                    key={`q${questions[currentQuestion].id}`}
                    question={questions[currentQuestion]}
                    selectedAnswer={answers[currentQuestion]}
                    onAnswer={handleAnswer}
                />
                <Space>
                    <Button 
                        onClick={() => setCurrentQuestion(prev => prev - 1)}
                        disabled={currentQuestion === 0}
                    >
                        Anterior
                    </Button>
                    <Button onClick={nextQuestion}>
                        Siguiente
                    </Button>
                </Space>
            </Flex>
            <Timer timeLeft={timeLeft} />
        </>
    )
}