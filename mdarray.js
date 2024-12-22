// Create the initial multi-dimensional array
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"]; // names
let subArray2 = [24, 65, 21, 5, 9]; // ages

// Restructure the arrays into a new multi-dimensional array
let structuredArray = [];

// Loop through the names and ages to create the new structure
for (let i = 0; i < subArray1.length; i++) {
    structuredArray.push([subArray1[i], subArray2[i]]);
}

// Log the structured multi-dimensional array [name, age] per line
structuredArray.forEach(item => {
    console.log(item);
});