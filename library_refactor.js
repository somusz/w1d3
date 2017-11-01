var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (var plylst in this.playlists) {
      console.log(this.playlists[plylst].id + ": " + this.playlists[plylst].name + " - " + this.playlists[plylst].tracks.length + " tracks");
    }
  },
  printTracks: function () {
    for (var trck in this.tracks) {
      console.log(this.tracks[trck].id + ": " + this.tracks[trck].name + " by " + this.tracks[trck].artist + " (" + this.tracks[trck].album + ")")
    }
  },
  printPlaylist : function (playlistId) {
    console.log(playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
    for (i = 0; i < this.playlists[playlistId].tracks.length; i++) {
      console.log(this.playlists[playlistId].tracks[i] + ": "
        + this.tracks[this.playlists[playlistId].tracks[i]].name + " by "
        + this.tracks[this.playlists[playlistId].tracks[i]].artist + " ("
        + this.tracks[this.playlists[playlistId].tracks[i]].album + ")"
      );
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    console.log(this.playlists[playlistId].tracks);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var trckId = this.uid();
    this.tracks[trckId] = {
      id: trckId,
      name: name,
      artist: artist,
      album: album
    }
    console.log(this.tracks[trckId]);
  },
  addPlaylist: function (name) {
    var plylstId = this.uid();
    this.playlists[plylstId] = {
      id: plylstId,
      name: name,
      tracks: []
    }
    console.log(this.playlists[plylstId]);
  },
  printSearchResults: function(query) {
    for (trck3 in this.tracks) {
      if (
        (this.tracks[trck3].name).toLowerCase().search(query.toLowerCase()) > 0 ||
        (this.tracks[trck3].artist).toLowerCase().search(query.toLowerCase()) > 0 ||
        (this.tracks[trck3].album).toLowerCase().search(query.toLowerCase()) > 0
      ) {
        console.log(this.tracks[trck3]);
      }
    }
  }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
library.printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
library.printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
library.printPlaylist("p01");
console.log(" - - - - - - - - ");
library.printPlaylist("p02");


// adds an existing track to an existing playlist
library.addTrackToPlaylist("t03","p01");


// generates a unique id
// (use this for addTrack and addPlaylist)


// adds a track to the library
library.addTrack("Metroland","Mark Knopfler","Metroland OST");


// adds a playlist to the library
library.addPlaylist("Chill");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
library.printSearchResults("Monkey");
console.log("----------------------");
library.printSearchResults("monkey");
console.log("----------------------");
library.printSearchResults("1952");