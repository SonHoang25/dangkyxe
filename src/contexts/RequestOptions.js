var myHeaders = new Headers();
myHeaders.append("api_key",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYW5Cb0lkIjoiNzU3MSIsImlhdCI6MTYyNzg5NTQwOSwiZXhwIjoxNjI3OTAyNjA5LCJpc3MiOiJES1gifQ.4eNRbzcUngeQMJz_vZMgm4bqM8f50cZ-SPzWdAnR4No");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

export default requestOptions