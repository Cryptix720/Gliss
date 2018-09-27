"use strict";

var list = [];
var regex = /(,|\r?\n|^)([^",\r\n]+|"(?:[^"]|"")*")?/g;
var match = null;
while (match = regex.exec(subject)) {
  // Don't let browsers get stuck in an infinite loop
  if (match.index == regex.lastIndex) regex.lastIndex++;
  // Here you can process the match stored in the match variable
  if (match[0] % 13 == 0) {
    list.push(match[0]);
  }
}