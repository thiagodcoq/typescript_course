interface Movie{
    title:string,
    director:string,
    yearReleased:number,
    streaming:boolean,
    lenght?:number,
    logReview?:ReviewLogger
}

interface ReviewLogger{
    (review:string):void;
}

function GetReview(title: string): string | number {
    if (title == 'A New Hope'){
        return 'An instant classic!';
    }
    else{
        return Math.floor(Math.random()*10);
    }
}

function PrintMovieInfo(movie:Movie){

    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
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
// const LogMessage = (message: string) => console.log(message);
// LogMessage('Enjoy the movie!');


 let myMovie:Movie={
    title:'Rogue One',
    director: 'Gareth Edwards',
    yearReleased: 2016,
    streaming: true,
    lenght:133,
    logReview:(review:string)=> console.log(`Review: ${review}`)
 };

//  PrintMovieInfo(myMovie);

//  if(myMovie.logReview){
//     myMovie.logReview('A masterpiece');
// }


let printReview: ReviewLogger;
printReview=(review:string)=>console.log(`Viewer review: ${review}`);
printReview('I want to see it again');