var myHeaders = new Headers();
myHeaders.append("api_key",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYW5Cb0lkIjoiNzU3MSIsImlhdCI6MTYyODA3MjE3NSwiZXhwIjoxNjI4MDc5Mzc1LCJpc3MiOiJES1gifQ.6PPUxirK4ZIQ3E9h8mQoMQTTXtblyOnKCXNicI1se4U");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

export default requestOptions