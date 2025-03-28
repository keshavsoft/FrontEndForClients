import { FromNode } from "../PullData/FetchFuncs.js";
import { StartFunc as TableRowStartFunc } from "../FetchFuncs/HtmlPull/TableRow.js";
import { StartFunc as TableHeadStartFunc } from "../FetchFuncs/HtmlPull/TableHead.js";

let StartFunc = async () => {
    let jVarLocalData = await FromNode();

    if (jVarLocalData.KTF) {
        await ShowOnDom({ inData: jVarLocalData.JsonData });
    };
};

let ShowOnDom = async ({ inData }) => {
    // await ShowOnDomTableHeader();
    await ShowOnDomTableBody({ inData });
};

let ShowOnDomTableBody = async ({ inData }) => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyId");
    let jVarLocalTemplate = await TableRowStartFunc();

    if (jVarLocalTemplate.KTF) {
        var template = Handlebars.compile(jVarLocalTemplate.HtmlString);

        inData.forEach((element, index) => {
            element.index = index + 1

            let jVarLocalToShowHtml = template(element);

            jVarLocalTableBodyId.insertAdjacentHTML("afterbegin", jVarLocalToShowHtml);
        });

    };
};

let ShowOnDomTableHeader = async () => {
    let jVarLocalTableHeadId = document.getElementById("TableHeadId");

    let jVarLocalHeadHtml = await TableHeadStartFunc();

    if (jVarLocalHeadHtml.KTF) {
        jVarLocalTableHeadId.innerHTML = jVarLocalHeadHtml.HtmlString;
    };
};
export { StartFunc };