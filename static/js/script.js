document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        "Fantastisk klinik!",
        "Rekommenderas starkt.",
        "Professionella och vänliga."
    ];

    const container = document.getElementById("reviews-carousel");
    reviews.forEach(review => {
        const p = document.createElement("p");
        p.textContent = review;
        container.appendChild(p);
    });
});
