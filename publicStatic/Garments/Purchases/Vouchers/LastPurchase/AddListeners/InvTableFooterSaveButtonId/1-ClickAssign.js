import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "InvTableFooterSaveButtonId";
    let jVarLocalCreateFolderButtonId = document.getElementById(jVarLocalHtmlId);
    console.log("aaaaaaaa : ", jVarLocalCreateFolderButtonId);

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFunc };
