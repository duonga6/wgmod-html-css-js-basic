const gameItems = document.getElementsByClassName('games-item'); // list game item

const gamesListData = [ // local game data
    {
        class: 'wot',
        name: 'WORLD OF TANKS',
        desc: 'Join the 110-million strong army of devoted fans and take part in epic tank battles with over 600 vehicles to choose from.',
        link: ['Game Website', 'Forum', 'Player Support','Clans', 'Mod Hub', 'WoT Assistant (iOS)', 'WoT Assistant (Android)'],
        imgUrlIcon: './assets/img/game-icon/wot-big-icon.png',
        imgUrlBg: './assets/img/game-background/wot.jpg',
        color: '#f25322',
        platform: ['WINDOWS', 'MAC']
    },
    {
        class: 'wow',
        name: 'WORLD OF WARSHIPS',
        desc: 'Immerse yourself in the world of epic naval warfare and command legendary warships from the early 20th century in a free-to-play massively multiplayer online game.',
        link: ['Game Website', 'Forum', 'Player Support', 'Invite a Friend'],
        imgUrlIcon: './assets/img/game-icon/wow-big-icon.png',
        imgUrlBg: './assets/img/game-background/wow.jpg',
        color: '#00cbcd',
        platform: ['WINDOWS']
    },
    {
        class: 'wotc',
        name: 'WORLD OF TANKS MODERN ARMOR',
        desc: 'Wage war in the premier free-to-play team-based action game dedicated to armored combat on game consoles.',
        link: ['Game Website', 'Player Support'],
        imgUrlIcon: './assets/img/game-icon/wotc-big-icon.png',
        imgUrlBg: './assets/img/game-background/wotc.jpg',
        color: '#ffd101',
        platform: ['XBOX ONE', 'XBOX SERIES X', 'PLAYSTATION 4', 'PLAYSTATION 5']
    },
    {
        class: 'wowl',
        name: 'WORLD OF WARSHIPS: LEGENDS',
        desc: `Experience epic naval action in World of Warships: Legends, an MMO console game that puts you on a course to master the seas. Sail on history's greatest warships, helmed by legendary Commanders!`,
        link: ['Game Website', 'Player Support'],
        imgUrlIcon: './assets/img/game-icon/wowl-big-icon.png',
        imgUrlBg: './assets/img/game-background/wowl.jpg',
        color: '#1e5aff',
        platform: ['XBOX ONE', 'XBOX SERIES X', 'PLAYSTATION 4', 'PLAYSTATION 5']
    },
    {
        class: 'wotb',
        name: 'WORLD OF TANKS BLITZ',
        desc: 'Choose the new absolutely free-to-play massively multiplayer online game and get involved in tank battles with vehicles from the middle of the 20th century using your mobile device.',
        link: ['Game Website', 'Forum', 'Player Support'],
        imgUrlIcon: './assets/img/game-icon/wotb-big-icon.png',
        imgUrlBg: './assets/img/game-background/wotb.jpg',
        color: '#f49511',
        platform: ['WINDOWS', 'ANDROID', 'IOS', 'MAC']
    },
    {
        class: 'wowp',
        name: 'WORLD OF WARPLANES',
        desc: 'A global update of the free-to-play MMO game about the golden era of military aviation. Join breathtaking air battles for control of the battlefield with legendary planes from the 20th century.',
        link: ['Game Website', 'Forum', 'Player Support', 'Clans'],
        imgUrlIcon: './assets/img/game-icon/wowp-big-icon.png',
        imgUrlBg: './assets/img/game-background/wowp.jpg',
        color: '#00a2e3',
        platform: ['WINDOWS']
    },
    {
        class: 'wowb',
        name: 'WORLD OF WARSHIPS BLITZ',
        desc: 'Free-to-play mobile action MMO that plunges you into intense naval combat of the first half of the 20th century.',
        link: ['Game Website', 'Player Support', 'Install the game on iOS', 'Install the game on Android'],
        imgUrlIcon: './assets/img/game-icon/wowb-big-icon.png',
        imgUrlBg: './assets/img/game-background/wowb.jpg',
        color: '#00b4b9',
        platform: ['ANDROID', 'IOS']
    },
    {
        class: 'moo',
        name: 'MASTER OF ORION',
        desc: 'The iconic 4X strategy gameplay of Explore, Expand, Exploit and Exterminate that formed the blueprint for a whole generation of 4X games has been resurrected and upgraded.',
        link: ['Game Website', 'Forums','Player Support'],
        imgUrlIcon: './assets/img/game-icon/moo-big-icon.png',
        imgUrlBg: './assets/img/game-background/moo.jpg',
        color: '#8201ff',
        platform: ['WINDOWS', 'MAC']
    }
];

