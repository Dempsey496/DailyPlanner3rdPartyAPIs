var displayDate = document.getElementById("currentDay");
// console.log(moment()._locale._calendar.lastDay);
// console.log(document);
// console.log(moment());
// displayDate.innerHTML="Today's date: " + today;
var timeArray = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"];
function resetDate(){
    displayDate.innerHTML="Today's date: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}
setInterval(resetDate, 1000);

for(let i=0;i<9;i++){
    var container=$(".container");
    container.append(`<section class="row">
    <time class="time-block col-md-2 col-sm-2">${timeArray[i]}</time>
    <input class="description col-md-8 col-sm-8"></input>
    <button class="saveBtn col-md-2 col-sm-2">click</button>
    </section>
    
    `)
}

