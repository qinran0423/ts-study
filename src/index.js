"use strict";
var sexType;
(function (sexType) {
    sexType[sexType["BOY"] = 0] = "BOY";
    sexType[sexType["GIRL"] = 1] = "GIRL";
})(sexType || (sexType = {}));
const mick = {
    name: "mick",
    age: 20,
    sex: sexType.BOY
};
const randy = {
    name: 'randy',
    age: 22,
    sex: sexType.GIRL
};
console.log(mick, randy);