const listPlatform = [ // Platform for game
    {
        name: 'WINDOWS',
        element: `<li class="game-platform-item"><i class="fa-brands fa-windows game-platform-icon"></i>WINDOWS</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-windows games-mobile-platform-icon"></i>WINDOWS</li>`
    },
    {
        name: 'MAC',
        element: `<li class="game-platform-item"><i class="fa-brands fa-apple game-platform-icon"></i>MAC</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-apple games-mobile-platform-icon"></i>MAC</li>`
    },
    {
        name: 'XBOX ONE',
        element: `<li class="game-platform-item"><i class="fa-brands fa-xbox game-platform-icon"></i>XBOX ONE</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-xbox games-mobile-platform-icon"></i>XBOX ONE</li>`
    },
    {
        name: 'XBOX SERIES X',
        element: `<li class="game-platform-item"><i class="fa-brands fa-xbox game-platform-icon"></i>XBOX SERIES X</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-xbox games-mobile-platform-icon"></i>XBOX SERIES X</li>`
    },
    {
        name: 'PLAYSTATION 4',
        element: `<li class="game-platform-item"><i class="fa-brands fa-playstation game-platform-icon"></i>PLAYSTATION 4</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-playstation games-mobile-platform-icon"></i>PLAYSTATION 4</li>`
    },
    {
        name: 'PLAYSTATION 5',
        element: `<li class="game-platform-item"><i class="fa-brands fa-playstation game-platform-icon"></i>PLAYSTATION 5</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-playstation games-mobile-platform-icon"></i>PLAYSTATION 5</li>`
    },
    {
        name: 'ANDROID',
        element: `<li class="game-platform-item"><i class="fa-brands fa-android game-platform-icon"></i>ANDROID</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-android games-mobile-platform-iconn"></i>ANDROID</li>`
    },
    {
        name: 'IOS',
        element: `<li class="game-platform-item"><i class="fa-brands fa-apple game-platform-icon"></i>MAC</li>`,
        elementMB: `<li class="games-mobile-platform-item"><i class="fa-brands fa-apple games-mobile-platform-icon"></i>MAC</li>`
    }
]


var gamesList = document.getElementsByClassName('games-item');
// set color for --active class
const setColor = () => {
    Array.from(gamesList).forEach((current) => {
        const className = current.classList[2];
        if (className != undefined) {
            gamesListData.forEach((item) => {
                if (`${item.class}--active` == className) {
                    Array.from(document.querySelectorAll(`.${className} .game-icon-fill`)).forEach((fills) => {
                        fills.style.fill = item.color;
                    })
                    document.querySelector(`.${className} .games-name`).style.color = item.color;
                    Array.from(document.querySelectorAll('.game-desc-name')).forEach((desc) => {
                        desc.style.color = item.color;
                    })
                }
            })
        }
    })
}

setColor();

