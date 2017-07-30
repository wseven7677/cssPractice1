(function(){
	var otime = document.getElementsByClassName("text-time")[0],
		odate = document.getElementsByClassName("text-date")[0],
		ochinaDate = document.getElementsByClassName("text-china-date")[0],
		theDate = new Date(),

		hour = theDate.getHours()+1,
		min = theDate.getMinutes()+1,
		mon = theDate.getMonth()+1,
		date = theDate.getDate(),
		day = theDate.getDay(),
		cnDay = ['日','一','二','三','四','五','六'];

	otime.innerText = hour + ':' + min;
	odate.innerText = mon + '月' + date + '日 ' + '星期' + cnDay[day];
})();