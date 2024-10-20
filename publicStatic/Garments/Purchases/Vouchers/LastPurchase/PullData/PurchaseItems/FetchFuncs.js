import ConfigJson from '../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    try {
        let jVarLocalStartRoute = ConfigJson.StartRoute;

        const jVarLocalRowPK = localStorage.getItem("RowPK");

        let jVarLocalFetchUrl = `/${jVarLocalStartRoute}/PurchaseItems/Search/AsArray?Key=FK&Value=${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);

        if (response.status === 200) {
            const data = await response.json();
            return await data;
        } else {
            return await [];
        };
    } catch (error) {
        console.log("error:", error);
    };
};

export { StartFunc };