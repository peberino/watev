const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

let giveEmptyRooms = (array) => {
  let emptyRooms = [];

  for (let suspect of array) {
    let emptyObj = {};
    for (let room of suspect.rooms) {
      if (Object.values(room)[0] === false) {
        emptyObj[`${Object.keys(room)[0]}`] = false;
      }
    }
    emptyRooms.push(emptyObj);
  }

  let [
    totalKitchen,
    totalBallroom,
    totalConservatory,
    totalBilliard,
    totalDining,
    totalLibrary,
  ] = [0, 0, 0, 0, 0, 0];

  for (let rooms of emptyRooms) {
    for (let i = 0; i < Object.keys(rooms).length; i++) {
      if (Object.keys(rooms)[i] === "kitchen") {
        totalKitchen++;
      } else if (Object.keys(rooms)[i] === "ballroom") {
        totalBallroom++;
      } else if (Object.keys(rooms)[i] === "billiard room") {
        totalBilliard++;
      } else if (Object.keys(rooms)[i] === "conservatory") {
        totalConservatory++;
      } else if (Object.keys(rooms)[i] === "library") {
        totalLibrary++;
      } else if (Object.keys(rooms)[i] === "dining room") {
        totalDining++;
      }
    }
  }

  if (totalKitchen === 4) {
    console.log("No one was present at the kitchen.");
    return "No one was present at the kitchen.";
  } else if (totalBallroom === 4) {
    console.log("No one was present at the ballroom.");
    return "No one was present at the ballroom.";
  } else if (totalBilliard === 4) {
    console.log("No one was present at the billiard room.");
    return "No one was present at the billiard room.";
  } else if (totalConservatory === 4) {
    console.log("No one was present at the conservatory.");
    return "No one was present at the conservatory.";
  } else if (totalDining === 4) {
    console.log("No one was present at the dining room.");
    return "No one was present at the dining room.";
  } else if (totalLibrary === 4) {
    console.log("No one was present at the library.");
    return "No one was present at the library.";
  }
};

giveEmptyRooms(newDevelopment);
// let emptyRooms = giveEmptyRooms(newDevelopment);
