import styles from "./Group.module.css";

function Group({ name, color, icon }) {
    return (
        <div className={styles.container}>
            <div className={styles.grp_icon} style={{ backgroundColor: color }}>
                {icon}
            </div>
            <p>{name}</p>
        </div>
    );
}

export default Group;
