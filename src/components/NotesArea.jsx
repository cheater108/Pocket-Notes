import Notes from "./Notes";
import styles from "./NotesArea.module.css";

function NotesArea() {
    return (
        <div className={styles.container}>
            <Notes />
        </div>
    );
}

export default NotesArea;
