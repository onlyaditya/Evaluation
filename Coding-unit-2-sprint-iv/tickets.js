var ticket = [
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SX522_.jpg",
        price: 250,
        description: "Bahubali",
        time: "4.30 PM"

    },

    {
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Baahubali_the_Conclusion.jpg",
        price: 250,
        description: "Bahubali 2",
        time: "5.30 PM"

    },

    {
        image: "https://13thdimension.com/wp-content/uploads/2018/03/D1nkY7UVAAUs7KN-580x859.jpg",
        price: 250,
        description: "Avengers",
        time: "9.30 AM"

    },

    {
        image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Marvel_Cinematic_Universe_Infinity_Saga_artwork.jpeg",
        price: 250,
        description: "The Infinity Saga",
        time: "8.30 AM"

    },

    {
        image: "https://images-na.ssl-images-amazon.com/images/I/61cl%2BE7jjQL._AC_SY879_.jpg",
        price: 250,
        description: "Captain America ",
        time: "11.30 AM"

    },

    {
        image: "https://images-na.ssl-images-amazon.com/images/I/A1JxSjCUO1L._RI_.jpg",
        price: 250,
        description: "Aqua Man",
        time: "12.30 PM"

    }

];

localStorage.setItem('movie-list', JSON.stringify(ticket));


function show_movie() {
    let list = document.getElementById('tickets');
    

    let data = JSON.parse(localStorage.getItem('movie-list'));

    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'ticket');

        div.innerHTML = `<img src="${data[i].image}">
            <div>Price: ${data[i].price}</div>
            <div>${data[i].description}</div>
            <div>Time: ${data[i].time}</div>
            <button id="${i}" onclick="addMovie(this.id)">Book Now</button>`;
        
        list.appendChild(div);
    }

}

show_movie();

function addMovie(id) {
    let data = JSON.parse(localStorage.getItem('movie-list'));

    let book = data[id];

    localStorage.setItem('booking', JSON.stringify(book));

    location.replace('book.html');
}

