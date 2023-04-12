var gameItems = document.getElementsByClassName('games-item');
// console.log(gameItems);

var gamesListData = [
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
    }
];

var listPlatform = [
    {
        name: 'WINDOWS',
        element: `<li class="game-platform-item"><i class="fa-brands fa-windows game-platform-icon"></i>WINDOWS</li>`
    },
    {
        name: 'MAC',
        element: `<li class="game-platform-item"><i class="fa-brands fa-apple game-platform-icon"></i>MAC</li>`
    },
    {
        name: 'XBOX ONE',
        element: `<li class="game-platform-item"><i class="fa-brands fa-xbox game-platform-icon"></i>XBOX ONE</li>`
    },
    {
        name: 'XBOX SERIES X',
        element: `<li class="game-platform-item"><i class="fa-brands fa-xbox game-platform-icon"></i>XBOX SERIES X</li>`
    },
    {
        name: 'PLAYSTATION 4',
        element: `<li class="game-platform-item"><i class="fa-brands fa-playstation game-platform-icon"></i>PLAYSTATION 4</li>`
    },
    {
        name: 'PLAYSTATION 5',
        element: `<li class="game-platform-item"><i class="fa-brands fa-playstation game-platform-icon"></i>PLAYSTATION 5</li>`
    },
    {
        name: 'ANDROID',
        element: `<li class="game-platform-item"><i class="fa-brands fa-android game-platform-icon"></i>ANDROID</li>`
    },
    {
        name: 'IOS',
        element: `<li class="game-platform-item"><i class="fa-brands fa-apple game-platform-icon"></i>MAC</li>`
    }
]


var gamesList = document.getElementsByClassName('games-item');
// set màu cho active ban đầu
const setColor = () => {
    Array.from(gamesList).forEach((current) => {
        var className = current.classList[2];
        if (className != undefined) {
            gamesListData.forEach((item) => {
                if (`${item.class}--active` == className) {
                    Array.from(document.querySelectorAll(`.${className} .game-icon-fill`)).forEach((fills) => {
                        fills.style.fill = item.color;
                    })
                    document.querySelector(`.${className} .games-name`).style.color = item.color;
                    Array.from(document.querySelectorAll('.game-desc-name')).forEach((desc) => {
                        desc.style.color = item.color
                    })
                }
            })
        }
    })
}
setColor();

for (let i = 0; i < gamesList.length; i++) {

    gamesList[i].addEventListener("mouseenter", function() {
        gamesListData.forEach((current) => {
            if (current.class == gamesList[i].classList[1]) {
                Array.from(document.querySelectorAll(`.${gamesList[i].classList[1]} .game-icon-fill`)).forEach((item) => {
                    item.style.fill = current.color
                })
                document.querySelector(`.${gamesList[i].classList[1]} .games-name`).style.color = current.color;
            }

        })
    })

    gamesList[i].addEventListener("mouseleave", function() {
        if (!gamesList[i].classList.contains(`${gamesList[i].classList[1]}--active`)) {
            Array.from(document.querySelectorAll(`.${gamesList[i].classList[1]} .game-icon-fill`)).forEach((item) => {
                item.style.fill = "#a6a6a7";
            })
            document.querySelector(`.${gamesList[i].classList[1]} .games-name`).style.color = "#a6a6a7";
        }
    })



    gamesList[i].addEventListener("click", function() {
        Array.from(gamesList).forEach((current) => {
            var className = current.classList[2];
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

        gamesList[i].classList.add(`${gamesList[i].classList[1]}--active`);
        setColor();
        
        gamesListData.forEach(function(current) {
            if (gamesList[i].classList.contains(current.class)) {
                // Set text
                document.querySelector('.game-desc .game-desc-name').innerText = current.name;
                document.querySelector('.game-desc .game-desc-child').innerText = current.desc;
                var gameLinkList = document.querySelector('.game-link-list');
                gameLinkList.innerHTML = "";
                current.link.forEach(function(item) {
                    gameLinkList.innerHTML += `<li class="game-link-item"><a href="" class="game-item-link">${item}</a></li>`;
                })
                document.querySelector('.games-menu').style.backgroundImage = `url(${current.imgUrlBg})`;
                document.querySelector('.game-home-icon').setAttribute('src', `${current.imgUrlIcon}`);
                document.querySelector('.game-desc-name').style.filter = current.filter;

                // Set platfrom
                var list = document.querySelector('.game-desc-platform');
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

var menuGameCheck = document.querySelector('.games-menu-open');
var menuServiceCheck = document.querySelector('.services-menu-open');
var menuGames = document.querySelector('.games-menu');
var menuServices = document.querySelector('.services-menu');

menuGameCheck.addEventListener('click', function() {
    menuServices.classList.remove('is--open');
    menuGames.classList.toggle('is--open');
})

menuServiceCheck.addEventListener('click', function() {
    menuGames.classList.remove('is--open');
    menuServices.classList.toggle('is--open');
})


var servicesListData = [
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


var servicesList = document.querySelectorAll('.services-item');
for (let i = 0; i < servicesList.length; i++) {
    servicesList[i].addEventListener('click', function() {
        if (!servicesList[i].classList.contains('services--active')) {
            Array.from(servicesList).forEach((current) => {
                if (current.classList.contains('services--active'))
                    current.classList.remove('services--active');
            })
            servicesList[i].classList.add('services--active');


            var currentClass = servicesList[i].classList[1];
            servicesListData.forEach((current) => {
                if (current.class == currentClass) {
                    document.querySelector('.services-icon').setAttribute('src', `${current.UrlIcon}`);
                    document.querySelector('.services-menu').style.backgroundImage = `url(${current.UrlBg})`;
                    document.querySelector('.services-desc-name').innerText = current.name;
                    document.querySelector('.services-desc-child').innerText = current.desc;

                    var linkList = document.querySelector('.services-link-list');
                    linkList.innerHTML = "";
                    current.link.forEach((item) => {
                        linkList.innerHTML += `<li class="services-link-item"><a href="" class="services-item-link">${item}</a></li>`
                    })
                }
            })

        }
    })
}