import getGroups from "./getGroups";

function getGroupById(id) {
    const group = getGroups().filter((e) => e.id === id);
    return group[0] || false;
}

export default getGroupById;
