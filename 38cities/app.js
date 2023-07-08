function describe_city(city, country) {
    if (country === void 0) { country = "paksitan"; }
    console.log("".concat(city, " is in ").concat(country));
    return;
}
describe_city("karachi");
describe_city("lahore");
describe_city("delhi", "India");