for (let i = 0; i < gamesList.length; i++) {

    // hover in text and color icon
    gamesList[i].addEventListener("mouseenter", function() {
        gamesListData.forEach((current) => {
            if (current.class == gamesList[i].classList[1]) {
                // color for icon:
                Array.from(document.querySelectorAll(`.${gamesList[i].classList[1]} .game-icon-fill`)).forEach((item) => {
                    item.style.fill = current.color;
                })
                //color for text
                document.querySelector(`.${gamesList[i].classList[1]} .games-name`).style.color = current.color;
            }

        })
    })

    // hover out text and color icon
    gamesList[i].addEventListener("mouseleave", function() {
        if (!gamesList[i].classList.contains(`${gamesList[i].classList[1]}--active`)) {
            // reset color icon
            Array.from(document.querySelectorAll(`.${gamesList[i].classList[1]} .game-icon-fill`)).forEach((item) => {
                item.style.fill = "#a6a6a7";
            })
            // reset color text
            document.querySelector(`.${gamesList[i].classList[1]} .games-name`).style.color = "#a6a6a7";
        }
    })



    gamesList[i].addEventListener("click", function() {
        // set color for active item
        Array.from(gamesList).forEach((current) => {
            var className = current.classList[2];
            // if item has --active => != undefined: reset color icon and text
            if (className != undefined) {
                current.classList.remove(className);
                Array.from(document.querySelectorAll(`.${current.classList[1]} .game-icon-fill`)).forEach((fills) => {
                    fills.style.fill = "#A6A6A7";
                })
                document.querySelector(`.${current.classList[1]} .games-name`).style.color = "#A6A6A7";
                Array.from(document.querySelectorAll('.game-desc-name')).forEach((desc) => {
                    desc.style.color =  "#A6A6A7";
                })
            }
        })

        // add --active for this click element
        gamesList[i].classList.add(`${gamesList[i].classList[1]}--active`);
        // set color for --active
        setColor();
        
        // change content and color of content
        gamesListData.forEach(function(current) {
            if (gamesList[i].classList.contains(current.class)) {
                // Set text
                document.querySelector('.game-desc .game-desc-name').innerText = current.name;
                document.querySelector('.game-desc .game-desc-child').innerText = current.desc;
                const gameLinkList = document.querySelector('.game-link-list');
                gameLinkList.innerHTML = "";
                current.link.forEach(function(item) {
                    gameLinkList.innerHTML += `<li class="game-link-item"><a href="" class="game-item-link">${item}</a></li>`;
                })
                document.querySelector('.games-menu').style.backgroundImage = `url(${current.imgUrlBg})`;
                document.querySelector('.game-home-icon').setAttribute('src', `${current.imgUrlIcon}`);
                document.querySelector('.game-desc-name').style.filter = current.filter;

                // Set platfrom
                const list = document.querySelector('.game-desc-platform');
                list.innerHTML = '';
                current.platform.forEach((item) => {
                    listPlatform.forEach((platforms) => {
                        if (item == platforms.name)
                            list.innerHTML += platforms.element;
                    })
                })
            }
        })
    });
}

const openMenu = (element) => {
    element.classList.add('is--open');
}


const closeMenu = (element) => {
    element.classList.remove('is--open');
}

const menuGameCheck = document.querySelector('.games-menu-open'); // check for game-open <item on nav list>
const menuServiceCheck = document.querySelector('.services-menu-open'); // check for service-open <item on nav list>
const menuGames = document.querySelector('.games-menu'); // game menu conainter
const menuServices = document.querySelector('.services-menu'); // services container
const menuGamesMobile = document.querySelector('.games-menu-mobile'); // game menu conainter mobile
const menuServicesMobile = document.querySelector('.services.games-menu-mobile'); // services menu conainter mobile

// only one of two is open

