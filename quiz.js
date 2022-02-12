const form = document.querySelector('.quiz-box')
const answers = Array.from(document.querySelectorAll('.answer'))
const allQuestions = document.querySelectorAll('.question')

const handleQuiz = (e) => {
	e.preventDefault()

	const checkedAnswers = answers.filter((answer) => answer.checked)
	const isTrue = checkedAnswers.every((answer) => answer.value === 'true')
	const allChecked = checkedAnswers.length === allQuestions.length

	if (!allChecked) {
		Swal.fire({
			icon: 'error',
			title: 'Błąd',
			text: 'Musisz zaznaczyć wszystkie odpowiedzi.',
		})
		return
	}

	checkedAnswers.forEach((answer) => {
		const checkIfCorrect = answer.value === 'true'
		const answerBox = answer.closest('.answer-box')

		if (checkIfCorrect) {
			answerBox.classList.add('correct')
			answerBox.classList.remove('incorrect')
		} else {
			answerBox.classList.add('incorrect')
			answerBox.classList.remove('correct')
		}
	})

	if (isTrue && allChecked) {
		Swal.fire({
			icon: 'success',
			title: 'Brawo!',
			text: 'Wszystkie odpowiedzi są prawidłowe.',
		})
	} else {
		Swal.fire({
			icon: 'warning',
			title: 'Przegrywasz',
			text: 'Niestety zaznaczone przez ciebie odpowiedzi są błędne!',
		})
	}
}

form.addEventListener('submit', handleQuiz)
