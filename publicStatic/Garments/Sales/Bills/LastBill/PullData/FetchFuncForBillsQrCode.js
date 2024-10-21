let FromNode = async () => {
    try {
        let LocalRowpk = localStorage.getItem("RowPk")
        let jVarLocalFetchUrl = `/bin/BillsQrCode/FilterData/BillPk/${LocalRowpk}`;

        const response = await fetch(jVarLocalFetchUrl);

        return await response;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };