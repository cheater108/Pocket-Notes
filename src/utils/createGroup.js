import iconLetters from "./iconLetters";

function createGroup({ name, selectedColor }) {
    const icon = iconLetters(name).toUpperCase();
    return {
        name,
        color: selectedColor,
        icon,
        notes: [],
        id: new Date().getTime(),
    };
}

export default createGroup;
