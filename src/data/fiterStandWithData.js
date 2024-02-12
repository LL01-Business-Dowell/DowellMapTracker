export default function filterNonEmptyArrays(obj) {
    const filteredProperties = {};

    for (const item in obj) {
        if (
            obj.hasOwnProperty(item) &&
            Array.isArray(obj[item]) &&
            obj[item].length > 0
        ) {
            filteredProperties[item] = obj[item];
        }
    }

    return filteredProperties;
}
