const body = document.querySelector('body')

fetch('https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo')
.then(result => result.json())
.then(data => console.log(data) )
