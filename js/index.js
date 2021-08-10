console.log("hello world");

console.log("I am ready!");



var navigatorName = "Joe"

console.log(`The Navigators name is ${navigatorName}`)


var driverName = "Kevin"

console.log(`The drivers name is ${driverName}`)



if (driverName.length > navigatorName.length)
    console.log(`The driver has the longest name, it has ${driverName.length} characters.`)


 else if (navigatorName.length > driverName.length)
      console.log(`It seems that the navigator has the longest name, it has ${navigatorName.length} characters.`)


     else console.log(`Wow, you both have equally long names,  characters!`)




console.log(  driverName.split('').join(' ').toUpperCase(''))


let navigatorReverse = []
for(let i=navigatorName.length-1; i >=0; i--){
  navigatorReverse.push(navigatorName[i])
}

console.log( navigatorReverse.join('') )



let names = [driverName, navigatorName];
console.log(names)

names.sort();
console.log(names)


if (driverName.localeCompare(navigatorName) === -1){
  console.log(`The ${driverName} name goes first.`)
}
else if ( driverName.localeCompare(navigatorName) === 1) {
  console.log(`Yo, the ${navigatorName} goes first definitely.`) 
}
else {
  console.log(`What?! You both have the same name?`) }