menuGameCheck.addEventListener('click', function() { //click check for game-open
    
    if (menuServices.classList.contains('is--open')) { // if menu services is open -> close
        menuServices.classList.remove('is--open'); // close services first
        menuServiceCheck.classList.remove('menu--active'); // remove --active for services menu( opacity: < 1 )
    }
    menuGames.classList.toggle('is--open'); // open || close 
    menuGameCheck.classList.toggle('menu--active'); //  add --active for game menu ( opacity = 1 )

    // Menu mobile
    if (menuServicesMobile.classList.contains('is--open')) // if services is open -> close
        menuServicesMobile.classList.remove('is--open');
    menuGamesMobile.classList.toggle('is--open');
})

menuServiceCheck.addEventListener('click', function() { // Same menuGameCheck
    if (menuGames.classList.contains('is--open')) {
        menuGames.classList.remove('is--open');
        menuGameCheck.classList.remove('menu--active');
    }
    menuServices.classList.toggle('is--open');
    menuServiceCheck.classList.toggle('menu--active');

    if (menuGamesMobile.classList.contains('is--open'))
        menuGamesMobile.classList.remove('is--open');
    menuServicesMobile.classList.toggle('is--open');
})


const servicesListData = [ // local services data
    {
        class: 'ps',
        name: 'PREMIUM SHOP',
        desc: 'Purchase unique vehicles, in-game currency and Premium Account in our shop to earn more experience and credits per battle and open up more options in our games.',
        link: ['Website', 'Activate Wargaming Code'],
        UrlBg: './assets/img/services-background/premiumshop.jpg',
        UrlIcon: './assets/img/services-icon/premiumshop.png'
    },
    {
        class: 'gm',
        name: 'GLOBAL MAP',
        desc: 'Fight for provinces on the Global Map with your brothers-in-arms to add gold to your clan Treasury and earn unique vehicles.',
        link: ['Go to Global Map', 'Guide', 'About Global Map'],
        UrlBg: './assets/img/services-background/globalmap.jpg',
        UrlIcon: './assets/img/services-icon/globalmap.png'
    },
    {
        class: 'cp',
        name: 'CLAN PORTAL',
        desc: 'Join a clan and take your teamwork skills to the next level. Discover new game modes, and complete battle missions to earn more gold and receive unique vehicles.',
        link: ['Clans in World of Tanks', 'Clans in World of Warplanes'],
        UrlBg: './assets/img/services-background/clan.jpg',
        UrlIcon: './assets/img/services-icon/clan.png'
    },
    {
        class: 'wgc',
        name: 'WARGAMING.NET GAME CENTER',
        desc: 'WGC is our game launcher app that lets you keep all your Wargaming games in one place, read up on the latest news about upcoming features, watch videos, and find dynamite deals with ease!',
        link: ['Website', 'Player Support'],
        UrlBg: './assets/img/services-background/wgc.jpg',
        UrlIcon: './assets/img/services-icon/wgc.png'
    },
    {
        class: 'pss',
        name: 'PLAYER SUPPORT',
        desc: 'If you are facing problems or have questions about our games, get in touch — we are ready to help!',
        link: ['Website'],
        UrlBg: './assets/img/services-background/playersupport.jpg',
        UrlIcon: './assets/img/services-icon/playersupport.png'
    },
    {
        class: 'wiki',
        name: 'WIKI',
        desc: 'Wiki is a global base containing detailed descriptions of military machines and useful references for those who wish to succeed in Wargaming titles. Gather new knowledge and share it with others!',
        link: ['Website'],
        UrlBg: './assets/img/services-background/wiki.jpg',
        UrlIcon: './assets/img/services-icon/wiki.png'
    }
]


