
function convert() {
    var source = document.getElementById("sourceInput").value;

    var output = source.split("\n")
                       .map(s => s.trim())
                       .map(s => extractFirstWord(s))
                       .map(s => convertToSchemaFormat(s))
                       .join("\n");

    document.getElementById("targetOutput").value = output;
}

function extractFirstWord(str) {
    return str.split(" ")[0];
}

function convertToSchemaFormat(str) {
    return '{' + '\n' +
    '  "name": "' + str + '",' + '\n' +
    '  "type": [ "null", "string" ]' + '\n' +
    '},';
}