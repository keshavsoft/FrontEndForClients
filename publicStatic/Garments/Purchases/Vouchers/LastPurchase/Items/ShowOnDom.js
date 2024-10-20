import { StartFunc as FetchFunc } from "./FetchFunc.js";

let StartFunc = async () => {
    let jVarLocalFromFetch = await FetchFunc();
    let jVarLocalItemsDataListId = document.getElementById("ItemsDataListId");

    if (jVarLocalItemsDataListId !== null) {
        var options = '';

        for (var i = 0; i < jVarLocalFromFetch.length; i++) {
            options += `<option value="${jVarLocalFromFetch[i].ItemName}">${jVarLocalFromFetch[i].ItemName}</option>`;
        }

        jVarLocalItemsDataListId.innerHTML = options;
    };
};


export { StartFunc };