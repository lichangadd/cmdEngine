/**
 * Created by huangxu on 15/7/30.
 */
var commandTemp = '%s :app:assemble%sRelease -Pandroid.injected.signing.store.file=%s -Pandroid.injected.signing.store.password=%s -Pandroid.injected.signing.key.alias=%s -Pandroid.injected.signing.key.password=%s';

exports.checkpoint = function (command, params, log) {

    if ('BUILD FAILED' == log) {
        return false;
    }

    if ('BUILD SUCCUSS' == log) {
        return true;
    }
}

exports.getCommandLine = function (params, properties) {
    var util = require("util");
    return util.format(commandTemp,
        properties.get('gradlew.path'),
        params['channel'],
        properties.get('sign.file'),
        properties.get('signing.store.password'),
        properties.get('signing.key.alias'),
        properties.get('signing.key.password'));
    //return 'echo helloworld!';
}
