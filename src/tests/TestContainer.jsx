import { Flex } from "antd";
import { Start } from "./Start";
import { Test } from "./Test";
import { useParams } from "react-router-dom";
import { SUBJECTS } from "../Subjects/SUBJECTS";
import { getMinutesAndQuestions } from "../helper/helpers";

import { useState } from "react";
import { useTimer } from "./hooks/useTimer";
import { useGetTestQuestions } from "./hooks/useGetTestQuestions";
import { Results } from "./Results";


export function TestContainer () {
    const { subjectCode } = useParams()
    const subject = SUBJECTS.find(sub => sub.code === subjectCode)

    const { minutes, questions } = getMinutesAndQuestions(subjectCode)

    const [ started, setStarted ] = useState(false)
    const [ finished, setFinished ] = useState(false)

    const {testQuestions, answers, setAnswers} = useGetTestQuestions({ nbrQuestions: questions, subjectCode })
    const timeLeft = useTimer({ minutes, started, finished, setFinished })

    function startTest () {
        setStarted(true)
    }


    return (
        <Flex
            style={{
                height: '100%',
                width: '90%',
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '1rem'
            }}
        >
            {
                !started &&
                <Start
                    subject={subject}
                    startTest={startTest}
                />
            }
            {
                (started && !finished) &&
                <Test
                    questions={testQuestions}
                    timeLeft={timeLeft}
                    setFinished={setFinished}
                    answers={answers}
                    setAnswers={setAnswers}
                />
            }

            {
                finished &&
                <Results
                    questions={testQuestions}
                    answers={answers}
                />
            }
        </Flex>
    )
}