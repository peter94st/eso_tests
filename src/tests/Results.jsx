import { Card, Button, Progress, Flex } from "antd";
import { Answers } from "./Answers";
import { useNavigate } from "react-router-dom";

import { getResultMessage } from "../helper/helpers";
import { useState } from "react";

export function Results ({ questions, answers }) {
    const navigate = useNavigate()
    const [ showResults, setShowResults ] = useState(false)

    const correctAnswers = questions.filter(
        (question, index) => question.answer === answers[index]
    ).length;

    const percentaje = Math.round(
        (correctAnswers / questions.length ) * 100
    )

    const result = getResultMessage(correctAnswers, questions.length)

    return (
        <>
        <Card
        style={{
                height: '0%',
                width: '1000%',
            }}
            styles={{
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
            }
            }}
        >
            <h2>Resultados</h2>
            <Flex 
                style={{ margin: '20px 0' }}
                vertical
                align="center"
                justify="center"    
            >
                <Progress 
                    type="circle"
                    percent={percentaje}
                    size={180}
                    format={() => `${correctAnswers}/${questions.length}`}
                />
                <h3>
                    <span style={{ fontSize: 30 }}>{result.emoji}</span>
                    {result.title}
                </h3>
            </Flex>
            <Button
                onClick={() => setShowResults(true)}
            >
                Ver preguntas
            </Button>
            <Button onClick={() => navigate('/subjects')}>Volver</Button>
            {
                showResults &&
                <Answers
                    questions={questions}
                    answers={answers}
                />
            }
        </Card>
            
        </>
    )
}