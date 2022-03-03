const check=require("./check");

const fs = require("fs");

const Main = (input)=>{
    input = input.split("\n");
    var year = parseInt(input[0]);
    var month = parseInt(input[1]);

    //日にちの合計を求める
    //console.log(check.countDay(year,month))
    var total_day = check.countDay(year,month);
    var space = total_day%7;
    check.makeCalendar(year,month,space);
}

Main(fs.readFileSync("../txt/year.txt","utf8"));