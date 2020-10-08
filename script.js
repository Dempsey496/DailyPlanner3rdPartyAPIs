$(document).ready(() => {
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
    
    var container=$(".container");
    
    function init() {
        var tmpOBJ = window.localStorage.getItem("planner")
        //not sure if this is needed but it erases the saved data after a day
        if (!!tmpOBJ) {
            tmpOBJ = JSON.parse(tmpOBJ)
            if (tmpOBJ.expires > timeOBJ.expires) {
                window.localStorage.removeItem("planner");
            }else {
                timeOBJ = tmpOBJ;
            }
        
        }
        for(var i=0;i<9;i++){
            container.append(`<section class="row" id="${i}">
            <time class="time-block col-md-2 col-sm-2">${timeArray[i]}</time>
            <input class="description col-md-8 col-sm-8" Value="${timeOBJ[i.toString()]}"></input>
            <button class="saveBtn col-md-2 col-sm-2">click</button>
            </section>
            
            `)
        }
    }
    
    var timeOBJ = {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        'expires': (new Date().getTime() + 86400000)
    }
    //use var if you need to stick with ecma 5
    //ecma 6 uses let and const. 
    
    $(document).on('click','.saveBtn',function(){
        console.log(this)
        var parentEl = $(this).parent(),
            textBEl = parentEl.find("input");
        if (!!textBEl.length) {
            var text = textBEl[0].value,
                parentID = parentEl.attr("id");
                if (!!parentID) {
                    timeOBJ[parentID.toString()] = text
                    window.localStorage.removeItem("planner");
                    window.localStorage.setItem('planner', JSON.stringify(timeOBJ));
                }
        }
        //window.localStorage.setItem('planner', JSON.stringify(timeOBJ));
    });
    window.onload = init();
    })
    

