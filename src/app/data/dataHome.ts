import { environment } from "../../environments/environment"



export const dataHome = [
    {
        img: "/images/home-images/home-task@3x.png", 
        title:"MY TASKS",
        path: `${environment.domain}/home/hometasks`,
        link: true,
        disable: false,
    },
    {
        img: "/images/home-images/hazop@3x.png", 
        title: "HAZOP",
        path: `${environment.domain}/hazop/followup`,
        link: true,
        disable: false,
    },
    {
        img: "/images/home-images/jsea@3x.png", 
        title:"JSEA",
        path: `${environment.domain}/jsea`,
        link: true,
        disable: false,
    },
    {
        img: "/images/home-images/what-if@3x.png", 
        title:"WHAT'S IF",
        path: "/whatif/followup",
        link: true,
        disable: false,
    },
    {
        img: "/images/home-images/hra@3x.png", 
        title:"HRA",
        path: "hra",
        link: true,
        disable: false,
    },
    {
        img: "/images/home-images/bow-tie@3x.png", 
        title:"BOW-TIE",
        path: "https://bowtiemaster.com/",
        link: true,
        disable: false,
    },
    {
        img: "/images/not-found.jpg", 
        title:"HAZID",
        path: "hazid",
        link: false,
        disable: false,
    },
    {
        img: "/images/not-found.jpg", 
        title:"PSA",
        path: "psa",
        link: false,
        disable: false,
    },
    {
        img: "/images/not-found.jpg", 
        title:"LOPA",
        path: "lopa",
        link: false,
        disable: false,
    },
    {
        img: "/images/home-images/search@3x.png", 
        title:"SEARCH",
        path: "/hazop/search",
        link: true,
        disable: false,
    },
    {
        img: "/images/home-images/dashboard@3x.png", 
        title:"DASHBOARD/REPORT",
        path: "",
        link: true,
        disable: true,
    },
]