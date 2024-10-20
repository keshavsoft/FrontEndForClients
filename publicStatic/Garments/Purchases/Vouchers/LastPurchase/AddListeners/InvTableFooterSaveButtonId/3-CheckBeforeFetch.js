import { StartFunc as Generation } from "./Generation.js";

let StartFunc = async () => {
    if (jFLocalQtyId() === false) return false;
    if (jFLocalRateId() === false) return false;
    if (jFLocalMRPId() === false) return false;
    if (jFLocalAmountId() === false) return false;
    if (await Generation() === false) return false;

    return true;
};

let jFLocalQtyId = () => {
    let jVarLocalId = document.getElementById("QtyId1");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};

let jFLocalRateId = () => {
    let jVarLocalId = document.getElementById("RateId1");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};

let jFLocalAmountId = () => {
    let jVarLocalId = document.getElementById("AmountId");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};

let jFLocalMRPId = () => {
    let jVarLocalId = document.getElementById("MRPId");
    let jVarLocalHtmlValue = jVarLocalId.value;

    if (jVarLocalHtmlValue === "") {
        jVarLocalId.classList.add("is-invalid");
        jVarLocalId.focus();
        return false;
    } else {
        jVarLocalId.classList.remove("is-invalid");
        jVarLocalId.classList.add("is-valid");
    };

    return true;

};

export { StartFunc };