function getGroups() {
    const groups = JSON.parse(localStorage.getItem("groups"));
    if (groups) return groups;
    return [];
}

export default getGroups;
