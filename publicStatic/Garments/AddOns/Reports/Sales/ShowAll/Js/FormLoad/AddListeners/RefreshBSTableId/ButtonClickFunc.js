let StartFunc = async () => {
    jFLocalHideSpinner();

    let jVarLocalQrCodeData = await jFLocalFetchBillsQrCode();

    var $table = $('#table');
    let LocalArrayReverseData = jVarLocalQrCodeData.slice().reverse();

    $table.bootstrapTable({
        data: LocalArrayReverseData
    });
};

let jFLocalPromiseAll = async () => {
    let jVarLocalPromises = jFLocalFetchBillsQrCode();

    let jVarLocalReturnArray = jVarLocalPromises.map(LoopQrCode => {
        LoopQrCode.Purchased = "false";
        LoopQrCode.Sold = "false";

        let LoopInideFind = b.value.find(LoopPurchase => LoopPurchase.pk === LoopQrCode.PurchasePk);
        // let LoopInideInvGrid = LoopInideFind.InvGrid[LoopQrCode.InventorySerial];

        if (LoopInideFind === undefined === false) if ("Date" in LoopInideFind) LoopQrCode.Purchased = "true";
        if (LoopInideFind === undefined === false) if ("Date" in LoopInideFind) LoopQrCode.PurchaseDate = LoopInideFind.Date;

        let LoopInideSales = b.value.find(LoopPurchase => LoopPurchase.pk === LoopQrCode.pk);

        if (LoopInideSales === undefined === false) LoopQrCode.Sold = "true";

        return LoopQrCode;

    });

    return jVarLocalReturnArray
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalFetchQrCodes = async () => {
    let jVarLocalFetchUrl = "/bin/Generate/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchPurchases = async () => {
    let jVarLocalFetchUrl = "/bin/Vouchers/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

let jFLocalFetchBillsQrCode = async () => {
    let jVarLocalFetchUrl = "/bin/BillsQrCode/DataOnly";
    const response = await fetch(jVarLocalFetchUrl);

    const text = await response.json();
    return text;
};

export { StartFunc }