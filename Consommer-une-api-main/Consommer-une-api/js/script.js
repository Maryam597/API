let root = document.getElementById('root')
let nb = 12;
let url = 'https://reqres.in/api/users?per_page=' + nb;

fetch(url) //récupére l'url 
    .then(response => {     //stocker les données de l'url dans response
        response.json()  //j.son = tableau 
        .then(data => { // tableau renommé data 
            console.log(data.data)
            data.data.forEach(element => { // boucle foreach
                // console.log(element); // element =  ce qui se trouve dans la data 
                root.innerHTML +=` 
                <div class='bloc'> 
                <p> ${element.last_name}</p>
                <p> ${element.first_name}</p>
                <img src= '${element.avatar}'> 
                <p> ${element.email}</p>
                </div>` // innerHtml --> écrire du html dans du js
            })
        })
    }
    )
    .catch(error => console.error(error));

console.log(root);


// headers vérification j.son 
