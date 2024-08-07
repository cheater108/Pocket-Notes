import getGroups from "./getGroups";

function saveGroup(grp) {
    const groups = getGroups();
    groups.push(grp);
    console.log(groups);
    localStorage.setItem("groups", JSON.stringify(groups));
}

export default saveGroup;
