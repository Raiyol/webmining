['Lyon', 'Rennes'].forEach(elem => {
    fetch(`http://localhost:5000/api/${elem}`)
    .then(response => response.json())
    .then(response => {
        document.querySelector(`#${elem}`).innerHTML = '';
        for(let i = 1; i <= response.express.length; i++)
        {
            document.querySelector(`#${elem}`).innerHTML += `<tr xmlns:ns="http://www.owl-ontologies.com/unnamed.owl" about="${response.express[i-1].x}"> <th scope="row">${i}</th>`+
                                                        `<td property="dc:name">${response.express[i-1].name}</td>`+
                                                        `<td property="dc:adresse">${response.express[i-1].addresse}</td>`+
                                                        `<td property="dc:lat">${response.express[i-1].lat}</td>`+
                                                        `<td property="dc:lng">${response.express[i-1].lng}</td>`+
                                                        `<td property="dc:available_bikes">${response.express[i-1].available_bikes}</td>`+
                                                        `<td property="dc:available_bike_stands">${response.express[i-1].available_bike_stands}</td>`+
                                                        `<td property="dc:status">${response.express[i-1].status}</td> </tr>`;
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

});
