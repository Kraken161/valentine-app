const saveGender = (gender) => {
	let gen = gender

	switch (gen) {
		case 1:
			localStorage.setItem('gender', 1)
			console.log('girl')
			break
		case 2:
			localStorage.setItem('gender', 2)
			console.log('boy')
			break
	}
}

const girlButton = document.getElementById('girl')
const boyButton = document.getElementById('boy')

window.onload = () => {
	girlButton.onclick = () => {
		saveGender(1)
		window.location.href = '/valentine-app/game1/game1.html'
	}

	boyButton.onclick = () => {
		saveGender(2)
		window.location.href = '/valentine-app/game1/game1.html'
	}
}
