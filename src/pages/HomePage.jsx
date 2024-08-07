import Sidebar from "../components/Sidebar";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.main}></div>
        </div>
    );
}

export default HomePage;
