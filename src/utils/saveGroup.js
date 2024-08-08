import getGroups from "./getGroups";

function saveGroup(grp) {
    const groups = getGroups();
    groups.push(grp);
    localStorage.setItem("groups", JSON.stringify(groups));
}

export default saveGroup;
