import { StartFunc as KeyPressStartFunc } from "./FetchFuncs/KeyPress.js";
import { StartFunc as StartFuncinvKeyPressCal } from "./invKeyPressCal.js";
import { ReturnRowPK } from "./urlSearchParams.js";
import { StartFunc as ButtonForImageDownload } from "./ToDom/ButtonForImageDownload.js";
import { StartFunc as StartFuncSaveWithButton } from "./FetchFuncs/SaveWithButton/1-ClickFunc.js";
import { StartFunc as ButtonForButtonForDelete } from "./ToDom/ButtonForDelete.js";

let StartFunc = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    StartFuncSaveWithButton();
    QrCodeKeyPressAssign({ inFolderName, inFileName, inItemName, inProjectName });
    StartFuncinvKeyPressCal();
    localprintButtononClickFunc();
    LocalModalButtonForImageDownloadFuncs();
    localPaymentModeIdBurronClickFuncc();
    LocalModalDeleteButtonClassFuncs();
};

let QrCodeKeyPressAssign = ({ inFolderName, inFileName, inItemName, inProjectName }) => {
    let jVarLocalQrCode = document.getElementById("QrCode");

    jVarLocalQrCode.addEventListener("keypress", async (event) => {
        if (event.keyCode === 13) { // key code of the keybord key
            event.preventDefault();
            let jVarLocalQrCodeValue = jVarLocalQrCode.value
            let Rowpk = parseInt(jVarLocalQrCodeValue.substring(2));

            await KeyPressStartFunc({
                inFolderName, inFileName, inItemName, inProjectName, inJsonPK: Rowpk
            });
        }
    });
};


let localprintButtononClickFunc = () => {
    let jvarLocalPrinButtonId = document.getElementById("PrintId");

    jvarLocalPrinButtonId.addEventListener("click", () => {
        let localRowPK = localStorage.getItem("RowPk");
        window.location.href = `/Garments/Sales/BillPrint/Show/Show.html?RowPK=${localRowPK}`;
    })
};

let LocalModalButtonForImageDownloadFuncs = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("ShowImageButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", ButtonForImageDownload)
    };
};

let LocalModalDeleteButtonClassFuncs = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("DeleteButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", ButtonForButtonForDelete)
    };
};

let localPaymentModeIdBurronClickFuncc = () => {
    let jvarLocalPrinButtonId = document.getElementById("PaymentModeId");

    jvarLocalPrinButtonId.addEventListener("click", () => {
        let localRowPK = localStorage.getItem("RowPk");

        // window.location.href = `/Garments/Sales/BillPrint/Show/Show.html?RowPK=${localRowPK}`;
        window.location.href = `/Garments/Sales/Bills/PaymentMode/PaymentMode.html?RowPK=${localRowPK}`;
    })
};


export { StartFunc };