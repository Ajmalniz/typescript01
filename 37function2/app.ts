function make_shirt(size :string="Large",msg :string="I love Type Script"): void{
console.log(`creating ${size} shirt with message ${msg}`)
return ;
}
make_shirt("XL","Dil Dil Pakistan")
make_shirt()
make_shirt(undefined,"PAIAC")
make_shirt("small")