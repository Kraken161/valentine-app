const yourName = document.getElementById('yourname')
const theirName = document.getElementById('theirname')
const calcBtn = document.getElementById('sumbit-button')
const yourlovescoreis = document.getElementById('yourlovescoreis')
let loveScore = Math.random() * 100
const loveInfo = document.getElementById('loveinfo')
const reloadBtn = document.getElementById('reload')
loveScore = Math.floor(loveScore) + 1
const errorText = document.getElementById('error')

function capitalize_Words(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
}

function love() {
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}
	;(async function () {
		var i = 0
		while (i < loveScore) {
			document.getElementById('score').innerHTML = i + '%'
			await sleep(20)
			i++
		}
	})()
}

calcBtn.addEventListener('click', function (e) {
	loveScore = Math.random() * 100
	e.preventDefault()
	if (yourName.value == '' && theirName.value == '') {
		Swal.fire({
			icon: 'error',
			title: 'Błąd',
			text: 'Musisz uzupełnić wszystkie pola!',
		})
		return
	}
	if (yourName.value == '') {
		Swal.fire({
			icon: 'error',
			title: 'Błąd',
			text: 'Musisz uzupełnić imię chłopaka!',
		})
		return
	}
	if (theirName.value == '') {
		Swal.fire({
			icon: 'error',
			title: 'Błąd',
			text: 'Musisz uzupełnić imię dziewczyny!',
		})
		return
	}

	//lovescore conditions
	else if (loveScore <= 10) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak olej i woda. Przepraszam, ale to nie wystarczy do idealnego związku.'
	} else if (loveScore <= 20) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak ptak i niebo. Ale muszą się trochę skoncentrować na swojej miłości.'
	} else if (loveScore <= 30) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak sól i piasek. Powinni bardziej dbać o swoją miłość! '
	} else if (loveScore <= 40) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak Romeo i Julia. W ich miłości nie ma fałszywych rzeczy.'
	} else if (loveScore <= 50) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak Maria i Pierre Curie. To dobre połączenie chemiczne. Jesteście dobrym przykładem prawdziwej miłości.'
	} else if (loveScore <= 60) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak Ziemia i Księżyc. Nie mogą bez siebie żyć.'
	} else if (loveScore <= 70) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak rzeka & morze. Szerzcie miłość, nie nienawiść.'
	} else if (loveScore <= 80) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się jak klej. Nic nie może ich od siebie oddzielić. Miłość jest wieczna.'
	} else if (loveScore <= 90) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' kochają się bardziej niż cokolwiek na świecie! Są najlepszym przykładem prawdziwej miłości.'
	} else if (loveScore <= 100) {
		yourlovescoreis.innerHTML = 'Wynik miłosny to'
		love()
		reloadBtn.style.display = 'block'
		loveInfo.innerHTML =
			`<b>${yourName.value}</b> i ` +
			'<b>' +
			capitalize_Words(theirName.value) +
			'</b>' +
			' ich miłość jest największa na świecie, powinni się pobrać' +
			'</b>' +
			' w niedługim czasie. Największe szczęście.'
	}
})
