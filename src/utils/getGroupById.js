import getGroups from "./getGroups";

function getGroupById(id) {
    const group = getGroups().find((e) => e.id === id);
    return group || false;
}

export default getGroupById;
