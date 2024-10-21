import { StartFunc as StartFucToFooter } from "../ToDom/ToFooter.js";
import { StartFunc as StartFuncDiscount } from "../ToDom/ProductDetails/Table/Footer/Discount.js";
import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async ({ inProjectName, inJsonPK }) => {
    let jVarLocalQrCodeData = await jFLocalFetchQrCodeData({ inProjectName, inJsonPK });

    if (jVarLocalQrCodeData === undefined) {
        swal.fire({ title: "No Data", icon: "error" })
        return;
    };

    StartFucToFooter({ inJSONData: jVarLocalQrCodeData });

    let jVarLocalDiscountData = await jFLocalFetchQrDiscountData({ inProjectName, inRowPK: inJsonPK });

    if (jVarLocalDiscountData.KTF) {
        let jVarLocalMaxPk = jFLocalLatestDiscount({ inDiscountArray: jVarLocalDiscountData.JsonData });

        StartFuncDiscount({ inJSONData: jVarLocalDiscountData.JsonData[jVarLocalMaxPk] });
    };
};

const jFLocalLatestDiscount = ({ inDiscountArray }) => {
    let jVarLocalKeys = Object.keys(inDiscountArray);
    const numArr = jVarLocalKeys.map((item) => parseInt(item, 0));
    const max = Math.max(...numArr);

    return max;
};

let jFLocalFetchQrCodeData = async ({ inJsonPK }) => {
    const jVarLocalStartUrl = ConfigJson.StartUrl;

    try {
        let jVarLocalRowPK = inJsonPK;

        let jVarLocalFetchUrl = `/${jVarLocalStartUrl}/Generate/RowShow/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        console.log("data:", data);
        Object.freeze(data);
        return await data;

    } catch (error) {
        console.log("error:", error);
    }

};

let jFLocalFetchQrDiscountData = async ({ inRowPK }) => {

    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };
        let jVarLocalRowPK = inRowPK;

        let jVarLocalFetchUrl = `/bin/Discounts/${jVarLocalRowPK}`;

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        LocalReturnObject.JsonData = data.JsonData;
        LocalReturnObject.KTF = true;

        Object.freeze(LocalReturnObject.JsonData);

        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };