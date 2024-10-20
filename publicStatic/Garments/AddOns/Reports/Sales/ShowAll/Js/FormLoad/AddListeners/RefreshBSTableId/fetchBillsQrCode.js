import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartRoute;

    let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/BillsQrCode/Show/DataOnly`;
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }