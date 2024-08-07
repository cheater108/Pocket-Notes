function iconLetters(name) {
    const split_arr = name.split(/[\s]+/);
    if (split_arr.length === 1) return split_arr[0][0];
    return split_arr[0][0] + split_arr[1][0];
}

export default iconLetters;
