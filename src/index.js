console.log('%c HI', 'color: firebrick')

//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded',function(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data =>{
        const img = document.querySelector('div#"dog-image-container"')
        img.innerHTML = data.img;
    }
)
});
/////////////////////////
document.addEventListener('DOMContentLoaded', function(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(data => {
        const breeds = document.getElementById('#dog-breeds')
        breeds.innerHTML = data.breeds
        const filter = document.getElementById('#breed-dropdown')
        filter.innerHTML = data.filter
    });
    drop(allDogs)
    const touch = breeds.addEventListener('click', ()=> {
        touch.textColor = red;
    });
});

////////////////////////
const allDogs = filter;
const result = allDogs.filter(drop)
function drop(allDogs){
   return dog === allDogs[0]
 }