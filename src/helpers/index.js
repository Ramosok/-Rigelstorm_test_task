export const FormatDate = (date) => {
    return date.split(/(?= )|\b/).reverse().join("");
};

export const FormatTime = (date) => {
    return date.substr(11,15);
};