const fs = require("fs");
function addDataToFile(id, newData) {
  // Read the existing data from the file
  const existingData = JSON.parse(fs.readFileSync("./data.json"));

  // Add the new data entry to the existing data object
  existingData[id] = newData;

  // Write the updated data back to the file
  fs.writeFileSync("./data.json", JSON.stringify(existingData, null, 2));
}

function updateDataInFile(id, updatedData) {
  const existingData = JSON.parse(fs.readFileSync("./data.json"));

  if (existingData.hasOwnProperty(id)) {
    existingData[id] = { ...existingData[id], ...updatedData };

    fs.writeFileSync("./data.json", JSON.stringify(existingData, null, 2));
    console.log("succesful update");

    return true; // Indicate successful update
  }

  console.log("some error occured");
  return false; // Indicate data entry not found
}

function confirmVerifiedInBlockchain(obj) {
  obj.forEach((data) => {
    data.verifiedInBlockChain = true;
    updateDataInFile(data.eventId, data);
  });
  console.log("data verified in blockchain successfully");
}

function fetchDataFromFile(condition) {
  // Read the existing data from the file
  const existingData = JSON.parse(fs.readFileSync("./data.json"));

  // Filter the data based on the condition
  const filteredData = Object.values(existingData).filter((data) => {
    // Replace the condition logic with your own criteria
    return data.matchFinished == condition;
  });

  return filteredData;
}

function reduceSpace() {
  const obj = fetchDataFromFile(1);
  obj.forEach((event) => {
    console.log(event);
    if (event.verifiedInBlockChain == true) {
      deleteDataFromFile(event.eventId);
    }
  });
}

function deleteDataFromFile(id) {
  const existingData = JSON.parse(fs.readFileSync("./data.json"));

  if (existingData.hasOwnProperty(id)) {
    delete existingData[id];

    fs.writeFileSync("./data.json", JSON.stringify(existingData, null, 2));
    console.log("deleted");

    return true; // Indicate successful deletion
  }
  console.log("not deleted");
  return false; // Indicate data entry not found
}

module.exports = {
  addDataToFile,
  updateDataInFile,
  fetchDataFromFile,
  confirmVerifiedInBlockchain,
  updateDataInFile,
  reduceSpace,
};

// addDataToFile("1");
