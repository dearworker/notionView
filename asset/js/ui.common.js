$(document).ready(function() {
	infiniteMsg() //msg
});

function setClock() { //실시간 시간
	var dateInfo = new Date(),
		amPm = ""
		year = dateInfo.getFullYear(),
		month = modifyNum(dateInfo.getMonth() + 1),
		date = modifyNum(dateInfo.getDate()),
		hour = modifyNum(dateInfo.getHours()),
		min = modifyNum(dateInfo.getMinutes());
		
	const week = ["일", "월", "화", "수", "목", "금", "토",],
		dayweek = week[dateInfo.getDay()];

	if(hour < 13) {
		amPm = "오전"
		hour = hour;
	}else {
		amPm = "오후"
		hour =  hour - 12;
	}

	function modifyNum (time) {
		if(parseInt(time) < 10) {
			return "0" + time;
		}else {
			return  time;
		}
	}

	$(".phone .am_pm_txt").html(amPm);
	$(".phone .time").html(hour + " : " + min);
	$(".phone .date").html(year + "년 " + month + "월 " + date + "일 " + dayweek + "요일");
};

function infiniteMsg() {
	$(".phone .msg").addClass("on");
	setInterval (function() {
		setTimeout(function() {
			$(".phone .msg").removeClass("off");
			$(".phone .msg").addClass("on");
		}, 0)
		setTimeout(function() {
			$(".phone .msg").removeClass("on");
			$(".phone .msg").addClass("off");
		}, 15000)
	}, 60000);
};