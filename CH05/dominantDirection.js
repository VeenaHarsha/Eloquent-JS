function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  return scripts.reduce((c1,c2) => c1 > c2 ? c1 : c2).name;
}
function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");
	console.log(scripts)
 return scripts.reduce((a,b) => a.count > b.count ? a: b).name
}

console.log(textScripts("Hey Ram Ram Ram, مساء الخير"));
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
let fName = "/home/veena/Documents/My-Projects/EJS/CH05/scripts.js";
let inputFile = require("fs").readFileSync(fName, "UTF-8");
let SCRIPTS = inputFile.SCRIPTS;
console.log(SCRIPTS)
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl