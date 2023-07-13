let nb = 12;
let url = 'https://reqres.in/api/users?per_page=' +nb;


fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))

    