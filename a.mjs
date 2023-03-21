if (rs>5000){
    if(rs%5000>0){
        fivek=parseInt(rs/5000);
        rm=rs%5000;
    }
}
else if(rs>1000){
    if(rs%1000>0){
        onek=parseInt(rs/1000);
        rm=rs%1000;
    }
}