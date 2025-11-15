
async function github() {
  try {
    const response = await fetch("https://api.github.com/users");

    if (!response.ok) {
      throw new Error("the data is nothing prsent")
    }
    const data = await response.json();
    // console.log(data);

    const first = document.getElementById('first')


    for (let user of data) {
      let element = document.createElement('div');
      element.classList.add('usercss');

      let image = document.createElement('img');
      image.src = user.avatar_url;

      const userName = document.createElement('h2');
      userName.textContent = user.login;

      const anchor = document.createElement('a')
      anchor.href = user.html_url
      anchor.textContent = "Visit Profile"

      element.append(image, userName, anchor);
      first.append(element);
    }
  } catch (error) {
    console.log(error)
  }
}

github();