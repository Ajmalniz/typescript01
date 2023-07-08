function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i])
    }
  }
  function make_great(magicians: string[]): string[] {
    let mg :string[]=magicians
    for (let i = 0; i < mg.length; i++) {
      mg[i] = "Great " + mg[i];
    }
    return mg
  }
  
  const magicians: string[] = ["Asif Zardari", "Nawaz Sharif", "Imran Khan", "Tahir"]
  let copy :string[] = make_great([...magicians])
  console.log("Origanl")
  show_magicians(magicians)
  console.log("Copy after adding Great")
  show_magicians(copy)