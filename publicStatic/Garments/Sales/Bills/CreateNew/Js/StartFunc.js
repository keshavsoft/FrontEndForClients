import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";

const StartFunc = () => {
    StartFuncShowOnDom();
    StartFuncAddlisteners();
};

StartFunc();