let FromNode = async () => {
    try {
        let jVarLocalFetchUrl = `/bin/pos/MaxRow`;
        const response = await fetch(jVarLocalFetchUrl);
        return await response;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };