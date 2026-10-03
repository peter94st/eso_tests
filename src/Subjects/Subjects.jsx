import { Flex } from "antd";
import { SUBJECTS } from "./SUBJECTS";
import { Subject } from "./Subject";

export function Subjects () {
    return (
        <>
        <h2
            style={{
                margin: '2rem'
            }}
        >
            Elige asignatura
        </h2>

        <Flex
            style={{
                height: '80%',
                width: '80%',
            }}
            wrap
            gap={16}
        >
            {
                SUBJECTS.map(subject => (
                    <Subject subject={subject} />
                ))
            }
        </Flex>
        </>
        
    )
}