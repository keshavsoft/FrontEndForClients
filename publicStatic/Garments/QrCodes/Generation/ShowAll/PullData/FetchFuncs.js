import ConfigJson from '../../../../config.json' with {type: 'json'};

let FromNode = async () => {
    try {
        let jVarLocalStartUrl = ConfigJson.StartUrl;
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/Generate/Show/DataOnly`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };