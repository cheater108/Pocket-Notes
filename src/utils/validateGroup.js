function validateGroup({ name, selectedColor }) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const error = {
        name: false,
        color: false,
    };

    error.name = !nameRegex.test(name);
    if (!selectedColor) error.color = true;

    const valid = !error.name && !error.color;

    return { valid, error };
}

export default validateGroup;
