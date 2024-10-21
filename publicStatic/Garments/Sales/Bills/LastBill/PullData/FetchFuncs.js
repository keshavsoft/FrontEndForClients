import ConfigJson from '../../../../config.json' with {type: 'json'};

let FromNode = async () => {
    try {
        const jVarLocalStartUrl = ConfigJson.StartUrl;

        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/pos/Filter/MaxRow`;
        const response = await fetch(jVarLocalFetchUrl);
        return await response;

    } catch (error) {
        console.log("error:", error);
    };
};

export { FromNode };