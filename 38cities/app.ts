function describe_city (city :string , country :string="paksitan") :void {
console.log(`${city} is in ${country}`)
return;
}
describe_city("karachi")
describe_city("lahore")
describe_city("delhi","India")