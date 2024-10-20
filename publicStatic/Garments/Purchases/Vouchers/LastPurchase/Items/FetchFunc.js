import ConfigJson from '../Config.json' with {type: 'json'};

let StartFunc = async () => {
    try {
        const jVarLocalStartRoute = ConfigJson.StartRoute;
        let jVarLocalFetchUrl = `/${jVarLocalStartRoute}/Items/Show/DataOnly`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        return await data;

    } catch (error) {
        console.log("error:", error);
    };

};



export { StartFunc };