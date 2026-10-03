import { Card } from "antd";
import {
  QuestionCircleFilled, ClockCircleFilled
} from '@ant-design/icons';
import { getMinutesAndQuestions } from "../helper/helpers";
import { useNavigate } from "react-router-dom";

export function Subject ({ subject }) {
    const { minutes, questions } = getMinutesAndQuestions(subject.code)
    const navigate = useNavigate()

    return (
        <Card
            hoverable
            onClick={() => navigate(`/test/${subject.code}`)}
        >
            <img 
                src={subject.icon} 
                alt={subject.title} 
                style={{
                    width: '240px',
                    height: '240px'
                }} 
            />
            <h3>{subject.title}</h3>
            <p>
                <QuestionCircleFilled /> 
                {' '}
                {`${questions} preguntas`}
            </p>
            <p>
                <ClockCircleFilled /> 
                {' '}
                {`${minutes} minutos`}
            </p>
        </Card>
    )
}