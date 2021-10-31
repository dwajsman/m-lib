const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

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
  },

  cl: function(string) {
    console.log(string);
  },

  printPlaylists: function() {

    for (const key in this["playlists"]) {
      if (Object.hasOwnProperty.call(this["playlists"], key)) {

        const element = this["playlists"][key];

        const numTracks = element["tracks"].length;
        const playListId = element["id"];
        const playListName = element["name"];

        console.log(`${playListId}: ${playListName} - ${numTracks} tracks`);

      }
    }


  },

  printTracks: function() {

    //console.log(library["tracks"]);

    for (const key in this["tracks"]) {
      if (Object.hasOwnProperty.call(this["tracks"], key)) {

        const element = this["tracks"][key];

        const trackId = element["id"];
        const trackName = element["name"];
        const trackArtist = element["artist"];
        const trackAlbum = element["album"];

        //console.log(trackId, trackName, trackArtist);
        // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
        console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);

      }
    }

  },

  addTrackToPlaylist: function(trackId, playlistId) {

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

  },

  printPlaylist: function(playlistId) {

    const playlistById = this["playlists"][playlistId];
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

      const trackObj = this["tracks"][trackId];
      const trackName = trackObj["name"];
      const trackArtist = trackObj["artist"];
      const trackAlbum = trackObj["album"];

      // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);

      //}
      //}



    }




  },

  printSearchResults: function(query) {

    // LIST ALL names

    for (const tracksId in this["tracks"]) {
      if (Object.hasOwnProperty.call(this["tracks"], tracksId)) {
        const trackName = this["tracks"][tracksId]["name"];
        const trackArtist = this["tracks"][tracksId]["artist"];
        const trackId = this["tracks"][tracksId]["id"];

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





  },

  addTrack: function(name, artist, album) {

  



    let newTrack = {
      id: generateUid(),
      name: name,
      artist: artist,
      album: album,
    };

    this["tracks"][newTrack["id"]] = newTrack;


  },

  addPlaylist: function(name) {

    let newPlaylist = {
      id: generateUid(),
      name: name,
      tracks: [],
    };

    this["playlists"][newPlaylist["id"]] = newPlaylist;


   


  },

};

//library.cl("Hello Library");

library.addTrackToPlaylist("t03", "p01");
library.printPlaylist("p02");
library.printSearchResults("T");
library.addTrack("name added", "artist new", "album hello");
library.addPlaylist("p23");


library.printPlaylists();

library.printPlaylists();
library.printTracks();