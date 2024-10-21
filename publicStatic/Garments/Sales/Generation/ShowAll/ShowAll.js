import { StartFunc as ShowAllStartFunc } from "../ShowAll/ToDom/ShowInBody.js";
import { StartFunc as AddListenersStartFunc } from "../ShowAll/AddListeners.js";
import { StartFunc as FormLoadFuncsStartFunc } from "./FormLoadFuncs.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";

let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let StartFunc = async () => {
    
    FormLoadFuncsStartFunc();

    await ShowAllStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });

    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

StartFunc().then();