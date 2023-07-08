var transport : string []= ["Yamaha YBR","Suzuki Alto","Halicopter","boat"]
// in pervious example i showed you how to itterate through for each loop
//now in this example i will explain how to itterate array using for loop
for (let i=0 ;i < transport.length;i++ ){
    console.log("I would like to own a "+ transport[i])
}
//transport.length will give us the length of the array so loop will run that much time
//the program is running fine but here is a question if array have 1000 record 
// then transoprt.length function will be called each time it may reduce the performance of the program
//soulation to this problem is store leght of a array in a seprate veriable before the start of the loop