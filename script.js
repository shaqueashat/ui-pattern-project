
const url = "https://rickandmortyapi.com/api/"

let randomBeerImg = document.querySelector(".randomBeerImage")

let prevBeerButton = document.querySelector(".prevBeerButton")

let nextBeerButton = document.querySelector(".nextBeerButton")

// randomBeerImg.addEventListener("click", function (e) {
//     e.preventDefault()
//   randomButton.addEventListener("click", function (e) {
//     e.preventDefault()
//     fetch(url)
//         .then(res => {
//             return res.json();
//         })
//         .then(res => {
//             console.log(res)
//             // console.log("success!", res[0].url);
//             randomImg.setAttribute("src", res[0].url);
//         })
//         .catch(err => {
//             console.log("something went wrong...", err);
//         });
// })
    // });

    prevBeerButton.addEventListener("click", function (e) {
        e.preventDefault()
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res)
                // console.log("success!", res[0].url);
                randomBeerImg.setAttribute("src", res[0].url);
            })
            .catch(err => {
                console.log("something went wrong...", err);
            });
    })

    nextBeerButton.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res)
            // console.log("success!", res[0].url);
            randomBeerImg.setAttribute("src", res[0].url);
        })
        .catch(err => {
            console.log("something went wrong...", err);
        });
})


// categoryButton.addEventListener("click", function (e) {
//     e.preventDefault()
//     fetch(categories, {
//         headers: {
//             'x-api-key': 'dd4354c477a80cf9537076c1f73b8937'
//         }
//     })
//         .then(res => {
//             return res.json();
//         })
//         .then(res => {
//             categoryImg.setAttribute("src", res[0].url)
//         })
//         .catch(err => {
//             console.log("something went wrong...", err);
//         })
// });














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
