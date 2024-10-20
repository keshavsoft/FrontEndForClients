import { StartFunc as TableFootStartFunc } from "../FetchFuncs/HtmlPull/TableFoot.js";
import { StartFunc as ItemsStartFunc } from "../Items/ShowOnDom.js";
import { ReturnRowPK } from "../urlSearchParams.js";

let StartFunc = async () => {
    await ShowOnDomTableFooter();
    jVarLocalShowProductsTabFunc();
};

let jVarLocalShowProductsTabFunc = () => {
    let jVarLocalFromurlSearchParams = ReturnRowPK();

    if ("FromDelete" in jVarLocalFromurlSearchParams) {
        if (jVarLocalFromurlSearchParams.FromDelete) {
            document.getElementById("FirstBtnNext").click();
        };
    };

    if ("FromSave" in jVarLocalFromurlSearchParams) {
        if (jVarLocalFromurlSearchParams.FromSave === "true") {
            document.getElementById("FirstBtnNext").click();

            let jVarLocalItemsDataListId = document.getElementById("QtyId1");

            jVarLocalItemsDataListId.focus();
        };
    };
};

let ShowOnDomTableFooter = async () => {
    let jVarLocalTableHeadId = document.getElementById("InvTableFooterId");

    let jVarLocalHeadHtml = await TableFootStartFunc();

    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
        await ItemsStartFunc();

        if (document.getElementById('ItemsDataListId')) {
            var element = document.getElementById('ItemsDataListId');
            const example = new Choices(element);
        };
    };
};

export { StartFunc };