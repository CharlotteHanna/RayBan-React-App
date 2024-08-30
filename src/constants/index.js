import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigGlasses1, bigGlasses2, bigGlasses3, customer1, customer2, glasses4, glasses5, glasses6, glasses7, thumbnailGlasses1, thumbnailGlasses2, thumbnailGlasses3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const glasses = [
    {
        thumbnail: thumbnailGlasses1,
        bigGlasses: bigGlasses1,
    },
    {
        thumbnail: thumbnailGlasses2,
        bigGlasses: bigGlasses2,
    },
    {
        thumbnail: thumbnailGlasses3,
        bigGlasses: bigGlasses3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: glasses4,
        name: "RayBan Glasses-01",
        price: "$200.20",
    },
    {
        imgURL: glasses5,
        name: "RayBan Glasses-10",
        price: "$210.20",
    },
    {
        imgURL: glasses6,
        name: "RayBan Glasses-100",
        price: "$220.20",
    },
    {
        imgURL: glasses7,
        name: "RayBan Glasses-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Meta Skyler", link: "/" },
            { name: "Wayfarer", link: "/" },
            { name: "Emy Bio-Based", link: "/" },
            { name: "Wayfarer Oval Change", link: "/" },
            { name: "Meta Wayfarer", link: "/" },
            { name: "Balorama", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@rayban.com", link: "mailto:customer@rayban.com" },
            { name: "+9123456789", link: "tel:+9123456789" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];