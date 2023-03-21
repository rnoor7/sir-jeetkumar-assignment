import PromptSync from "prompt-sync";
const prompt=PromptSync();

let fivek=0,onek=0,fiveh=0,h=0,fifty=0,ten=0,twenty=0,five=0,two=0,one=0;
let rs=parseInt(prompt("Enter Amount in Rupees: "));
let a=rs;
if(rs>1){
    if(rs>2){
        if(rs>5){
            if (rs>10){
                if(rs>20){
                    if(rs>50){
                        if(rs>100){
                            if(rs>500){
                                if(rs>1000){
                                    if(rs>5000 && rs%5000>0){
                                        fivek=parseInt(rs/5000);
                                        rs=rs%5000;
                                    }
                                    onek=parseInt(rs/1000);
                                    rs=rs%1000;
                                }
                                fiveh=parseInt(rs/500);
                                rs=rs%500;
                            }
                            h=parseInt(rs/100);
                            rs=rs%100;
                        }
                        fifty=parseInt(rs/50);
                        rs=rs%50;
                    }
                    twenty=parseInt(rs/20);
                    rs=rs%20;
                }
                ten=parseInt(rs/10);
                rs=rs%10;
            }
            five=parseInt(rs/5);
            rs=rs%5;
        }
        two=parseInt(rs/2);
        rs=rs%2;
    }
    one=parseInt(rs/1);
    rs=rs%1;
}
console.log("total amount: "+a);
console.log("5000 notes: "+fivek);
console.log("1000 notes: "+onek);
console.log("500 notes: "+fiveh);
console.log("100 notes: "+h);
console.log("50 notes: "+fifty);
console.log("20 notes: "+twenty);
console.log("10 notes: "+ten);
console.log("Five notes: "+five);
console.log("Two notes: "+two);
console.log("One notes: "+one);