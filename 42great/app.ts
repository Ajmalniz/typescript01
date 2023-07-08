function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i])
    }
  }
  function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "Great " + magicians[i];
    }
  }
  
  const magicians: string[] = ["Asif Zardari", "Nawaz Sharif", "Imran Khan", "Tahir"]
  make_great(magicians)
  show_magicians(magicians)
  