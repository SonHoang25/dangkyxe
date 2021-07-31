var myHeaders = new Headers();
myHeaders.append("api_key",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYW5Cb0lkIjoiNzU3MSIsImlhdCI6MTYyNzY1MTQ2MCwiZXhwIjoxNjI3NjU4NjYwLCJpc3MiOiJES1gifQ.ezflm7zzF4JlGZw1vHIYWnNK35APq8MKcQuKhfWVJGA");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

export default requestOptions