const lang = navigator.language || navigator.userLanguage;
let urlJson;
const main = document.getElementById('main');
let dataText = {};
let fontSizeRu = `line-height: 42px; font-size: 36px;`;
let fontSizeRu2 = ` font-size: 15.4px;`;
// let hrefT = window.location.href
// console.log(hrefT)
if (lang.includes('ru')) {
    urlJson = '../Localizations/ru.json';
    fontSizeRu = `line-height: 36px; font-size: 28px;`;
    fontSizeRu2 = ` font-size: 13.4px;`;
} else if (lang.includes('fr')) {
    urlJson = '../Localizations/fr.json';
    fontSizeRu = `line-height: 42px; font-size: 21px;`;
    fontSizeRu2 = ` font-size: 13px;`;
} else if (lang.includes('es')) {
    urlJson = '../Localizations/es.json';
    fontSizeRu = `line-height: 42px; font-size: 26px;`;

} else if (lang.includes('ja')) {
    urlJson = '../Localizations/ja.json';
} else if (lang.includes('nl')) {
    urlJson = '../Localizations/nl.json';
    fontSizeRu = `line-height: 36px; font-size: 30px;`;

} else if (lang.includes('zh')) {
    urlJson = '../Localizations/zh.json';
} else {
    urlJson = '../Localizations/en.json';
}

await fetch(urlJson)
    .then((response) => {
        return response.json();
    })
    .then(function(data) {
        dataText = data
    });

// form activeOrNot
let active = true;
let linkSub1 = 'https://apple.com/';
let linkSub2 = 'https://google.com/';
addFormHtml(dataText)
const titleFont = document.querySelector('.title-h1')
const titleFont2 = document.querySelector('.item-bg')

function selectUrl() {
    location.href = (active ? linkSub1 : linkSub2)
}

const form = document.querySelector('#main');
form.addEventListener('click', (ev) => activeOrNot(ev))
form.removeEventListener('click', (ev) => activeOrNot(ev))


function activeOrNot(e) {
    if (e.target.id === 'sub1') {
        active = true, addFormHtml(dataText)
    } else if (e.target.id === 'sub2') {
        active = false, addFormHtml(dataText)
    } else if (e.target.id === 'btn') { selectUrl() }

}
// font ru.json  


function addFormHtml(db) {

    main.innerHTML = `
    <div class="wrapper-main">
    <div class="header">
        <div class="close" href='#'></div>
        <div class="restore" href='#'>${db[`Restore`]}</div>
    </div>
    <div class="title">
        <h1 class="title-h1" style="${fontSizeRu}">${db[`Unlimited Access<br>to All Features`]} </h1>
    </div>
    <div class="content">
        <ul>
            <li class="content-item"> <img src="./Assets/svg/content/unlimitedDocs.svg" alt="unlimitedDocs" /> ${db[`Unlimited documents`]}</li>
            <li class="content-item"> <img src="./Assets/svg/content/export.svg" alt="export" /> ${db[`Count mode`]}
            </li>
            <li class="content-item"> <img src="./Assets/svg/content/noAds.svg" alt="noAds" /> ${db[`Text recognition (OCR)`]}
            </li>
        </ul>
    </div>
    <div class="sub-form" id="form">
        <div class="sub" >
            <div class="sub-item ${active&&'active'}" id="sub1">
                <div>
                    <h2>${db[`Monthly`]}</h2>
                    <h3 class="price">${db[`<strong>{{price}}</strong><br>per month`]} </h3>                            
                </div>
                <h4 class="item-bg" style="${fontSizeRu2}">${db[`3 DAYS FREE`]}</h4>
                <h5>${db[`{{price}}/month`]}</h5>
                <div class="transparent" id="sub1"></div>
            </div>
            <div class="sub-item ${db[`-83%`]&&'sub-item-annualy'} ${!active&&'active'}" id='sub2'>
                <div>
                    <h2>${db[`Annually`]}</h2>
                    <h4>${db[`<strong>{{price}}</strong><br>per year`]} </h4>
                </div>
                <h4 class="item-bg" style="${fontSizeRu2}">${db[`MOST POPULAR`]}</h4>
                <h5>${db[`<strong>{{price}}</strong><br>per year`]}</h5>
                ${db[`-83%`]&&`<div class="discount">${db[`-83%`]}</div>`}
                <div class="transparent" id='sub2'></div>
            </div>
        </div>
        <button class="btn" id="btn">${db[`Continue`]}</button>
    </div>
    <div class="footer">
        <p>${db[`Auto-renewable. Cancel anytime.`]}</p>
        <div class="sub-footer">
            <p><a href="#">${db[`Terms of Use`]}</a></p>
            <p><a href="#">${db[`Privacy Policy`]}</a></p>
        </div>
    </div>

</div>
    `
    ;
}