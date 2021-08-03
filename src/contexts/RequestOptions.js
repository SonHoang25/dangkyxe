var myHeaders = new Headers();
myHeaders.append("api_key",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYW5Cb0lkIjoiNzU3MSIsImlhdCI6MTYyNzk4MDEyMSwiZXhwIjoxNjI3OTg3MzIxLCJpc3MiOiJES1gifQ.Kk6wFw4i-wvxIDmizEAiA64VzMw0_o4V2OY3V0Cpnxw");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

export default requestOptions