function updateClock() {
    const now = new Date();
    let dname = now.getDay();
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        per = "AM";

        if(hou == 0){
            hou = 12;
        }
        if(hou > 12){
            hou = hou - 12;
            per = "PM";
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        const month = ["January","February","March","April","May",
                        "June","July","August","September","October",
                        "November","December"];
        const week = ["Sunday","Monday","Tuesday","Wednesday",
                      "Thursday","Friday","Saturday"];
        const ids = ["dayname","month","daynum","year","hour",
                     "minutes","second","period"];
        const values = [week[dname],month[mo],dnum.pad(2),yr.pad(2)
                        ,hou.pad(2),min.pad(2),sec.pad(2),per];

        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
  }