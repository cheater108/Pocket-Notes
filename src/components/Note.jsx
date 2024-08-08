import styles from "./Note.module.css";

function Note({ content, timestamp }) {
    return (
        <div className={styles.container}>
            <p className={styles.note_content}>{content}</p>
            <p className={styles.time}>
                {timestamp.date} &#8226; {timestamp.clock_time}
            </p>
        </div>
    );
}

export default Note;
