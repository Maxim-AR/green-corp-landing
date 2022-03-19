let a = document.querySelector('.posts')
fetch(' https://jsonplaceholder.typicode.com/posts')
.then ((value) => value.json())
.then((res) => a.innerHTML = (JSON.stringify(res.map(post => `<h2>${post.title}</h2><p>${post.body}</p>`).join('<br>'))));
