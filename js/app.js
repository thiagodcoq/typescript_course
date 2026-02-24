"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetReview(title) {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(title, yearReleased, ...cast) {
    console.log(`Title: ${title}`);
    console.log(`Year Released: ${yearReleased}`);
    console.log('Cast:');
    for (const name of cast) {
        console.log(` ${name}`);
    }
}
//Arrow function
// let adder = (a:number,b:number):number =>a+b;
// let sum = adder(2,3); //5
// let scores: number[] = [70,125,85,110];
// let highScores: number[];
// highScores = scores.filter((element,indexe,array)=>{
//     if (element>100){
//         return true
//     }
// });
const LogMessage = (message) => console.log(message);
LogMessage('Enjoy the movie!');
//PrintMovieInfo('A New Hope',1977,'Carrie','Mark','Harrison');
//# sourceMappingURL=app.js.map