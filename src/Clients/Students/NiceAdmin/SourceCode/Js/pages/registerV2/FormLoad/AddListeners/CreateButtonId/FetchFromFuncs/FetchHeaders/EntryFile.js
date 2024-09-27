import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalKeys = { ...KeysJson };

    jVarLocalKeys.body = {};

    jVarLocalKeys.body.StudentName = jFLocalStudentNameId();
    jVarLocalKeys.body.Mobile = jFLocalMobileId();
    jVarLocalKeys.body.Email = jFLocalEmailId();
    jVarLocalKeys.body.College = jFLocalCollegeSelectId();

    const position = await getCurrentPosition();
    console.log(position)
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    jVarLocalKeys.body.latitude = lat;
    jVarLocalKeys.body.longitude = lon;
    console.log("jVarLocalKeys : ", jVarLocalKeys.body);
    jVarLocalKeys.body = JSON.stringify(jVarLocalKeys.body);

    return await jVarLocalKeys;
};

let jFLocalStudentNameId = () => {
    let jVarLocalStudentNameId = 'StudentNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalStudentNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalMobileId = () => {
    let jVarLocalMobileId = 'MobileId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalMobileId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalEmailId = () => {
    let jVarLocalEmailId = 'EmailId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalEmailId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalCollegeSelectId = () => {
    let jVarLocalCollegeSelectId = 'CollegeSelectId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCollegeSelectId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        let jVarLocalLocation = {};
        jVarLocalLocation.latitude = latitude;
        jVarLocalLocation.longitude = longitude;
        console.log("jVarLocalLocation : ", jVarLocalLocation);

        return jVarLocalLocation;
    };

    function error() {
        console.log("aaaaaaaaeeeeee : ");
    }

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
    } else {
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition(success, error);
    }
};

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        )
    })
};

export { StartFunc }