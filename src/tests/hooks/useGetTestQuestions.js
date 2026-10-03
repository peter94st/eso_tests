import {  useState } from "react";
import { QUESTIONS } from "../questions/QUESTIONS"

function getRandomQuestions(questions, amount = 20) {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, amount);
}

export function useGetTestQuestions ({ nbrQuestions, subjectCode }) {
    const [answers, setAnswers] = useState(Array(nbrQuestions).fill(null))

    const [testQuestions] = useState(() => {
        if (subjectCode === 'mix') {
            return getRandomQuestions(Object.values(QUESTIONS).flat(), 50);
        }

        return getRandomQuestions(QUESTIONS[subjectCode], nbrQuestions);
    });

    return {testQuestions, answers, setAnswers}
}