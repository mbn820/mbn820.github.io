
function convert() {
    var source = document.getElementById("sourceInput").value;

    var header = '{' + '\n'
        + '  "type": "record",' + '\n'
        + '  "name": "",' + '\n'
        + '  "namespace": "",' + '\n'
        + '  "fields": [' + '\n';

    var bottom = '  ]' + '\n'
        + '}';

    var output = source.split("\n")
                       .map(s => s.trim())
                       .map(s => extractFirstWord(s))
                       .map(s => convertToSchemaFormat(s))
                       .join("\n");

    document.getElementById("targetOutput").value = header + removeLastComma(output) + '\n' + bottom;
}

function extractFirstWord(str) {
    return str.split(" ")[0];
}

function convertToSchemaFormat(str) {
    return '    {' + '\n' +
    '      "name": "' + str + '",' + '\n' +
    '      "type": [ "null", "string" ]' + '\n' +
    '    },';
}

function removeLastComma(str) {
    if (str.charAt(str.length - 1) == ",") {
        return str.slice(0, -1);
    }
}

function copyOutput() {
    document.getElementById("targetOutput").select();
    document.execCommand("copy");
}

function clearSource() {
    document.getElementById("sourceInput").value = "";
}