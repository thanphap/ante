export const removeAccents = (str) => {
    const accentsMap = str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/ /g, '-');
    return accentsMap.toLowerCase();
};