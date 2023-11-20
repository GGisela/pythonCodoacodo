const body = document.querySelectorAll('body')

fetch('https://pixabay.com/es/photos/monta%C3%B1as-sol-nubes-cima-cumbre-190055/')
.then(result => result.json())
.then(data => console.log(data) )

