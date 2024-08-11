import styles from "./AddGroupModal.module.css";
import colors from "../data/colors";
import validateGroup from "../utils/validateGroup";

import { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";

function AddGroupModal({ setModal }) {
    const { addGroup } = useContext(AppContext);
    const [name, setName] = useState("");
    const [selectedColor, setSelectedColor] = useState(null);
    const [error, setError] = useState({ name: false, color: false });

    function hideModal() {
        setModal(false);
    }

    function handleCreate() {
        const res = validateGroup({ name, selectedColor });
        setError(res.error);
        if (!res.valid) {
            return;
        }
        addGroup({ name, selectedColor });
        hideModal();
    }

    return (
        <div className={styles.modal} onClick={hideModal}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
                <h2>Create New group</h2>
                <div className={styles.details}>
                    <p className={styles.details_text}>Group Name</p>{" "}
                    <input
                        type="text"
                        name="group_name"
                        placeholder="Enter group name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {error.name && (
                    <p className={styles.error}>
                        &#9888; Please give a valid name
                    </p>
                )}
                <div className={styles.details}>
                    <p className={styles.details_text}>Choose colour</p>
                    <div className={styles.colors}>
                        {colors.map((clr) => {
                            if (clr === selectedColor) {
                                return (
                                    <div
                                        key={clr}
                                        className={styles.color}
                                        style={{
                                            backgroundColor: clr,
                                            border: "2px solid blue",
                                        }}
                                        onClick={() => setSelectedColor(clr)}
                                    ></div>
                                );
                            }
                            return (
                                <div
                                    key={clr}
                                    className={styles.color}
                                    style={{ backgroundColor: clr }}
                                    onClick={() => setSelectedColor(clr)}
                                ></div>
                            );
                        })}
                    </div>
                </div>
                {error.color && (
                    <p className={styles.error}>
                        &#9888; Please select a color
                    </p>
                )}
                <button className={styles.btn} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    );
}

export default AddGroupModal;
