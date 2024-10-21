import ConfigJson from '../../../../config.json' with {type: 'json'};

const StartFunc = async () => {
    let LocalBillNo = await jFLocalFetch();
    let jVarLocalHtmlId = 'BillNumber';
    let jVarLocalBillNumber = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBillNumber === null === false) {
        jVarLocalBillNumber.value = LocalBillNo + 1;
    };
};

const jFLocalFetch = async () => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    let responce = await fetch(`/${jVarLocalStartUrl}/pos/Filter/MaxRow`);

    let data = await responce.json();
    return await data.BillNumber2425;
};

export { StartFunc };