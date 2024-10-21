import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let LocalUrl = `/${jVarLocalStartUrl}/pos/Show/DataOnly`;
    let localfetch = await fetch(LocalUrl);
    let data = await localfetch.json();
    // console.log("data: ", data);
    let jVarLocalDataListId = document.getElementById("SuggestCustomerNumbers");

    data.forEach(element => {
        let jVarLocalOptions = document.createElement("option");
        jVarLocalOptions.value = element.CustomerNumber;
        jVarLocalOptions.innerHTML = element.CustomerNumber;
        jVarLocalDataListId.appendChild(jVarLocalOptions);
    });
};

export { StartFunc };