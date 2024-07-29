const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
const card = document.querySelector('.cards-section')


function randonFood() {
    fetch(url)
    .then( (response) => response.json())
    .then( (data) => {
        console.log(data);
        let i = 1
        for (const el of data.categories) {
            card.innerHTML += `      <div class="card-section">
                    <div class="content-img-section-bottom">
                        <img src="${el.strCategoryThumb}" alt="">
                    </div>
                    <div class="content-section-bottom">
                        <h2>${el.strCategory}</h2>
                    </div>

                </div>`
            
        }
    })
}
randonFood()