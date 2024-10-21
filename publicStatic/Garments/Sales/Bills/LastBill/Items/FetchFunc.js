let StartFunc = async ({ inProjectName }) => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    try {
        let inFetchPostData = {
            inFolderName: "Masters",
            inFileNameOnly: "Items",
            inItemName: "ItemName",
            ScreenName: "ForDataList"
        };

        
        //   let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/WithChecking/CreateNew`;
        let jVarLocalFetchUrl = `/bin/Items/DataOnly`;

        // let jVarLocalFetchHeaders = {
        //     method: "post",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(inFetchPostData)
        // };

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();
        
        if (data) {
            LocalReturnObject.JsonData = data;
        };

        LocalReturnObject.KTF = true;
    } catch (error) {
        console.log("error:", error);
    };

    return await LocalReturnObject;
};

let LocalAfterSaveFunc = ({ inFetchPostData }) => {
    if (inFetchPostData.KTF) {
        //argon.showSwal('success-message');
        window.location = "../ShowAll/ShowAll.html?FromSave=true";
    } else {
        if ("KReason" in inFetchPostData) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: inFetchPostData.KReason,
                footer: '<a href="">Why do I have this issue?</a>'
            });
        };
    };

};

export { StartFunc };