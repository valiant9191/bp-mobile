const lang = navigator.language || navigator.userLanguage;
let urlJson;
let loaded

if (lang.includes("ru")) {
    urlJson = "../Localizations/ru.json";
} else if (lang.includes("fr")) {
    urlJson = "../Localizations/fr.json";
} else if (lang.includes("es")) {
    urlJson = "../Localizations/es.json";
} else if (lang.includes("ja")) {
    urlJson = "../Localizations/js.json";
} else if (lang.includes("nl")) {
    urlJson = "../Localizations/nl.json";
} else if (lang.includes("zh")) {
    urlJson = "../Localizations/zh.json";
} else {
    urlJson = "../Localizations/en.json";
}

fetch(urlJson)
    .then((response) => {
        return response.json();
    })
    .then(function(data) {
        let dataText = data;

    });
// main html container 
const main = document.querySelector('#main')
    // form activeOrNot
let active = true;
let linkSub1 = 'https://apple.com/';
let linkSub2 = 'https://google.com/';


const form = document.querySelector("#form");

function selectUrl() {
    location.href = (active ? linkSub1 : linkSub2)
}

function addFormHtml() {
    form.innerHTML = `
                <div class="sub" >
                    <div class="sub-item ${active?'active':null}" id="sub1">
                        <div>
                            <h3>Monthly</h3>
                            <h2><strong>$9.99</strong><br> </h2>
                            <h4>per month</h4>
                        </div>
                        <h4 class="item-bg">3 days free!</h4>
                        <h5><strong>$9.99</strong> month</h5>
                        <div class="transparent" id="sub1"></div>
                    </div>
                    <div class="sub-item sub-item-annualy ${!active?'active':null}" id='sub2'>
                        <div>
                            <h3>annually</h3>
                            <h2><strong>$9.99</strong><br> </h2>
                            <h4>per month</h4>
                        </div>
                        <h4 class="item-bg">3 days free!</h4>
                        <h5><strong>$9.99</strong> month</h5>
                        <div class="transparent" id='sub2'></div>
                    </div>
                </div>
                <button class="btn" id="btn">Continue</button>`;
}
addFormHtml()

form.addEventListener("click", (e) => {
    if (e.target.id === "sub1") {
        active = true, addFormHtml()
    } else if (e.target.id === "sub2") {
        active = false, addFormHtml()
    } else if (e.target.id === "btn") { selectUrl() }
})