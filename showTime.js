function showTime(hour,minute,period){
    time={
      "hour":hour,
      "minute":minute,
      "period":period,
    };
    if(time.hour===12&&time.minute===0){
      return "It's noon";
    }else if(time.hour===24&&time.minute===0){
      return "It's midnight";
    }else if(time.period==="AM"){
      time.period="in the morning";
    }else{
      time.period="in the evening";
    }
    if(time.minute>30){
      time.minute="almost";
      time.hour=time.hour+1;
    }else{
      time.minute="just after";
      time.hour=time.hour-1;
    }
    return "It's "+time.minute+" "+time.hour+" "+time.period;
    
  }
  
  console.log(showTime(12,00,"AM"));