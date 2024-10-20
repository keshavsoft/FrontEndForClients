import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";
import { StartFunc as FormLoadStartFunc } from "./ToDom/FormLoad.js";

let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jFStartFunc = async () => {
    await FormLoadStartFunc();

    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });

    await AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

jFStartFunc().then(() => {
});