const servicesList = document.querySelectorAll('.services-item');  // list services item
for (let i = 0; i < servicesList.length; i++) {
    servicesList[i].addEventListener('click', function() {
        if (!servicesList[i].classList.contains('services--active')) { // If this item is not --active -> active, change content. remove --active other item
            // remove --active other
            Array.from(servicesList).forEach((current) => {
                if (current.classList.contains('services--active'))
                    current.classList.remove('services--active');
            })
            // set --active for this item
            servicesList[i].classList.add('services--active');


            const currentClass = servicesList[i].classList[1]; // get type of services: ps, gb, cp, ...
            
            // change content of services
            servicesListData.forEach((current) => {
                if (current.class == currentClass) {
                    document.querySelector('.services-icon').setAttribute('src', `${current.UrlIcon}`);
                    document.querySelector('.services-menu').style.backgroundImage = `url(${current.UrlBg})`;
                    document.querySelector('.services-desc-name').innerText = current.name;
                    document.querySelector('.services-desc-child').innerText = current.desc;

                    const linkList = document.querySelector('.services-link-list');
                    linkList.innerHTML = "";
                    current.link.forEach((item) => {
                        linkList.innerHTML += `<li class="services-link-item"><a href="" class="services-item-link">${item}</a></li>`
                    })
                }
            })

        }
    })
}

// underline color for active on menu bottom
const navBottom = document.querySelectorAll('.bot-nav-item');

for (let i = 1; i < navBottom.length; i++) {
    navBottom[i].addEventListener('click', function() {
        Array.from(navBottom).forEach((current) => {
            current.classList.remove('bot-nav-item--active');
        })
        if (!navBottom[i].classList.contains('bot-nav-item--active'));
            navBottom[i].classList.add('bot-nav-item--active')
    })
}

// open-close language list
const openLangList = document.querySelector('.mod-desc-lang');
openLangList.addEventListener('click', function() {
    openLangList.classList.toggle('mod-desc-lang--active');
})

// open-close language list footer
const openFooterLangList = document.querySelector('.footer-lang-choose');
openFooterLangList.addEventListener('click',() => {
    openFooterLangList.classList.toggle('footer-lang-choose--active')
})

// set color selected category
const listCaterory = document.querySelectorAll('.mod-categories-item'); // list item category
Array.from(listCaterory).forEach((current) => {
    current.addEventListener('click', function() {
        current.classList.toggle('mod-categories-item--active');
    })
})


// open search for tablet
const openInputTablet = document.querySelector('.open-input-tablet');
openInputTablet.addEventListener('click', () => {
    document.querySelector('.bot-input').classList.toggle('bot-input--active');
    openInputTablet.classList.add('open-input-tablet--active');
})

// close search for table
const closeInputTablet = document.querySelector('.close-input-table');
closeInputTablet.addEventListener('click', () => {
    document.querySelector('.bot-input').classList.remove('bot-input--active');
    openInputTablet.classList.remove('open-input-tablet--active');
})

// scroll menu Categories 
const menuDESC = document.querySelector('.mod-categories-container');
let menuDESC_isDown = false; // ktra click chuột
let menuDESC_startX; // Tọa độ của chuột - Tọa độ cạnh trái của menu
let menuDESC_scollLeft; // Giá trị px menu đã cuộn mặc định = 0

menuDESC.addEventListener('mousedown', (e) => {
    menuDESC_isDown = true;  // Đã click
    menuDESC_startX = e.pageX - menuDESC.offsetLeft; 
    menuDESC_scollLeft = menuDESC.scrollLeft;
});

menuDESC.addEventListener('mouseleave', () => {
    menuDESC_isDown = false;
});

menuDESC.addEventListener('mouseup', () => {
    menuDESC_isDown = false;
});

menuDESC.addEventListener('mousemove', (e) => {
    if (!menuDESC_isDown)
        return;
    e.preventDefault();
    const x = e.pageX - menuDESC.offsetLeft;  // Tọa độ của chuột - Tọa độ cạnh trái của menu thay đổi khi click chuột
    const walk = x - menuDESC_startX; // quãng đường di chuyển của chuột
    menuDESC.scrollLeft = menuDESC_scollLeft - walk; // cuộn menu theo khoảng cách chuột đã di chuyển
});


