import { useContext, useState } from "react";
import Group from "./Group";
import styles from "./Sidebar.module.css";
import { AppContext } from "../context/AppProvider";
import AddGroupModal from "./AddGroupModal";

function Sidebar() {
    const { groups, selectedGroup } = useContext(AppContext);
    const [modal, setModal] = useState(false);
    // console.log(groups);

    function handleAddClick() {
        setModal(!modal);
    }
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.heading}>Pocket Notes</h1>

                <div className={styles.groups}>
                    {groups.map((ele) =>
                        ele.id === selectedGroup.id ? (
                            <Group
                                key={ele.id}
                                name={ele.name}
                                icon={ele.icon}
                                color={ele.color}
                                selected={true}
                                id={ele.id}
                            />
                        ) : (
                            <Group
                                key={ele.id}
                                name={ele.name}
                                icon={ele.icon}
                                color={ele.color}
                                selected={false}
                                id={ele.id}
                            />
                        )
                    )}
                </div>
                <button className={styles.btn} onClick={handleAddClick}>
                    +
                </button>
            </div>
            {modal && <AddGroupModal setModal={setModal} />}
        </>
    );
}

export default Sidebar;
