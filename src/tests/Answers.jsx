import { Flex } from 'antd';
import { CorrectedQuestion } from './CorrectedQuestion';

export function Answers ({ questions, answers }) {
    return (
        <Flex
            vertical
            align='center'
            justify='center'
        >
            {questions.map((question, idx) => (
                <CorrectedQuestion
                    key={`q${idx}`}
                    question={question}
                    answer={answers[idx]}
                />
            ))}
        </Flex>
    )
}