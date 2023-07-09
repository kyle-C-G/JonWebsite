import styles from "./portfolio.module.css"
import Card from "../Components/Card/card";
import Layout from "../Components/Layout/layout"

export default function Portfolio() {
    let cardContent = [
        {
            "name": "Chocolate Gift Store",
            "url": "Portfolio/PortfolioPage/ChocolateGiftStore",
            "image": "/Portfolio/ChocolateGiftStore.png",
            "description": "A branding and web design project for an e-commerce site called \"The Chocolate Gift Store.\" They are a comapny that sells novelty chocolates that come with edgy packaging associated with dark and crude humour.",
            "alt": "Chocolate Gift Store UX Design."
        },
        {
            "name": "Yorkville",
            "url": "Portfolio/PortfolioPage/Yorkville",
            "image": "/Portfolio/Yorkville.webp",
            "description": "Yorkville - a conceptual food takeaway service that specialises in Cornish pasties, pork pies and sausage rolls.",
            "alt": "Yorkville UX Design."
        },
        {
            "name": "Pearl Eats",
            "url": "Portfolio/PortfolioPage/PearlEats/",
            "image": "/Portfolio/PearlEats.webp",
            "description": "Pearl Eats - a conceptual Food delivery app that specialises in Filipino Cuisine for mobile.",
            "alt": "Pearl Eats UX Design."
        },
        {
            "name": "Jon's Chocolates",
            "url": false,
            "image": "/Portfolio/JonsChocolates.png",
            "description": "An app designed for a small chocolate business that delivers to people's doors. A mockup project from an online course on Udemy.",
            "alt": "Jon's Chocolates UX Design."
        },
        {
            "name": "Maynooth",
            "url": "Portfolio/PortfolioPage/Maynooth",
            "image": "/Portfolio/Maynooth.png",
            "description": "Maynooth Furniture is a new business selling affordable high-end design furniture made in Ireland. The brief is to build an e-commerce website for people to browse & purchase furniture for home delivery.",
            "alt": "Maynooth UX Design."
        },
        {
            "name": "DanceShark",
            "url": "Portfolio/PortfolioPage/DanceShark",
            "image": "/Portfolio/DanceShark.png",
            "description": "A branding and web design project for DanceShark, which is a merchandising brand for TikTok influencer @ardie.official, aimed at fathers and children.",
            "alt": "DanceShark UX Design."
        },
        {
            "name": "FittLife - PT Branding",
            "url": "Portfolio/PortfolioPage/FittLife",
            "image": "/Portfolio/FitLife.png",
            "description": "FittLife is a personal training brand for Jordan Fitt. He offers personal training and fitness programs for people looking to get fit. This is a branding project that includes a logo design and business cards for marketing purposes.",
            "alt": "FittLife UX Design."
        },
        {
            "name": "Digital Profile - Leaflet Print Designs",
            "url": false,
            "image": "/Portfolio/Leaflet.png",
            "description": "A leaftlet print design for commercial purposes for Digital Profile. They are a online careers platform based in Cardiff.",
            "alt": "Digital Profile Leaflet Designs."
        },
        {
            "name": "Digital Profile - Digital Assets",
            "url": "Portfolio/PortfolioPage/DigitalAssets",
            "image": "/Portfolio/DigitalAssets.png",
            "description": "A set of vector illustration assets for the online CV and careers platform, Digital Profile.",
            "alt": "Digital Asset Designs."
        },
        {
            "name": "Digital Profile - Banner Designs",
            "url": false,
            "image": "/Portfolio/DigitalProfileBanner.png",
            "description": "A set of banner print designs for marketing purposes for Digital Profile.",
            "alt": "Digital Profile Banner Designs."
        },
    ]

    return (
        <Layout>
            <div className={styles.mainPage}>
                <div className={styles.header}>
                    <h1>Portfolio</h1>
                </div>
                { cardContent.map( content => (
                    <section>
                        <Card 
                            name={content.name} 
                            url={content.url} 
                            image={content.image}
                            description={content.description}
                            alt={content.alt}
                        />
                    </section>
                ))}   
            </div>
        </Layout>
    );
}