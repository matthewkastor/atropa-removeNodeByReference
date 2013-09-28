var removeNodeByReference = require('../src/atropa-removeNodeByReference.js');

try {
    Object.keys(removeNodeByReference).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = removeNodeByReference[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-removeNodeByReference.js');
}

Object.keys(removeNodeByReference.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = removeNodeByReference.data[prop];
    }
);
