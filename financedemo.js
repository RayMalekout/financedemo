//var Finance = require('financejs');
 var finance = new Finance();

var amor = function() {

 window.alert(finance.AM(20000, 7.5 , 5, 0));

};

var futureVal = function() {

 window.alert(finance.FV(0.5,1000,12));

};

var irr = function() {

window.alert(finance.IRR(-500000,200000,300000, 200000));

}
