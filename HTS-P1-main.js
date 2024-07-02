/// [gif] Aight here we go again.

var fs = require("fs");
var wordlist = fs.readFileSync("./wordlist.txt", "utf-8").toString();
var textByLine = wordlist.split("\r\n")
var scrambled = fs.readFileSync("./scrambled.txt", "utf8").toString();
var textByEverySecondLine = scrambled.split("\r\n")

var GodSaveMe = []
for (const word of textByEverySecondLine) {
    var dissociation = word.split("").sort().join("")
    for (const uhhh of textByLine) {
        var banana = uhhh.split("").sort().join("")
        if (dissociation == banana) {
            GodSaveMe.push(uhhh)
        }
    }
}

console.log(GodSaveMe.join())


/// Don't ask, adhd hit with the names
/// :]]