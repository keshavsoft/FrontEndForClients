import ConfigJson from '../Config.json' with {type: 'json'};

let FromNode = async () => {
    try {
        let jVarLocalStartRoute = ConfigJson.StartRoute;

        let jVarLocalFetchUrl = `/${jVarLocalStartRoute}/Vouchers/Filter/MaxRow`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        localStorage.setItem("RowPK", data.pk);

        return await data;
    } catch (error) {
        console.log("error:", error);
    };
};

export { FromNode };