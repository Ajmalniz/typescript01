function make_album(artist: string, title: string, tracks?: number): object {
    const album: any = {
      artist: artist,
      title: title,
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Creating albums without the number of tracks
  const album1 = make_album("Atif Aslam", "Doorie");
  const album2 = make_album("Nusrat Fateh Ali", "Kise da yar na bichre");
  
  // Creating an album with the number of tracks
  const album3 = make_album("Sarmad Sindhi", "Album 4", 10);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  