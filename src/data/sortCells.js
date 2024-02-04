export default function extractStandData(obj) {
    const sortedData = {};

    for (const [x, y] of Object.entries(obj)) {
        for (const rows of y) {
            if ("stand_number" in rows) {
                const coords = `${rows['row_number']}_${x}`;

                if (rows['stand_number'] in sortedData) {
                    sortedData[rows['stand_number']][1].push(coords);
                } else {
                    sortedData[rows['stand_number']] = [rows["color_code"], []];
                    sortedData[rows['stand_number']][1].push(coords);
                }
            }
        }
    }

    return sortedData;
}

