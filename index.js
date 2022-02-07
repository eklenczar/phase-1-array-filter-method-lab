// findMatching()
//       1) returns all drivers that match the passed in name
//       2) returns matching drivers if case does not match but letters do
//       3) returns an empty array if there is no match
//     fuzzyMatch()
//       4) returns a driver if beginning provided letters match
//       5) does not return drivers if only middle or ending letters match
//       6) does not return drivers if only middle or ending letters match
//     matchName()
//       7) accesses the data structure to check if name matches

// findMatching- This function takes an array of drivers' names and a string 
// as arguments, and returns the matching list of drivers. 
// The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string 
// as arguments for querying the array, and returns all drivers whose names 
// begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as 
// arguments. Each driver object has two properties: name and hometown. 
// The function should return each element whose name property matches the 
// provided string argument.

function findMatching(drivers, string) {
    const result = drivers.filter((driver) => (driver.toLowerCase() === string.toLowerCase()))
    return (result) 
} 

function fuzzyMatch(drivers, string) {
    const result = drivers.filter((driver) => (driver.slice(0, 2) === string))
    return (result)
}

function matchName(drivers, string) {
    const result = drivers.filter((driver) => (driver.name === string))
        return (result)
}