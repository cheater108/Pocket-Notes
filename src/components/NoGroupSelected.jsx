import styles from "./NoGroupSelected.module.css";
import people from "../assets/people.png";
import lock from "../assets/lock.svg";

function NoGroupSelected() {
    return (
        <div className={styles.container}>
            <img className={styles.people_img} src={people} alt="" />
            <h1 className={styles.heading}>Pocket Notes</h1>
            <p className={styles.text}>
                Send and receive messages without keeping your phone online.
            </p>
            <p className={styles.text}>
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
            <p className={styles.footer}>
                <img src={lock} alt="" /> &nbsp; end-to-end encrypted
            </p>
        </div>
    );
}

export default NoGroupSelected;
