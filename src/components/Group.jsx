import { useContext } from "react";
import styles from "./Group.module.css";
import { AppContext } from "../context/AppProvider";

function Group({ name, color, icon, id }) {
    const { displaySelectedGroup } = useContext(AppContext);
    return (
        <div
            className={styles.container}
            onClick={() => displaySelectedGroup(id)}
        >
            <div className={styles.grp_icon} style={{ backgroundColor: color }}>
                {icon}
            </div>
            <p>{name}</p>
        </div>
    );
}

export default Group;
