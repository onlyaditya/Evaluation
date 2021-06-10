function show_booking() {
    let data = JSON.parse(localStorage.getItem('booking'));
    let list = document.getElementById('book-tickets');

    console.log(list);

    let div = document.createElement('div');
    div.setAttribute('class', 'ticket');
    
    div.innerHTML = `<img src="${data.image}">
            <div>Price: ${data.price}</div>
            <div>${data.description}</div>
            <div>Time: ${data.time}</div>
            <button onclick="checkout()">Check Out</button>`;
        
        list.appendChild(div);

}

show_booking();

function checkout() {
    setTimeout(function () {
        alert("Your booking is in progress")
    }, 0);

    setTimeout(function () {
        alert("our payment has been received")
    }, 3000);

    setTimeout(function () {
        alert("Preparing your ticket")
    }, 8000);

    setTimeout(function () {
        alert("Booking Successful")
    }, 10000);

}