import { Button, Space, Flex } from "antd";
import { getMinutesAndQuestions } from "../helper/helpers";

import { useNavigate } from "react-router-dom";

export function Start ({ subject, startTest }) {
    const navigate = useNavigate()
    const { minutes, questions } = getMinutesAndQuestions(subject.code)

    return (
        <>
        <Flex
            vertical
            align="center"
            justify="center"
            gap={16}
            style={{
                width: '100%'
            }}
        >
            <img 
                src={subject.icon} 
                alt={subject.title}
                style={{
                    width: 300,
                    height: 300
                }}
            />
            <h2 className="funnyFont">
                {subject.title}
            </h2>
            <p>
                {`${questions} preguntas`}
            </p>
            <p>
                {`${minutes} minutos`}
            </p>
            <Space>
                <Button size='large' className="funnyFont"
                    onClick={startTest}
                >
                    Empezar
                </Button>
                <Button size="large" className="funnyFont"
                    onClick={() => navigate('/subjects')}
                >
                    Volver
                </Button>
            </Space>
        </Flex>
        </>
    )
}