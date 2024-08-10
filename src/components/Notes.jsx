import styles from "./Notes.module.css";
import back from "../assets/back.png";
import send_disabled from "../assets/send_disabled.svg";
import send_enabled from "../assets/send_enabled.svg";
import Note from "./Note";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppProvider";
import getTimeStamp from "../utils/getTimeStamp";

function Notes() {
    const { selectedGroup, hideSelectedGroup, addNoteToGroup } =
        useContext(AppContext);
    const { name, icon, color, id, notes } = selectedGroup;
    const [noteInput, setNoteInput] = useState("");
    // console.log(selectedGroup);

    function enableSend() {
        if (noteInput === "") return false;
        if (/^[\s]+$/.test(noteInput)) return false;
        return true;
    }

    function sendNote() {
        addNoteToGroup(id, {
            note: noteInput,
            timestamp: getTimeStamp(new Date()),
        });
        setNoteInput("");
    }

    function handleEnterKey(e) {
        if (e.key === "Enter" && enableSend()) {
            e.target.blur();
            sendNote();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.top_bar}>
                <div className={styles.back} onClick={hideSelectedGroup}>
                    <img src={back} alt="" />
                </div>
                <div className={styles.heading_container}>
                    <div
                        className={styles.icon}
                        style={{ backgroundColor: color }}
                    >
                        {icon}
                    </div>
                    <p className={styles.group_name}>{name}</p>
                </div>
            </div>
            <div className={styles.notes_container}>
                {notes.map(({ note, timestamp }, ind) => (
                    <Note key={ind} content={note} timestamp={timestamp} />
                ))}
            </div>
            <div className={styles.input_container}>
                <div className={styles.input_area}>
                    <textarea
                        className={styles.input}
                        name="note"
                        id="note"
                        placeholder="Enter your text here..........."
                        value={noteInput}
                        onKeyDown={handleEnterKey}
                        onChange={(e) => setNoteInput(e.target.value)}
                    ></textarea>
                    {enableSend() ? (
                        <img
                            src={send_enabled}
                            className={styles.send_enabled}
                            onClick={sendNote}
                        />
                    ) : (
                        <img
                            src={send_disabled}
                            className={styles.send_disabled}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Notes;
