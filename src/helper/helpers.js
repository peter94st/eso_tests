export function getMinutesAndQuestions (subjectCode)  {
    if(subjectCode === 'mix') return { minutes: 30, questions: 50 }
    return { minutes: 12, questions: 20 }
}

export function getResultMessage (correct, total) {
    const percentaje = (correct / total) * 100

    if(percentaje === 100) {
        return {
            emoji: '🧠',
            title: 'Profesorado honorífico'
        }
    }

    if(percentaje >= 85) {
        return {
            emoji: '🔥',
            title: 'Cerebrito'
        }
    }

    if(percentaje >= 65) {
        return {
            emoji: '😎',
            title: 'Vas sobrado'
        }
    }

    if(percentaje >= 50) {
        return {
            emoji: '🙂',
            title: 'Se puede mejorar'
        }
    }

    if(percentaje >= 30) {
        return {
            emoji: '📚',
            title: 'Toca repasar'
        }
    }

    return {
        emoji: '💀',
        title: '¿Seguro que fuiste a clase?'
    }
}