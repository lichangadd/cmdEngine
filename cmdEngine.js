var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('global.properties');

var fs = require('fs');
var units = {};
var cmdList = JSON.parse(fs.readFileSync('./cmdList.js', 'utf8'));
var exec = require('child_process').exec;

for (var i = 0; i < cmdList.length; i++) {
    var temp = cmdList[i];
    var unitName = temp.unit;
    var params = temp.params;
    var unit;
    if (!units[unitName]) {
        unit = require("./unit/" + unitName + ".js");
        units[unitName] = unit;
    } else {
        unit = units[unitName];
    }
    var cmd = unit.getCommandLine(params, properties);
    exec(cmd, function(error, stdout, stderr) {
        console.log(error)
    });

}