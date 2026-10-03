export function Timer ({ timeLeft }) {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
        <div className={`quizTimer ${timeLeft <= 120 ? 'warning' : ''} ${timeLeft <= 60 ? 'red' : ''}`}>
            <span>⏱</span>
            <span>
                {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
        </div>
    )
}