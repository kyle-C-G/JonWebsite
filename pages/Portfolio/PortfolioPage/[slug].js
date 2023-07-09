import PortfolioContent from "../../Components/PortfolioContent/PortfolioContent";
import Layout from "../../Components/Layout/layout";
import styles from "./portfolioPage.module.css";
import { useRouter } from 'next/router';

export default function PortfolioPage() {
    const router = useRouter();
    const { slug } = router.query;
    let pageJson;

    if (slug === "ChocolateGiftStore") {
        pageJson = require('./ChocolateGiftStore.json');
    }
    else if (slug === "DanceShark") {
        pageJson = require('./DanceShark.json');
    }
    else if (slug === "FittLife") {
        pageJson = require('./FittLife.json');
    }
    else if (slug === "Yorkville") {
        pageJson = require('./Yorkville.json');
    }
    else if (slug === "Maynooth") {
        pageJson = require('./Maynooth.json');
    }
    else if (slug === "PearlEats") {
        pageJson = require('./PearlEats.json');
    }
    else if (slug === "DigitalAssets") {
        pageJson = require('./DigitalAssets.json');
    }
    else {
        return (
            <Layout>
                <div className={styles.mainPage}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.content}>
                            <p>Page not found.</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className={styles.mainPage}>
                <div className={styles.headerContainer}>
                    <div className={styles.header}>
                        <h1>{pageJson.pageHeader}</h1>
                        <h2>{pageJson.pageDate}</h2>
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        {pageJson.pageContent.map((element, index) => (
                            <PortfolioContent key={index} element={element} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
