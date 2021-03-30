// local reviews data
const pictures = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "/Images/img2.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "/Images/img1.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];


/* Selecting/Targeting items */

const author = document.getElementById("author");
const job = document.getElementById("job");
const img = document.getElementById("person-img");
const info = document.getElementById("info");

const PreviousButton = document.querySelector(".previous-btn");
const NextButton = document.querySelector(".next-btn");
const RandomButton = document.querySelector(".random-btn");

// Initialization
let currentArrayItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentArrayItem);
});

function showPerson(person) {
    const item = pictures[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person
NextButton.addEventListener("click", function () {
    currentArrayItem++;
    if (currentArrayItem > pictures.length - 1) {
        currentArrayItem = 0;
    }
    showPerson(currentArrayItem);
})
// Show previous person
PreviousButton.addEventListener("click", function () {
    currentArrayItem++;
    if (currentArrayItem > pictures.length - 1) {
        currentArrayItem = 0;
    }
    showPerson(currentArrayItem);
})

// Show random item
RandomButton.addEventListener("click", function () {
    currentArrayItem = Math.floor(Math.random() * pictures.length);
    showPerson(currentArrayItem)
})




