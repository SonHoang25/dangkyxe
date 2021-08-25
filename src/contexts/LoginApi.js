var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    username: "test05",
    password: "abcd1234",
});

var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
};

fetch("http://10.0.25.184:8089/DkOtoFull/user/login", requestOptions)
    .then((response) => response.text())
    .then((data) => console.log("login api", data))
    .catch((error) => console.log("error", error));
