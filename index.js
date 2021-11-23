$(".di").on("click",function(){
  const className=this.name;
  $(".sheduleImg").attr("src", "shedules/"+className+".png" );
});













$(".ti").on("click",function(){
  const year =this.name;
  console.log(year);
  if(year === "14"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRNtGD1TSU3e1hb7EcPkwuxt0v3ec4HXvD-h9iV5fieNy4HAMGHTvlYj7x5pWAm8snVQuVUg1KrMOje/pubhtml" );
  }
  if(year === "15"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSJ8p72W8ezaRBVWhhT1FT9G7vTgKacBROqKVQIB232nJfvpCC9uouQ1bEzAwHsNJIJ7QEZlO0Jy7n2/pubhtml" );
  }
  if(year === "16"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vQgRP0Wme4n0HT6CbupBJuaypIGBxFsEE_31cWxJrdkMjX1pDPqaHmsRn-Lm7Be4yAIabK_RcZ_X5Wu/pubhtml " );
  }
  if(year === "17"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vSGqiLDyqfYjapOaD8-Ey50MxjlVnHW4xwuq-E3YWwtCpY85L_eOAgA-aqTDE29u9KGI7GpqKhDF9TH/pubhtml" );
  }
  if(year === "18"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSdpgLRuMBSt_QnjpTIVjnMXw6unsqsveEUxelfKEGF4nESVDzvMP1iv01qImvcuzH-ip9ky676NfX/pubhtml" );
  }
  if(year === "19"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vStWSMOU2-rFqNwNmCBBrBcSfJArEoIPgkDDaCA_NwVbD-UFeCdop44-mjBvD3P8V7yja2yFimZLKq8/pubhtml?gid=1642292271&single=true" );
  }
  if(year === "20"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTExUYcl2k2-BqKpn86zwMJQupaWvodjIIHWGJi_FMYjXBJ2ouM9XBESvawcVmSE9S9LPUIRrDlHGvt/pubhtml?gid=640581816&single=true" );
  }
  if(year === "fullList"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRRTxasBGv9eOib3lV5zv4UPUvDQ50pPgsu5z7lAepsrtVWPdDL7EluWf2LujtbHY795sQMk9SVPm6W/pubhtml?gid=640581816&single=true" );
  }  if(year === "statistic"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRRTxasBGv9eOib3lV5zv4UPUvDQ50pPgsu5z7lAepsrtVWPdDL7EluWf2LujtbHY795sQMk9SVPm6W/pubhtml?gid=818656181&single=true" );
  }
});










$(".mi").on("click",function(){
  const name =this.name;
  console.log(name);
  if(name === "statistic"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSlWvZnKftQYmtfA2s1ah7hzVewWMGmQSqiiU2xneifZqQOpzHSrhXEFslxS9NTGEHlAK3nszvFrv7/pubhtml?gid=671233339&single=true" );
  }
  if(name === "student's marks"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSlWvZnKftQYmtfA2s1ah7hzVewWMGmQSqiiU2xneifZqQOpzHSrhXEFslxS9NTGEHlAK3nszvFrv7/pubhtml?gid=1387853419&single=true" );
  }
  if(name === "analyse"){
    $(".table").attr("src", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTSlWvZnKftQYmtfA2s1ah7hzVewWMGmQSqiiU2xneifZqQOpzHSrhXEFslxS9NTGEHlAK3nszvFrv7/pubhtml?gid=735027430&single=true" );
  }

});
