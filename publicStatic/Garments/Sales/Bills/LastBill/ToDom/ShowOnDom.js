import { FromNode } from "../PullData/FetchFuncs.js";
import { FromNode as FetchFuncForBillsQrCode } from "../PullData/FetchFuncForBillsQrCode.js";
import { ReturnRowPK } from "../urlSearchParams.js";
import { StartFunc as InvGridStartFunc } from "./InvGrid.js";
import { StartFunc as TableFootSuccessStartFunc } from "../FetchFuncs/HtmlPull/TableFootSuccess.js";
import { StartFunc as StartFuncTableFooterTotals } from "./TableFooterTotals/ShowToDom.js";

let StartFunc = async ({ inFolderName, inFileName, inItemName, inProjectName, inShowSuccess }) => {
    let jVarLocalRowPk = ReturnRowPK();

    let jVarLocalData = await FromNode();

    if (jVarLocalData.status === 500) {
        console.log("Status-500");

    } else {
        const data = await jVarLocalData.json();
        localStorage.setItem("RowPk", data.pk)
        ShowOnDom({ inData: data, inShowSuccess });
        await localInventeryShow()
    };
};

let localInventeryShow = async () => {
    let jVarLocalDataToShow = await FetchFuncForBillsQrCode();

    if (jVarLocalDataToShow.status === 500) {
        console.log("Status-500");
        let jVarLocalSnoid = document.getElementById("Snoid");
        jVarLocalSnoid.value = 1;
        return

    } else {
        const data = await jVarLocalDataToShow.json();
        let localdata = data;

        await InvGridStartFunc({ inDataAsArray: localdata });
        jVarLocalShowInventorySerial({ inData: localdata });
        StartFuncTableFooterTotals({ inData: localdata });

    }

};

let ShowOnDom = ({ inData, inShowSuccess }) => {
    let jVarLocalVoucherNameId = document.getElementById("VoucherNameId");
    let jVarLocalBillNumberId = document.getElementById("BillNumberId");
    let jVarLocalDateId = document.getElementById("DateId");

    if (jVarLocalVoucherNameId !== null) {
        jVarLocalVoucherNameId.innerHTML = inData.CustomerName;
    };
    if (jVarLocalBillNumberId !== null) {
        jVarLocalBillNumberId.innerHTML = inData.pk;
    };

    if (jVarLocalDateId !== null) {
        jVarLocalDateId.innerHTML = inData.Date;
    };

    ShowSuccessFunc({ inShowSuccess });
};

let jVarLocalShowInventorySerial = ({ inData }) => {
    let jVarLocalSnoid = document.getElementById("Snoid");
    jVarLocalSnoid.value = Object.keys(inData).length + 1;

};

let ShowSuccessFunc = ({ inShowSuccess }) => {
    if (inShowSuccess) {
        let LocalFromHtml = TableFootSuccessStartFunc();
        let LocalTableFooterSuccessId = document.getElementById("TableFooterSuccessId");

        if (LocalFromHtml.KTF) {
            LocalTableFooterSuccessId.innerHTML = LocalFromHtml.HtmlString;
        };
    };
};

export { StartFunc };