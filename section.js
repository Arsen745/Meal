const span = document.querySelector('.text-section')
const imgName = document.querySelector('.img-section')
const instruction = document.querySelector('.instructions')
const photos = document.querySelector('.photos')
const video = document.querySelector('.you-tube-videos')
const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='



let id = localStorage.getItem('id')
if (id) {
    fetch(url + id)
        .then(res => res.json())
        .then(info => {
            const { strMeal, strMealThumb, strInstructions, strYoutube} = info.meals[0]
            span.innerHTML += `<h1>${strMeal}</h1>`
            imgName.innerHTML += `<img src="${strMealThumb}" >`
            instruction.innerHTML += `<h4>${strInstructions}</h4>`
            let vid = strYoutube.replace('watch?v=','embed/')   
            video.innerHTML += `                <iframe width="100%" height="615px" src="${vid}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

            console.log(strMeal, strMealThumb);
            for (let i = 0; i < 21; i++) {
                if (info.meals[0]['strIngredient' + i]) {
                    photos.innerHTML += `<div class="img1">
                    <img src="https://www.themealdb.com/images/ingredients/${info.meals[0]['strIngredient' + i]}.png"/>
                    <h4>${info.meals[0]['strIngredient' + i]} ${info.meals[0]['strMeasure' + i]} </h4>
                    </div>`

                    console.log(info.meals[0]['strIngredient' + i], ":", info.meals[0]['strMeasure' + i]);
                }

            }

        })
}