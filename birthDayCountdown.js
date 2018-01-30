function birthdayCountdown(daysUtilMyBirthday){
  while(daysUtilMyBirthday>=0){
    if(daysUtilMyBirthday>=30){
      console.log(daysUtilMyBirthday+" util my birthday.such a long time.:(");
    }else if(daysUtilMyBirthday<30&&daysUtilMyBirthday>4){
      console.log(daysUtilMyBirthday+"util my birthday.So excited.:)");
    }else if(daysUtilMyBirthday>0&&daysUtilMyBirthday<5){
      console.log(daysUtilMyBirthday+" UTIL MY BIRTHDAY!!!");
    }else{
      console.log("Happy birthday!!!");
    }
    daysUtilMyBirthday--;
  }
  return null;
}

birthdayCountdown(60);