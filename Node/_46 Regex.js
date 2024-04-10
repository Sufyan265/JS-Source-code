
//  for full ditail about 'regex' visit "regexr.com"

// is tra hm globaly kisi paragarph me changes ya relacment kr skty he ↓ 
const regex = /very/g;

let text = "Sufyan is very very nice and very good boy";

// replace method return new string with replaced value ↓ 
let result = text.replace(regex, 'VERY');
console.log(result)

