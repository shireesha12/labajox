/*eslint-env browser*/

var $ = function (id) {
  "use strict";
    return window.document.getElementById(id);
};
var init = function () {
var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
    "use strict";
    var i, xmldata, employee, html = "";
    if (xhr.status === 200 && xhr.readyState === 4) {
        xmldata = xhr.responseXML;
        employee = xmldata.getElementsByTagName("employee");
        for (i = 0; i < employee.length; i += 1) {
             html += "<strong>" + xmldata.getElementsByTagName("name")[i].childNodes[0].nodeValue + "</strong><br>";
             html += xmldata.getElementsByTagName("title")[i].childNodes[0].nodeValue + "<br><br>";
        }
        $("data").innerHTML = html;
    }
});

xhr.open("GET", "data/team.xml");
xhr.send();
};
window.addEventListener("load", function () {
   "use strict";
    var change;
    if (typeof change === "Object") {
        init()
    } else {
        change = setInterval(init, 15000)
    }
});
