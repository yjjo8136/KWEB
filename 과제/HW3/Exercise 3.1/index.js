const isValidNumber = num => {
    const parsedNumber = parseInt(num);
    if (isNaN(parsedNumber)) return false;
    if (!isFinite(parsedNumber)) return false;
    if (parsedNumber != num) return false;
    return parsedNumber >= 1 && parsedNumber <= 9;
};
