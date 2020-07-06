//Objective is to find the largest substring that divides into both strings.

str1 = "ABCABC", str2 = "ABC"


//O(n) solution that has a pointer on the shorter string and tries every
//possible substring to see if it fits evenly.

//shorter string first
if (str1.length > str2.length) {
    return gcdOfStrings(str2, str1)
}

let start = 1
let length = str2.length
let length2 = str1.length
let max = 0
let result = ''

while (start <= str1.length) {
    let substring = str1.substring(0, start)
    let repeatTimes = length / substring.length
    let repeatTimes2 = length2 / substring.length
    if (substring.repeat(repeatTimes) == str2 && substring.repeat(repeatTimes2) == str1) {
        if (substring.length > max) {
            max = substring.length
            result = substring
        }
    }
    start++
}

return result