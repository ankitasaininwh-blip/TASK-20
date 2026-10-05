

let cart = [];




function addItem(name, price) {

    const existingItem = cart.find(
        item => item.name === name
    );


    if (existingItem) {

        alert(
            name + " is already added to the cart."
        );

        return;
    }


    cart.push({
        name: name,
        price: price
    });


    displayCart();
}



  

function displayCart() {

    const cartContainer =
        document.getElementById("cartItems");

    const totalAmount =
        document.getElementById("totalAmount");


    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML =
            `<p class="empty-cart">
                No items added yet.
            </p>`;

        totalAmount.innerText = "0";

        return;
    }


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const div =
            document.createElement("div");


        div.className = "cart-item";


        div.innerHTML = `

            <span>
                ${index + 1}.
                ${item.name}
                - ₹${item.price}
            </span>

            <button
                class="remove-btn"
                onclick="removeItem(${index})">

                Remove

            </button>

        `;


        cartContainer.appendChild(div);

    });


    totalAmount.innerText = total;

}


function removeItem(index) {

    cart.splice(index, 1);

    displayCart();

}

function scrollToBooking() {

    document
        .getElementById("services")
        .scrollIntoView({
            behavior: "smooth"
        });

}



// ================= BOOK NOW =================

function bookNow() {

    const name =
        document
            .getElementById("fullName")
            .value
            .trim();


    const email =
        document
            .getElementById("email")
            .value
            .trim();


    const phone =
        document
            .getElementById("phone")
            .value
            .trim();


    const message =
        document.getElementById(
            "bookingMessage"
        );


    // Check input fields

    if (
        name === "" ||
        email === "" ||
        phone === ""
    ) {

        message.innerText =
            "Please fill all the fields.";

        message.style.color = "red";

        return;
    }


    // Check cart

    if (cart.length === 0) {

        message.innerText =
            "Please add at least one service.";

        message.style.color = "red";

        return;
    }


    // Calculate total

    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price,
            0
        );


    // Services list

    const serviceList =
        cart
            .map(
                item =>
                    `${item.name} - ₹${item.price}`
            )
            .join(", ");


    // Send email

    sendBookingEmail(
        name,
        email,
        phone,
        serviceList,
        total
    );

}

function subscribeNewsletter() {

    const name =
        document
            .getElementById(
                "newsletterName"
            )
            .value
            .trim();


    const email =
        document
            .getElementById(
                "newsletterEmail"
            )
            .value
            .trim();


    const message =
        document.getElementById(
            "subscribeMessage"
        );


    if (
        name === "" ||
        email === ""
    ) {

        message.innerText =
            "Please enter your name and email.";

        message.style.color = "red";

        return;
    }


    message.innerText =
        "Thank you for subscribing!";

    message.style.color = "white";


    document.getElementById(
        "newsletterName"
    ).value = "";


    document.getElementById(
        "newsletterEmail"
    ).value = "";

}