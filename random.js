const boyNames = [
	'Jan',
	'Stanisław',
	'Andrzej',
	'Józef',
	'Tadeusz',
	'Marek',
	'Marian',
	'Piotr',
	'Maciek',
	'Aleksander',
	'Michał',
	'Filip',
	'Artur',
	'Paweł',
	'Rafał',
	'Julian',
	'Wiktor',
	'Karol',
	'Leon',
	'Daniel',
	'Konrad',
]
const girlNames = [
	'Anna',
	'Zofia',
	'Ewa',
	'Julia',
	'Magda',
	'Iwona',
	'Monika',
	'Aniela',
	'Sabina',
	'Agata',
	'Gabriela',
	'Aneta',
	'Weronika',
	'Natalia',
	'Zuzzana',
]

const randomName = () => {
	const gender = localStorage.getItem('gender')

	if (gender == 2) {
		const name = girlNames[Math.floor(Math.random() * girlNames.length)]
		return name
	} else if (gender == 1) {
		const name1 = boyNames[Math.floor(Math.random() * boyNames.length)]
		return name1
	}
}

const playButton1 = document.getElementById('play1')
const playText1 = document.getElementById('play-text1')

window.onload = () => {
	playButton1.onclick = () => {
		playText1.innerHTML =
			'Gratulacje imię twojej drugiej połówki to: ' + randomName()
	}
}
