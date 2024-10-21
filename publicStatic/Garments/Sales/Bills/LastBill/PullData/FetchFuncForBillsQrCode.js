import ConfigJson from '../../../../config.json' with {type: 'json'};

let FromNode = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    try {
        let LocalRowpk = localStorage.getItem("RowPk")
        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/BillsQrCode/Search/AsArray?Key=BillPk&Value=${LocalRowpk}`;

        const response = await fetch(jVarLocalFetchUrl);

        return await response;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };