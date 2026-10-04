import { Card, Radio, Space, Typography } from 'antd';

const { Text } = Typography;

export function Question ({ question, selectedAnswer, onAnswer }) {
    return (
        <Card
            style={{
                width: '100%',
                maxWidth: 800,
                margin: '0 auto',
            }}
        >
            <Text
                strong
                style={{
                    display: 'block',
                    fontSize: 22,
                    marginBottom: 24,
                }}
            >
                {question.question}
            </Text>

            <Radio.Group
                value={selectedAnswer}
                onChange={(e) => onAnswer(e.target.value)}
                style={{ width: '100%' }}
            >
                <Space
                    orientation="vertical"
                    size="middle"
                    style={{ width: '100%' }}
                >
                    {question.options.map((option, index) => (
                        <Radio.Button
                            key={index}
                            value={index}
                            style={{
                                width: '100%',
                                height: 'auto',
                                minHeight: 50,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px 16px',
                                whiteSpace: 'normal',
                            }}
                        >
                            {option}
                        </Radio.Button>
                    ))}
                </Space>
            </Radio.Group>
        </Card>
    );
}