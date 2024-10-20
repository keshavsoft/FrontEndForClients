import ConfigJson from '../../Config.json' with {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalStartRoute = ConfigJson.StartRoute;
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/${jVarLocalStartRoute}/PurchaseItems/Create/WithCheckAndGenPk`;
    console.log("aaaaaabbbbbbbbb : ", jVarLocalFetchUrl);

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    return response;
};

export { StartFunc };