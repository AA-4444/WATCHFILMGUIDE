/* LANGUAGE STORAGE */

let lang = localStorage.getItem("lang") || "en"


/* TRANSLATIONS */

const i18n = {

en:{
top10:"Top 10",
newest:"Newest",
genres:"Genres",
years:"Years",

viewAll:"View All",

search:"Search movies...",

random:"Random Movie",
all:"All Movies",

year:"Year",
runtime:"Runtime",
rating:"Rating",
countries:"Countries",

moreMovies:"More Movies",
privacy:"Privacy Policy",
terms:"Terms of Use",
cookies:"Cookie Policy",
contacts:"Contacts"
},

ua:{
top10:"Топ 10",
newest:"Нові",
genres:"Жанри",
years:"Роки",

viewAll:"Дивитись всі",

search:"Пошук фільмів...",

random:"Випадковий фільм",
all:"Всі фільми",

year:"Рік",
runtime:"Тривалість",
rating:"Рейтинг",
countries:"Країни",

moreMovies:"Інші фільми",
privacy:"Політика конфіденційності",
terms:"Умови використання",
cookies:"Політика cookies",
contacts:"Контакти"
}

}



/* TRANSLATE FUNCTION */

function translate(){

const t = i18n[lang]

/* SECTION TITLES */

const titles = document.querySelectorAll(".section-title")

if(titles[0]) titles[0].innerText = t.top10
if(titles[1]) titles[1].innerText = t.newest
if(titles[2]) titles[2].innerText = t.genres
if(titles[3]) titles[3].innerText = t.years


/* VIEW ALL BUTTONS */

document.querySelectorAll(".view-all").forEach(btn=>{
btn.innerText = t.viewAll
})


/* SEARCH */

const search = document.querySelector(".search")
if(search) search.placeholder = t.search

const mobileSearch = document.querySelector(".mobile-search")
if(mobileSearch) mobileSearch.placeholder = t.search


/* HERO BUTTONS */

const randomBtn = document.querySelector(".btn-primary")
if(randomBtn) randomBtn.innerText = t.random

const allBtn = document.querySelector(".btn-secondary")
if(allBtn) allBtn.innerText = t.all


/* MOVIE PAGE */

document.querySelectorAll("[data-i18n]").forEach(el=>{
const key = el.dataset.i18n
if(t[key]) el.innerText = t[key]
})

}



/* LANGUAGE BUTTON */

document.addEventListener("click",e=>{

if(e.target.classList.contains("lang")){

lang = lang === "en" ? "ua" : "en"

localStorage.setItem("lang",lang)

e.target.innerText = lang.toUpperCase()

translate()

}

})



/* INIT */

window.addEventListener("DOMContentLoaded",()=>{

const langBtn = document.querySelector(".lang")

if(langBtn){
langBtn.innerText = lang.toUpperCase()
}

translate()

})