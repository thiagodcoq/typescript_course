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
PrintMovieInfo('A New Hope', 1977, 'Carrie', 'Mark', 'Harrison');
//# sourceMappingURL=app.js.map