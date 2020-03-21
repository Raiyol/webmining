['Lyon', 'Strasbourg', 'Rennes', 'Montpellier'].forEach(elem => {
    fetch(`http://localhost:5000/api/${elem}`)
    .then(response => response.json())
    .then(response => {
        document.querySelector(`#${elem}`).innerHTML = '';
        for(let i = 1; i <= response.express.length; i++)
        {
            document.querySelector(`#${elem}`).innerHTML += `<tr> <th scope="row">${i}</th>`+
                                                        `<td>${response.express[i-1].name}</td>`+
                                                        `<td>${response.express[i-1].adresse}</td>`+
                                                        `<td>${response.express[i-1].lat}</td>`+
                                                        `<td>${response.express[i-1].lng}</td>`+
                                                        `<td>${response.express[i-1].available_bikes}</td>`+
                                                        `<td>${response.express[i-1].available_bike_stands}</td>`+
                                                        `<td>${response.express[i-1].status}</td> </tr>`;
        }
        console.log(response);
    })
    .catch(error => console.log("Erreur : " + error));

    const button = document.querySelector(`#show${elem}`);

    button.addEventListener('click', function onClick () {
        if(document.getElementById(`table${elem}`).style.display == 'none')
        {
            document.getElementById(`table${elem}`).style.display = 'block';
        }
        else
        {
            document.getElementById(`table${elem}`).style.display = 'none';
        }
        return;
    });

})
