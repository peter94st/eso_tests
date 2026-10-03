export function getMinutesAndQuestions (subjectCode)  {
    if(subjectCode === 'mix') return { minutes: 30, questions: 50 }
    return { minutes: 12, questions: 20 }
}