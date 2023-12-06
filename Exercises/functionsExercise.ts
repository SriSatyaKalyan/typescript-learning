export{}

function twoFers(person: string = "you"): string {
    return `One for ${person}, one for me.`;
}

console.log(twoFers())        // => "One for you, one for me"
console.log(twoFers("Elton")) // => "One for Elton, one for me"

function isLeapYear(year: number): boolean{
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) return true;
    return false;
}

console.log(isLeapYear(2012));
console.log(isLeapYear(2013));