// Scroll for game and service list
const gameScroll = document.querySelector('.games-list-container');
const gameArrowLeft = document.querySelector('.games-arrow-nav.to-left'); // click to scroll -> left
const gameArrowRight = document.querySelector('.games-arrow-nav.to-right'); // click to scroll -> right

const serviceScoll = document.querySelector('.services-list-container');
const serviceArrowLeft = document.querySelector('.services-arrow-nav.to-left');
const serviceArrowRight = document.querySelector('.services-arrow-nav.to-right');

let gameScroll_isDown = false; // ktra click chuột
let gameScroll_startX; // Tọa độ của chuột - Tọa độ cạnh trái của menu
let gameScroll_scollLeft; // Giá trị px menu đã cuộn mặc định = 0

gameScroll.addEventListener('mousedown', (e) => {
    gameScroll_isDown = true;  // Đã click
    gameScroll_startX = e.pageX - gameScroll.offsetLeft; 
    gameScroll_scollLeft = gameScroll.scrollLeft;
});

gameScroll.addEventListener('mouseleave', () => {
    gameScroll_isDown = false;
});

gameScroll.addEventListener('mouseup', () => {
    gameScroll_isDown = false;
});

gameScroll.addEventListener('mousemove', (e) => {
    if (!gameScroll_isDown)
        return;
    e.preventDefault();
    const x = e.pageX - gameScroll.offsetLeft;  // Tọa độ của chuột - Tọa độ cạnh trái của menu thay đổi khi click chuột
    const walk = x - gameScroll_startX; // quãng đường di chuyển của chuột
    gameScroll.scrollLeft = gameScroll_scollLeft - walk; // cuộn menu theo khoảng cách chuột đã di chuyển
    if (gameScroll.scrollLeft == 0) { // Nếu đang đang ở đầu danh sách ẩn nút kéo sang trái
        gameArrowRight.classList.add('games-arrow-nav--active');
        gameArrowLeft.classList.remove('games-arrow-nav--active');
    }
    if (gameScroll.scrollLeft == gameScroll.scrollWidth - gameScroll.clientWidth) { // Nếu đang ở cuối danh sách ẩn nút kéo sang phải
        gameArrowLeft.classList.add('games-arrow-nav--active');
        gameArrowRight.classList.remove('games-arrow-nav--active');
    }
});

gameArrowLeft.addEventListener('click', () => { // CLick mũi tên kéo menu sang trái
    gameArrowRight.classList.add('games-arrow-nav--active');
    gameArrowLeft.classList.remove('games-arrow-nav--active');
    gameScroll.style.scrollBehavior = 'smooth';
    gameScroll.scrollLeft = 0;
    gameScroll.style.scrollBehavior = 'auto';
})

gameArrowRight.addEventListener('click', () => { // phải
    gameArrowLeft.classList.add('games-arrow-nav--active');
    gameArrowRight.classList.remove('games-arrow-nav--active');
    gameScroll.style.scrollBehavior = 'smooth';
    gameScroll.scrollLeft = gameScroll.scrollWidth - gameScroll.clientWidth;
    gameScroll.style.scrollBehavior = 'auto';
})


let serviceScoll_isDown = false;
let serviceScoll_startX;
let serviceScoll_scollLeft;

serviceScoll.addEventListener('mousedown', (e) => {
    serviceScoll_isDown = true;
    serviceScoll_startX = e.pageX - serviceScoll.offsetLeft;
    serviceScoll_scollLeft = serviceScoll.scrollLeft;
})

serviceScoll.addEventListener('mouseleave', () => {
    serviceScoll_isDown = false;
})

serviceScoll.addEventListener('mouseup', () => {
    serviceScoll_isDown = false;
})

