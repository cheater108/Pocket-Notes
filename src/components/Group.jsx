import { useContext } from "react";
import styles from "./Group.module.css";
import { AppContext } from "../context/AppProvider";

function Group({ name, color, icon, id, selected }) {
    const { displaySelectedGroup } = useContext(AppContext);
    const selectedStyle = selected
        ? { backgroundColor: "#2F2F2F2B", borderRadius: "16px" }
        : {};

    return (
        <div
            className={styles.container}
            onClick={() => displaySelectedGroup(id)}
            style={selectedStyle}
        >
            <div className={styles.grp_icon} style={{ backgroundColor: color }}>
                {icon}
            </div>
            <p>{name}</p>
        </div>
    );
}

export default Group;
