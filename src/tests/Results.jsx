import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

export function Results ({ questions, answers }) {
    const navigate = useNavigate()

    const correctAnswers = questions.filter(
        (question, index) => question.answer === answers[index]
    ).length;

    return (
        <Card>
            <h2>Resultados</h2>
            {correctAnswers} / {questions.length}
            <Button onClick={() => navigate('/subjects')}>Volver</Button>
        </Card>
    )
}