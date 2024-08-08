import { createContext, useState } from "react";
import getGroups from "../utils/getGroups";
import getGroupById from "../utils/getGroupById";
import overideGroups from "../utils/setGroups";
import createGroup from "../utils/createGroup";
import saveGroup from "../utils/saveGroup";

export const AppContext = createContext();

function AppProvider({ children }) {
    const [groups, setGroups] = useState(getGroups());
    const [selectedGroup, setSelectedGroup] = useState(false);

    function addGroup(grp) {
        saveGroup(createGroup(grp));
        setGroups(getGroups());
    }

    function addNoteToGroup(id, note) {
        overideGroups(
            getGroups().map((grp) => {
                if (id === grp.id) {
                    grp.notes.push(note);
                }
                return grp;
            })
        );
        setSelectedGroup(getGroupById(id));
    }

    function displaySelectedGroup(id) {
        setSelectedGroup(getGroupById(id));
    }

    function hideSelectedGroup() {
        setSelectedGroup(false);
    }

    return (
        <AppContext.Provider
            value={{
                groups,
                addGroup,
                selectedGroup,
                displaySelectedGroup,
                hideSelectedGroup,
                addNoteToGroup,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
