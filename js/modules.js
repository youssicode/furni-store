let productDB = [
    {
        imgLinkId: 1,
        price: 140,
        productTitle: "Modern Furniture",
        nbrOfVote: 50,
        nbrStars: 5
    },
    {
        imgLinkId: 2,
        price: 150,
        productTitle: "House Sofa",
        nbrOfVote: 40,
        nbrStars: 4
    },
    {
        imgLinkId: 3,
        price: 160,
        productTitle: "Chair",
        nbrOfVote: 50,
        nbrStars: 5
    },
    {
        imgLinkId: 4,
        price: 170,
        productTitle: "Relax Chair",
        nbrOfVote: 30,
        nbrStars: 3
    },
    {
        imgLinkId: 5,
        price: 100,
        productTitle: "Canapé",
        nbrOfVote: 50,
        nbrStars: 4
    },
    {
        imgLinkId: 6,
        price: 110,
        productTitle: "Old Furniture",
        nbrOfVote: 70,
        nbrStars: 2
    },
    {
        imgLinkId: 7,
        price: 120,
        productTitle: "Mood",
        nbrOfVote: 50,
        nbrStars: 4
    },
    {
        imgLinkId: 8,
        price: 130,
        productTitle: "Some Four",
        nbrOfVote: 50,
        nbrStars: 5
    }
]

//* Functions 
function slideRight() {
    if (slideNbr == 1) {
        displaySlide(2, 1, 3);
        slideNbr++;
    } else if (slideNbr == 2) {
        displaySlide(3, 1, 2);
        slideNbr++;
    } else { // Control if is the last slide.
        displaySlide(1, 3, 2);
        slideNbr = 1;
    }
}
function slideLeft() {
    if (slideNbr == 1) {
        displaySlide(3, 1, 2);
        slideNbr = 3;
    } else if (slideNbr == 2) {
        displaySlide(1, 3, 2);
        slideNbr--;
    } else {
        displaySlide(2, 1, 3);
        slideNbr--;
    }
}
function displaySlide(active, dsbl1, dsbl2) {
    document.getElementById(`slideId${dsbl1}`).style.display = "none";
    document.getElementById(`slideId${dsbl2}`).style.display = "none";
    document.getElementById(`slideId${active}`).style.display = "grid";
}
export { productDB, slideRight, slideLeft, displaySlide }