serviceScoll.addEventListener('mousemove', (e) => {
    if (!serviceScoll_isDown)
        return;
    const x = e.pageX - serviceScoll.offsetLeft;
    const walk = x - serviceScoll_startX;
    serviceScoll.scrollLeft = serviceScoll_scollLeft - walk;
    if (serviceScoll.scrollLeft == 0) {
        serviceArrowRight.classList.add('services-arrow-nav--active');
        serviceArrowLeft.classList.remove('services-arrow-nav--active');
    }
    if (serviceScoll.scrollLeft == serviceScoll.scrollWidth - serviceScoll.clientWidth) {
        serviceArrowLeft.classList.add('services-arrow-nav--active');
        serviceArrowRight.classList.remove('services-arrow-nav--active');
    }
})

serviceArrowLeft.addEventListener('click', () => {
    serviceArrowRight.classList.add('services-arrow-nav--active');
    serviceArrowLeft.classList.remove('services-arrow-nav--active');
    serviceScoll.style.scrollBehavior = 'smooth';
    serviceScoll.scrollLeft = 0;
    serviceScoll.style.scrollBehavior = 'auto';
})

serviceArrowRight.addEventListener('click', () => {
    serviceArrowLeft.classList.add('services-arrow-nav--active');
    serviceArrowRight.classList.remove('services-arrow-nav--active');
    serviceScoll.style.scrollBehavior = 'smooth';
    serviceScoll.scrollLeft = serviceScoll.scrollWidth - serviceScoll.clientWidth;
    serviceScoll.style.scrollBehavior = 'auto';
});



// Position cho menu trái mobile

const navMobile = document.querySelector('.nav-mobile');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0)
        navMobile.style.top = 0;
    else
        navMobile.style.top = '36px'
})


// Open item menu game mobile

const menuGameMobile = document.querySelectorAll('.games-mobile-item:not(.services)');

function disableOpenGameMobile() { // đóng và reset màu
    Array.from(menuGameMobile).forEach((current) => {
        if (current.classList.contains('games-mobile-item--active')) {
            current.classList.remove('games-mobile-item--active')
            document.querySelector(`.${current.classList[0]}.${current.classList[1]} .games-mobile-name`).style.color = 'rgba(255, 255, 255, 0.6)';
        }
    })
}

function generateGameMobileContent(current) {
    let className = current.classList[1];
    let content = ``;
    gamesListData.forEach((item) => {
        if (item.class == className) {
            content = `         <div class="games-mobile-content-container">
            <div class="games-mobile-bg">
                <a href="#" class="games-mobile-home-link">
                    <img src="${item.imgUrlIcon}" alt="" class="games-mobile-icon">
                </a>
            </div>
            <div class="games-mobile-main-content">
                <div class="games-mobile-desc">
                    <h3 class="games-mobile-content-heading" style="color: ${item.color}">${item.name}</h3>
                    <p class="games-mobile-content-desc">${item.desc}</p>
                    <ul class="games-mobile-desc-platform">
                        ${generateListPlaformMobile(item)}
                    </ul>
                </div>
                <div class="games-mobile-link">
                    <ul class="games-mobile-link-list">
                        <h3 class="games-mobile-content-heading" style="color: ${item.color}">LINK</h3>
                        ${generateListLinkMobile(item)}
                    </ul>
                </div>
            </div>
        </div>`;
        }
    })
    return content;
}

function generateListPlaformMobile(item) {
    let result = ``;
    item.platform.forEach((plf) => {
        listPlatform.forEach((LPLF) => {
            if (plf == LPLF.name) {
                result += `${LPLF.elementMB}`;
            }
        })
    })
    return result;
};

function generateListLinkMobile(item) {
    let result = ``;
    item.link.forEach((lk) => {
        result += `<li class="games-mobile-link-item">
        <a href="#" class="games-mobile-link-link">
            ${lk}
        </a>
    </li>`;
    })
    return result;
}

