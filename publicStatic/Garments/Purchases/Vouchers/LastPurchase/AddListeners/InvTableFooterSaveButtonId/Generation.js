import ConfigJson from '../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartRoute = ConfigJson.StartRoute;

    let jVarLocalRowPK = localStorage.getItem("RowPK");
    console.log("aaaaaaaaccccccc : ", jVarLocalRowPK);

    try {
        let jVarLocalFetchUrl = `/${jVarLocalStartRoute}/Generate/SearchForStatus/AsObject?Key=PurchasePk&Value=${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);

        if (response.status === 500) {
            return true
        };
        return false
    } catch (error) {
        console.log("error:", error);
    };
};

export { StartFunc };