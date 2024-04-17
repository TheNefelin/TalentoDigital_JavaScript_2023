const dataLinksMenu = [
    {
        id: 1,
        nombre: "Cachureando",
        link: "https://slifer.bsite.net/"
    }
    ,{
        id: 2,
        nombre: "Hosting",
        link: "https://freeasphosting.net/"
    }
    ,{
        id: 3,
        nombre: "Unab",
        link: "https://otec-unab.cl/"
    }
    ,{
        id: 4,
        nombre: "w3schools",
        link: "https://www.w3schools.com/"
    }
    ,{
        id: 5,
        nombre: "UniCode",
        link: "https://unicode.bayashi.net/"
    }
];

const dataCateg = [
    {
        id: 1,
        nombre: "Para Beber",
        link: "./img/grupo_01.jpg"
    }
    ,{
        id: 2,
        nombre: "Tablas",
        link: "./img/grupo_03.jpg"
    } 
    ,{
        id: 3,
        nombre: "Para chanchear",
        link: "./img/grupo_02.jpg"
    }   
];

const dataCategItem = [
    {
        id: 1,
        nombre: "Cervezas Artesanales",
        idCateg: 1
    }
    ,{
        id: 2,
        nombre: "Cervezas Envasadas",
        idCateg: 1
    }
    ,{
        id: 3,
        nombre: "De la Casa",
        idCateg: 2
    }
    ,{
        id: 4,
        nombre: "Hamburguesas",
        idCateg: 3
    }
    ,{
        id: 5,
        nombre: "Completos",
        idCateg: 3
    }
];

const dataItem = [
    {
        id: 1,
        nombre: "Pils",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 5500,
        link: "./img/item_01.png",
        idCateg: 1,
        estado: true
    }
    ,{
        id: 2,
        nombre: "Santa Sed",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 4800,
        link: "./img/item_02.png",
        idCateg: 1,
        estado: true
    }
    ,{
        id: 3,
        nombre: "Blood",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 4500,
        link: "./img/item_03.png",
        idCateg: 1,
        estado: true
    }
    ,{
        id: 4,
        nombre: "Heineken",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 2500,
        link: "./img/item_04.jpg",
        idCateg: 2,
        estado: true
    }
    ,{
        id: 5,
        nombre: "Kross",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 3500,
        link: "./img/item_05.jpg",
        idCateg: 2,
        estado: true
    }
    ,{
        id: 6,
        nombre: "Kunstmann",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 2500,
        link: "./img/item_06.jpg",
        idCateg: 2,
        estado: true
    }
    ,{
        id: 7,
        nombre: "Budweiser",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 2000,
        link: "./img/item_07.jpg",
        idCateg: 2,
        estado: true
    }
    ,{
        id: 8,
        nombre: "Royal",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 2500,
        link: "./img/item_08.jpg",
        idCateg: 2,
        estado: true
    }
    ,{
        id: 9,
        nombre: "Tabla de Carne",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 7000,
        link: "./img/item_09.png",
        idCateg: 3,
        estado: true
    }
    ,{
        id: 10,
        nombre: "Tabla de Queso",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 7000,
        link: "./img/item_10.png",
        idCateg: 3,
        estado: true
    }
    ,{
        id: 11,
        nombre: "Tabla Veggie",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 7000,
        link: "./img/item_11.png",
        idCateg: 3,
        estado: true
    }
    ,{
        id: 12,
        nombre: "Papas Rústicas",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 5000,
        link: "./img/item_12.png",
        idCateg: 3,
        estado: true
    }
    ,{
        id: 13,
        nombre: "Papas Merken",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 5000,
        link: "./img/item_13.png",
        idCateg: 3,
        estado: true
    }
    ,{
        id: 14,
        nombre: "Papas Cheddar",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 6000,
        link: "./img/item_14.png",
        idCateg: 3,
        estado: true
    }    
    ,{
        id: 15,
        nombre: "Hamburguesa de Res",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 6000,
        link: "./img/item_15.png",
        idCateg: 4,
        estado: true
    }   
    ,{
        id: 16,
        nombre: "Hamburguesa Pollo Apanado",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 6000,
        link: "./img/item_16.png",
        idCateg: 4,
        estado: true
    }   
    ,{
        id: 17,
        nombre: "Hamburguesa Doble Cheddar",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 6000,
        link: "./img/item_17.png",
        idCateg: 4,
        estado: true
    }   
    ,{
        id: 18,
        nombre: "Hamburguesa Mechada",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 6000,
        link: "./img/item_18.png",
        idCateg: 4,
        estado: true
    }   
    ,{
        id: 19,
        nombre: "Hamburguesa Veggie",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 6000,
        link: "./img/item_19.png",
        idCateg: 4,
        estado: true
    }   
    ,{
        id: 20,
        nombre: "Hamburguesa Veggie Legumbres",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 6000,
        link: "./img/item_20.png",
        idCateg: 4,
        estado: true
    }   
    ,{
        id: 21,
        nombre: "Completo Mexicano",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 3000,
        link: "./img/item_21.png",
        idCateg: 5,
        estado: true
    }
    ,{
        id: 22,
        nombre: "Completo Tocino",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 3000,
        link: "./img/item_22.png",
        idCateg: 5,
        estado: true
    }   
    ,{
        id: 23,
        nombre: "Completo Italiano",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 3000,
        link: "./img/item_23.png",
        idCateg: 5,
        estado: true
    }   
    ,{
        id: 24,
        nombre: "Completo Aleman",
        descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
        precio: 3000,
        link: "./img/item_24.png",
        idCateg: 5,
        estado: true
    }   
];

const dataLinks = [
    {
        id: 1,
        nombre: "Azure DevObs @metalflap",
        link: "https://dev.azure.com/nefelin/dotNETCore6/_build"
    }
    ,{
        id: 2,
        nombre: "Visual Studio Get Help",
        link: "https://my.visualstudio.com/GetHelp?mkt=en-us"
    }
    ,{
        id: 3,
        nombre: "Welcome to Dev Essentials",
        link: "https://my.visualstudio.com/?auth_redirect=true"
    }
    ,{
        id: 4,
        nombre: "FreeAsp Hosting",
        link: "https://freeasphosting.net/"
    }
    ,{
        id: 5,
        nombre: "API Metalflap",
        link: "https://bsite.net/metalflap/"
    }
    ,{
        id: 6,
        nombre: "API Slifer",
        link: "https://slifer.bsite.net/"
    }
    ,{
        id: 7,
        nombre: "Scrimba",
        link: "https://scrimba.com/learn/learnreact"
    }
    ,{
        id: 8,
        nombre: "Curso React",
        link: "https://www.youtube.com/watch?v=rLoWMU4L_qE"
    }
    ,{
        id: 9,
        nombre: "GitHub",
        link: "https://github.com/TheNefelin"
    },
    ,{
        id: 10,
        nombre: "Awesome WebSite",
        link: "https://jacekjeznach.com/"
    }
    ,{
        id: 11,
        nombre: "w3schools",
        link: "https://www.w3schools.com/"
    }
    ,{
        id: 12,
        nombre: "UniCode",
        link: "https://unicode.bayashi.net/"
    }
];