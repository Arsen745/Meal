const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
const btns = document.querySelectorAll('.btns button')
const cards = document.querySelector('.cards')
const cont = document.querySelector('.btns')
const search = document.querySelector('.search input')
const button = document.querySelector('.search button')

function onclickBtn() {
    for (const el of btns) {
        el.addEventListener('click', function () {
            for (const btn of btns) {
                btn.classList.remove('active');
            }
            this.classList.add('active');

            if (this.value === 'chicken') {
                cards.innerHTML = '';
                openCategory('chicken');
            } else if (this.value === 'breakfast') {
                cards.innerHTML = '';
                openBreakfast();
            }
            else if (this.value === 'dessert') {
                cards.innerHTML = '';
                openDessert();
            } else if (this.value === 'pasta') {
                cards.innerHTML = '';
                openPasta();
            }
            else if (this.value === 'vegetrian') {
                cards.innerHTML = '';
                openVegetarian();
            }
        });
    }
}
onclickBtn();

function openCategory() {
    fetch(url + 'chicken')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (const el of data.meals) {
                let randomNumber = Math.random();
                let random = Math.floor(randomNumber * 101);
                cards.innerHTML += `            <div class="card" onclick="openSecond(${el.idMeal})">
                <img src="${el.strMealThumb}" alt="">
                <div class="text">
                    <div class="price">
                        <a href="#">${random}$</a>
                    </div>
                    <div class="name">
                        <a href="">${el.strMeal}</a>
                    </div>
                </div>
            </div>`





            }
        })
}
function openBreakfast() {
    fetch(url + 'breakfast')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (const el of data.meals) {
                let randomNumber = Math.random();
                let random = Math.floor(randomNumber * 101);
                cards.innerHTML += `            <div class="card" onclick="openSecond(${el.idMeal})">
                <img src="${el.strMealThumb}" alt="">
                <div class="text">
                    <div class="price">
                        <a href="#">${random}$</a>
                    </div>
                    <div class="name">
                        <a href="">${el.strMeal}</a>
                    </div>
                </div>
            </div>`


            }
        })
}
function openDessert() {
    fetch(url + 'dessert')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (const el of data.meals) {
                let randomNumber = Math.random();
                let random = Math.floor(randomNumber * 101);
                cards.innerHTML += `            <div class="card" onclick="openSecond(${el.idMeal})">
                <img src="${el.strMealThumb}" alt="">
                <div class="text">
                    <div class="price">
                        <a href="#">${random}$</a>
                    </div>
                    <div class="name">
                        <a href="">${el.strMeal}</a>
                    </div>
                </div>
            </div>`


            }
        })
}
function openPasta() {
    fetch(url + 'pasta')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (const el of data.meals) {
                let randomNumber = Math.random();
                let random = Math.floor(randomNumber * 101);
                cards.innerHTML += `            <div class="card" onclick="openSecond(${el.idMeal})">
                <img src="${el.strMealThumb}" alt="">
                <div class="text">
                    <div class="price">
                        <a href="#">${random}$</a>
                    </div>
                    <div class="name">
                        <a href="">${el.strMeal}</a>
                    </div>
                </div>
            </div>`


            }
        })
}
function openVegetarian() {
    fetch(url + 'vegetarian')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            for (const el of data.meals) {
                let randomNumber = Math.random();
                let random = Math.floor(randomNumber * 101);
                cards.innerHTML += `           
                 <div class="card" onclick="openSecond(${el.idMeal})">
                <img src="${el.strMealThumb}" alt="">
                <div class="text">
                    <div class="price">
                        <a href="#">${random}$</a>
                    </div>
                    <div class="name">
                        <a href="">${el.strMeal}</a>
                    </div>
                </div>
            </div>`
            }
        })
}
openBreakfast()
function openSecond(foodId) {
    localStorage.setItem('id', foodId)
    window.location.href = 'second.html'
}


const searchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const searchCate = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const cards1 = document.querySelector('.cards');

function displayMeals(meals) {
    cards1.innerHTML = '';
    if (!meals || meals.length === 0) {
        cards1.innerHTML = '<h1>Такое блюдо нету</h1>';
        return;
    }
    for (const el of meals) {
        let randomPrice = Math.floor(Math.random() * 101);
        cards1.innerHTML += `            <div class="card" onclick="openSecond(${el.idMeal})">
        <img src="${el.strMealThumb}" alt="">
        <div class="text">
            <div class="price">
                <a href="#">${randomPrice}$</a>
            </div>
            <div class="name">
                <a href="">${el.strMeal}</a>
            </div>
        </div>
    </div>`;
    }
}

function searchMeals() {
    let value = searchInput.value.trim();
    if (!value) {
        alert("Пишите Имя или категория Блюдо");
        return;
    }
    fetch(searchUrl + value)
        .then(response => response.json())
        .then(data => {
            let mealFound = data.meals && data.meals.some(meal => meal.strMeal.trim().toLowerCase() === value.toLowerCase());
            if (mealFound) {
                displayMeals(data.meals.filter(meal => meal.strMeal.trim().toLowerCase() === value.toLowerCase()));
            } else {
                searchByCategory(value);
            }
            searchInput.value = '';
        })

}

function searchByCategory(category) {
    fetch(searchCate + category)
        .then(response => response.json())
        .then(data => {
            displayMeals(data.meals);
            searchInput.value = '';
        })

}

searchButton.addEventListener('click', searchMeals);

