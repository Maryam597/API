let nb = 12;
let url = 'https://reqres.in/api/users?per_page=' +nb;
let html = document.getElementById('root');


fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))





//   .then(function(response) {
//     if (response.status !== 200) { // si ça c'est mal passé
//       throw new Error("Le serveur n'a pas répondu correctement");
//     } else return response.text(); // renvoie une promesse
//   })
//   .then(function(data) { // data correspond au retour du résolve (ici deux lignes au dessus)
//     console.log("Token récupéré : ", data);
//   })

