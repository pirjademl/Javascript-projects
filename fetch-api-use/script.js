function FetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      updateUI(json);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

const getUsersBtn = document.querySelector(".generate");
const userNamesDIV = document.querySelector(".name-wrapper .user-names");
const EmailsDIV = document.querySelector(".email-wrapper .emails");

getUsersBtn.addEventListener("click", FetchUsers);
function updateUI(json) {
  json.forEach((user) => {
    console.log(user)
    const userElement = document.createElement("li");
    const username = document.createElement("li");
    username.textContent = user.name;
    const userEmail = document.createElement("li");
    userEmail.textContent = user.email;
    userNamesDIV.appendChild(username);
    EmailsDIV.appendChild(userEmail);
  });
}
