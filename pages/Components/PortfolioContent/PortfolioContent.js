import styles from "./portfolioContent.module.css";
import Image from "next/image";

export default function PortfolioContent(props) {
    if (props.element.type === "img") {
        return <Image src={`${props.element.content}`} height={1000} width={1000} alt="Image" className={styles.mockup}/>;
    } 
    else if (props.element.type === "h1") {
        return <h1>{props.element.content}</h1>;
    } 
    else if (props.element.type === "h2") {
        return <h2>{props.element.content}</h2>;
    } 
    else if (props.element.type === "p") {
        return <p className={styles.contentText}>{props.element.content}</p>;
    } 
    else if (props.element.type === "h3"){
        return <h3>{props.element.content}</h3>
    } 
    else if (props.element.type === "imageGrid") {
        let images = props.element.content.map((image, index) => (
            <div className={styles.imageGridContainer}>
                <Image className={styles.imageGridImg} key={index} src={`${image.url}`} height={500} width={500} alt="Image" />
            </div>
        ));
        return <div className={styles.imageGrid}>{images}</div>;
    } 
    else if (props.element.type === "imageGridSquare") {
        let images = props.element.content.map((image, index) => (
            <div className={styles.imageGridContainerSquare}>
                <Image className={styles.imageGridSquareImg} key={index} src={`${image.url}`} height={500} width={500} alt="Image" />
            </div>
        ));
        return <div className={styles.imageGridSquare}>{images}</div>;
    }
    else if (props.element.type === "dribble") {
        return (
        <div class={styles.buttonContainer}>
            <a href={props.element.content} class={styles.dribbleButton} target="_blank">
                Dribble
            </a>
        </div>
        )
    }
}