Array.from(menuGameMobile).forEach((current) => {
    current.addEventListener('click', () => {
        if (!current.classList.contains('games-mobile-item--active')) { // Nếu nó chưa được mở
            disableOpenGameMobile(); // Đóng tất cả
            current.classList.add('games-mobile-item--active'); // Mở nó
            if (document.querySelector(`.${current.classList[0]}.${current.classList[1]} .games-mobile-content-container`) == null) // Nếu chưa có nội dung, tạo nội dung
                current.innerHTML += generateGameMobileContent(current);
            gamesListData.forEach((item) => { // Thêm background và màu chữ
                if (item.class == current.classList[1]) {
                    let myClass = document.querySelector(`.${current.classList[0]}.${current.classList[1]} .games-mobile-item-bg`);
                    myClass.style.backgroundImage = `url(${item.imgUrlBg})`;
                    document.querySelector(`.${current.classList[0]}.${current.classList[1]} .games-mobile-name`).style.color = `${item.color}`
                }
            })
        }
        else { // nó mở rồi thì đóng lại
            disableOpenGameMobile();
        }
    })
})


// Close menu mobile + services
const closeGameMobile = document.querySelectorAll('.games-mobile-close-icon');
Array.from(closeGameMobile).forEach((currnet) => {
    currnet.addEventListener('click', () => {
        document.querySelector('.games-menu-mobile').classList.remove('is--open');
        document.querySelector('.services.games-menu-mobile').classList.remove('is--open');
        menuServiceCheck.classList.remove('menu--active');
        menuGameCheck.classList.remove('menu--active');
    })
})

const menuServiceMobile = document.querySelectorAll('.services.games-mobile-item');

function disableOpenServiceMobile() {
    Array.from(menuServiceMobile).forEach((current) => {
        current.classList.remove('games-mobile-item--active');
    })
}

function generateServiceMobileContent(current) {
    let className = current.classList[2];
    let result = ``;
    servicesListData.forEach((item) => {
        if (className == item.class) {
            result = `         <div class="games-mobile-content-container">
            <div class="games-mobile-bg">
                <a href="#" class="games-mobile-home-link">
                    <img src="${item.UrlIcon}" alt="" class="games-mobile-icon">
                </a>
            </div>
            <div class="games-mobile-main-content">
                <div class="games-mobile-desc">
                    <h3 class="games-mobile-content-heading" style="color: var(--services-hover)">${item.name}</h3>
                    <p class="games-mobile-content-desc">${item.desc}</p>
                </div>
                <div class="games-mobile-link">
                    <ul class="games-mobile-link-list">
                        <h3 class="games-mobile-content-heading" style="color: var(--services-hover)">LINK</h3>
                        ${generateServiceMobileLink(item)}
                    </ul>
                </div>
            </div>
        </div>`;
        }
    })
    return result;
}

function generateServiceMobileLink(item) {
    let result = ``;
    item.link.forEach((aa) => {
        result += `<li class="games-mobile-link-item">
        <a href="#" class="games-mobile-link-link">
            ${aa}
        </a>
    </li>`
    })
    return result;
}

Array.from(menuServiceMobile).forEach((current) => {
    current.addEventListener('click', () => {
        if (!current.classList.contains('games-mobile-item--active')) {
            disableOpenServiceMobile();
            current.classList.add('games-mobile-item--active');
            if (document.querySelector(`.${current.classList[1]}.${current.classList[2]} .games-mobile-content-container`) == null)
                current.innerHTML += generateServiceMobileContent(current);
            servicesListData.forEach((item) => {
                if (item.class == current.classList[2])
                    document.querySelector(`.${current.classList[1]}.${current.classList[2]} .games-mobile-item-bg`).style.backgroundImage = `url(${item.UrlBg})`;
            })
            
        } else {
            disableOpenServiceMobile();
        }
    })
})

var openNavMobile = document.querySelector('.nav-open-bar');

openNavMobile.addEventListener('click', () => {
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile--active');
    openNavMobile.classList.toggle('nav-open-bar--active');
})