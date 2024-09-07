//Using as keyword

// let value:any = "Playwright Automation";
// let stringCount:number = (value as string).length;
// console.log(stringCount);
// console.log(`${typeof value} ${typeof stringCount}`);

//Using angular brackets
let value:any = "Playwright Automation";
let stringCount:number = (<string>value).length;
console.log(stringCount);
console.log(`${typeof value} ${typeof stringCount}`);


