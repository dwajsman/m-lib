const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  //console.log(library["playlists"])

  for (const key in library["playlists"]) {
    if (Object.hasOwnProperty.call(library["playlists"], key)) {

      const element = library["playlists"][key];

      const numTracks = element["tracks"].length;
      const playListId = element["id"];
      const playListName = element["name"];

      console.log(`${playListId}: ${playListName} - ${numTracks} tracks`);

    }
  }


};

//printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

  //console.log(library["tracks"]);

  for (const key in library["tracks"]) {
    if (Object.hasOwnProperty.call(library["tracks"], key)) {

      const element = library["tracks"][key];

      const trackId = element["id"];
      const trackName = element["name"];
      const trackArtist = element["artist"];
      const trackAlbum = element["album"];

      //console.log(trackId, trackName, trackArtist);
      // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);

    }
  }

};

//printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {

  const playlistById = library["playlists"][playlistId];
  const tracks = playlistById["tracks"];

  // FIRST LINE CODE
  // p01: Coding Music - 2 tracks

  const numTracks = playlistById["tracks"].length;
  const playListId = playlistById["id"];
  const playListName = playlistById["name"];

  console.log(`${playListId}: ${playListName} - ${numTracks} tracks`);

  for (let index = 0; index < tracks.length; index++) {

    const trackId = tracks[index];
    //console.log(trackId);

    const trackObj = library["tracks"][trackId];
    const trackName = trackObj["name"];
    const trackArtist = trackObj["artist"];
    const trackAlbum = trackObj["album"];

    // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
    console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);

    //}
    //}



  }




};


// printPlaylist("p01");
// console.log(" --- ");
// printPlaylist("p02");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

  if (!library["playlists"][playlistId]) {
    //console.log("OOoops!");
    return;
  }

  // All tracks
  const idList = library["tracks"];
  //console.log(Object.keys(idList));

  //list of tracks for selected playlist
  const playlistTarget = library["playlists"][playlistId]["tracks"];
  //console.log("BEFORE:", playlistTarget);

  // check if track exists
  if (Object.keys(idList).includes(trackId)) {

    // check if track is already on playlist

    if (!Object.keys(playlistTarget).includes(trackId)) {
      //console.log("ready to add");

      // add track to playlist
      playlistTarget.push(trackId);

    }

    //console.log("AFTER:", playlistTarget);

  }

};


//addTrackToPlaylist("t03", "p01");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

//console.log(generateUid());

// adds a track to the library
const addTrack = function(name, artist, album) {

  //console.log( "BEFORE", library["tracks"]);


  
  let newTrack = {
    id: generateUid(),
    name: name,
    artist: artist,
    album: album,
  };

  library["tracks"][newTrack["id"]] = newTrack;


  //console.log(newTrack);

  //console.log( "AFTER", library["tracks"]);


};

//addTrack("Buba", "Ethnix", "Adam v'Nachash");


// adds a playlist to the library
const addPlaylist = function(name) {

  //console.log(library["playlists"]);

  let newPlaylist = {
    id: generateUid(),
    name: name,
    tracks: [],
  };

  library["playlists"][newPlaylist["id"]] = newPlaylist;


  //console.log(library["playlists"]);


};

addPlaylist("My Songs");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

  // LIST ALL names

  for (const tracksId in library["tracks"]) {
    if (Object.hasOwnProperty.call(library["tracks"], tracksId)) {
      const trackName = library["tracks"][tracksId]["name"];
      const trackArtist = library["tracks"][tracksId]["artist"];
      const trackId = library["tracks"][tracksId]["id"];

      //console.log(element);
      //console.log(element.search("Four"));

      if (trackName.toLowerCase().search(query.toLowerCase()) >= 0) {
        console.log("FOUND NAME:", trackName);
      }
      if (trackArtist.toLowerCase().search(query.toLowerCase()) >= 0) {
        console.log("FOUND ARTIST:", trackArtist);
      }
      if (trackId.toLowerCase().search(query.toLowerCase()) >= 0) {
        console.log("FOUND ID:", trackId);
      }

    }
  }





};

//printSearchResults("T")