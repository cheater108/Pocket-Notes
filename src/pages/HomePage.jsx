import Sidebar from "../components/Sidebar";
import styles from "./HomePage.module.css";
import NotesArea from "../components/NotesArea";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

function HomePage() {
    const { selectedGroup } = useContext(AppContext);
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.main}>{selectedGroup && <NotesArea />}</div>
        </div>
    );
}

export default HomePage;
