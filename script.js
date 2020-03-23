
const url = 'https://sandbox-api.brewerydb.com/v2/'

let randomBeer = document.querySelector(".randomBeerImage")

let randomBeerButton = document.querySelector(".randomBeerButton")

randomButton.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res)
            randomBeer.setAttribute("src", res[0].url);
        })
        .catch(err => {
            console.log("something went wrong...", err);
        });
})

categoryButton.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(categories, {
        headers: {
            'x-api-key': 'dd4354c477a80cf9537076c1f73b8937'
        }
    })
        .then(res => {
            return res.json();
        })
        .then(res => {
            categoryImg.setAttribute("src", res[0].url)
        })
        .catch(err => {
            console.log("something went wrong...", err);
        })
});














// var i = 0, images=[ "test1.jpeg",
//                     "test1.jpeg",
//                     "test1.jpeg",
//                     "test1.jpeg"];

// function myslide(param) 
// {
//     if(param === 'next') {
//         i++;
//         if(i === images.length) { i = images.length - 1 }
//     } else{
//         i--;
//         if (i < 0)(i = 0);}

//     }

//     document.getElementById('slide').src = images[i];

        
