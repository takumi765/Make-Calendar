const { check } = require("optimist");

//うるう年を判定する関数
module.exports.checkUruu = function(year){
    if(year%400===0){
        return 1;
    }else if(year%4===0&&year%100!=0){
        return 1;
    }
    return 0;
}

//渡された配列の合計を返す関数
module.exports.count=(arry)=>{
    var total=0;
    for(var i=0;i<arry.length;i++){
        total+=arry[i];
    }
    return total;
}

//渡された（年，月）までの日数をカウントする関数
module.exports.countDay=function(year, month){
    var day=0;
    var total_day=0;
    var pattern1 = [31,28,31,30,31,30,31,31,30,31,30,31];
    var pattern2 = [31,29,31,30,31,30,31,31,30,31,30,31];
    var pat;

    for(var i = 0;i<year-1;i++){
        if(this.checkUruu(i)){
            pat=pattern2;
        }else{
            pat=pattern1;
        }
        total_day+=this.count(pat);
    }
    //console.log(total_day);
    
    if(this.checkUruu(year)){
        total_day+=this.count(pattern2.slice(0,month-1));
    }else{
        total_day+=this.count(pattern1.slice(0,month-1));
    }

    return total_day;
}

module.exports.makeCalendar=(year, month,space)=>{
    console.log("\n西暦%d年\n%d月",year,month);
    console.log(" 月 火 水 木 金 土 日");
    pre=0;
    for(var i = -space;i<(this.countDay(year,month+1)-this.countDay(year,month));i++){
        if(i<0){
            process.stdout.write(" 　");
        }else if(i<9){
            process.stdout.write("  "+String(i+1));
        }else{
            process.stdout.write(" "+String(i+1));
        }
        if((i+1+space)%7===0){
            console.log("");
            pre=i+space;
        }
    }
    /* console.log((this.countDay(year,month+1)-this.countDay(year,month)));
    console.log(space); */
}