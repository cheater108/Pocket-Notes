import { createContext, useState } from "react";
import getGroups from "../utils/getGroups";
import createGroup from "../utils/createGroup";
import saveGroup from "../utils/saveGroup";

export const AppContext = createContext();

function AppProvider({ children }) {
    const [groups, setGroups] = useState(getGroups());

    function addGroup(grp) {
        saveGroup(createGroup(grp));
        setGroups(getGroups());
    }
    return (
        <AppContext.Provider value={{ groups, addGroup }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
