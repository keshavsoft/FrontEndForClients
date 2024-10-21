import { StartFunc as ShowAllStartFunc } from "../ShowAll/ToDom/ShowInBody.js";
import { StartFunc as FormLoadFuncsStartFunc } from "./FormLoadFuncs.js";

let StartFunc = async () => {
    FormLoadFuncsStartFunc();

    await ShowAllStartFunc();
};

StartFunc().then();