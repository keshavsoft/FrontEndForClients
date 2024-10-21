import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let LocalUrl = `/${jVarLocalStartUrl}/pos/Show/DataOnly`;
    let localfetch = await fetch(LocalUrl);
    let data = await localfetch.json();
    let jVarLocalDataListId = document.getElementById("SuggestCustomerNames");

    data.forEach(element => {
        let jVarLocalOptions = document.createElement("option");
        jVarLocalOptions.value = element.CustomerName;
        jVarLocalOptions.innerHTML = element.CustomerName;
        jVarLocalDataListId.appendChild(jVarLocalOptions);
    });
};

export { StartFunc };