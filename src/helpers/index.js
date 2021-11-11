export const FormatDate = (date) => {
    return date.split(/(?= )|\b/).reverse().join("");
};