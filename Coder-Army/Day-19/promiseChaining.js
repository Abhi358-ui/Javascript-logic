
//? Promise chaining

fetch("https://api.github.com/users")
.then((response) => {
  return response.json();
})
.then((data) => {
  // console.log(data);

  let element = document.getElementById('first');

  for (let i=0; i<data.length; i++) {
    let image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = "250px";
    image.style.width = "250px";
    element.append(image);
  }
  
}).catch((error) => {
  let element = document.getElementById('first');
  element.textContent = error.message;
})