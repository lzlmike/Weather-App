var days=new Array(5);
var model={};
var dayMap=["one","two","three","four","five"];
var weeks=new Array(5);
var count=0;

var view={
	"switch":function(){
		var screen_one=document.getElementById("main");
		var screen_two=document.getElementById("main2");
		screen_one.style.display="none";
		screen_two.style.display="block";
	},

	"updateHeader":function(){
		var loc=document.getElementById("loc");
		var loca=model.loc.split(',');
		loc.textContent=loca[0]+', '+loca[1];
	},
	
	"clean":function(div){
		while(div.hasChildNodes()) div.removeChild(div.firstChild);
	},

	"updateTemp":function(i){
		var temp=document.getElementById(dayMap[i]).getElementsByClassName("temp_new")[0];
		view.clean(temp);
		var p=document.createElement("p");
		var img=document.createElement("img");
		img.src="images/Forecast_Highs.svg";
		img.style.width="25%";
		var text=document.createTextNode(weeks[i].high);
		p.appendChild(img);
		p.appendChild(text);

		temp.appendChild(p);

		var p1=document.createElement("p");
		var img1=document.createElement("img");
		img1.src="images/Forecast_Lows.svg";
		img1.style.width="25%";
		var text1=document.createTextNode(weeks[i].low);
		p1.appendChild(img1);
		p1.appendChild(text1);
		temp.appendChild(p1);
	},

	"updateImage":function(i){
		var weather=weeks[i].weather;
		var match;
		if(weather=="Sunny" || weather=="Mostly Sunny") {match="Sunny";}
		else if(weather=="Mostly Cloudy" || weather=="Cloudy") match="Cloudy";
	    else if(weather=="Partly Cloudy") match="Partly Cloudy";
		else if(weather=="Showers" || weather=="Rain") match="Rainy";
		else if(weather=="Scattered Thunderstorms" || weather=="Thunderstorms") match="Stormy";
		else if(weather=="windy") match="Wind";
		else match="Partly Cloudy";

		var pic=document.getElementById(dayMap[i]).getElementsByClassName("imge")[0];
		view.clean(pic);
		var img=document.createElement("img");
		img.src="images/Forecast_"+match+".svg";
		pic.appendChild(img);

		
	},

	"updateDay":function(i){
		var date=document.getElementById(dayMap[i]).getElementsByClassName("date")[0];
		view.clean(date);
		var b=document.createElement("b");
		var str=weeks[i].day.split(' ');
		var new_m;
		if(str[1]=="Jan") new_m="JANUARY";
		else if(str[1]=="Feb") new_m="FEBRUARY";
		else if(str[1]=="Mar") new_m="MARCH";
		else if(str[1]=="Apr") new_m="APRIL";
		else if(str[1]=="May") new_m="MAY";
		else if(str[1]=="Jun") new_m="JUNE";
		else if(str[1]=="Jul") new_m="JULY";
		else if(str[1]=="Aug") new_m="AUGUST";
		else if(str[1]=="Sep") new_m="SEPTEMBER";
		else if(str[1]=="Oct") new_m="OCTOBER";
		else if(str[1]=="Nov") new_m="NOVEMBER";
		else if(str[1]=="Dec") new_m="DECEMBER";
		else new_m=str[1];
 		var month=document.createTextNode(new_m+" "+str[0]);
		b.appendChild(month);
		date.appendChild(b);

		var p=document.createElement("p");
		var d=weeks[i].date;
		var new_d;
		if(d=="Mon") new_d="MONDAY";
		else if(d=="Tus") new_d="TUESDAY";
		else if(d=="Wed") new_d="WEDNESDAY";
		else if(d=="Thu") new_d="THURSDAY";
		else if(d=="Fri") new_d="FRIDAY";
		else if(d=="Sun") new_d="SUNDAY";
		else new_d="SATURDAY";
		var week=document.createTextNode(new_d);
		p.appendChild(week);
		date.appendChild(p);
	},

	"updateBot":function(i){
		var wind=document.getElementById(dayMap[i]).getElementsByClassName("bot")[0].getElementsByClassName("wind")[0];
		view.clean(wind);
		var p=document.createElement("p");
		var img=document.createElement("img");
		img.src="images/Forecast_Wind.svg";
		img.style.width="120%";
		var br=document.createElement("br");
		var speed=document.createTextNode(model.sp+"mpg");

		wind.appendChild(p);
		p.appendChild(img);
		p.appendChild(br);
		p.appendChild(speed);


		var pre=document.getElementById(dayMap[i]).getElementsByClassName("bot")[0].getElementsByClassName("pre")[0];
		view.clean(pre);
		var p1=document.createElement("p");
		var img1=document.createElement("img");
		img1.src="images/Forecast_Precipitation.svg";
		img1.style.width="120%";
		var br=document.createElement("br");
		var vis=document.createTextNode("5%");

		pre.appendChild(p1);
		p1.appendChild(img1);
		p1.appendChild(br);
		p1.appendChild(vis);
	},

	
	"updateTempOne":function(){
		var left=document.getElementById(dayMap[0]).getElementsByClassName("temp")[0].getElementsByClassName("left")[0];
		view.clean(left);
		var p=document.createElement("p");
		var img=document.createElement("img");
		img.src="images/Forecast_Highs.svg";
		img.style.width="20%";
		var high=document.createTextNode(weeks[0].high);
		p.appendChild(img);
		p.appendChild(high);
		left.appendChild(p);

		var p1=document.createElement("p");
		var img1=document.createElement("img");
		img1.src="images/Forecast_Lows.svg";
		img1.style.width="20%";
		var low=document.createTextNode(weeks[0].low);
		p1.appendChild(img1);
		p1.appendChild(low);
		left.appendChild(p1);

		var right=document.getElementById(dayMap[0]).getElementsByClassName("temp")[0].getElementsByClassName("right")[0];
		view.clean(right);
		var temp=document.createTextNode(model.temp);
		right.appendChild(temp);
	},

	"update":function(){
		if(count==0) view.switch();
		count++;
		view.updateDay(0);
		view.updateImage(0);
		view.updateTempOne();
		view.updateBot(0);
		view.updateHeader();
		for(var i=1;i<5;i++){
			view.updateDay(i);
			view.updateTemp(i);
			view.updateImage(i);
		}
	}
};


function oneDayWeather(h,l,t,d,x){
	this.high=h;
	this.low=l;
	this.weather=t;
	this.date=d;
	this.day=x;
}

function createModel(m,x,a,b,c,d,e,f,g){
	this.temp=m;
	this.month=x;
	this.loc=a;
	this.sp=b;
	this.one=c;
	this.two=d;
	this.three=e;
	this.four=f;
	this.five=g;
}

function callbackFunction(jsonData){
	console.log(jsonData);
	var high,low,text,date,month;
	var forecast=jsonData.query.results.channel.item.forecast;
	for(var i=0;i<5;i++){
		high=forecast[i].high;
		low=forecast[i].low;
		text=forecast[i].text;
		date=forecast[i].day;
		day=forecast[i].date
		days[i] =new oneDayWeather(high,low,text,date,day);
		weeks[i]=days[i];
	}
	var location=jsonData.query.results.channel.location;
	var loc=location.city+","+location.region+", "+location.country;
	var wspeed=jsonData.query.results.channel.wind.speed;
	var month=jsonData.query.results.channel.lastBuildDate;
	var temp=jsonData.query.results.channel.item.condition.temp;

	model=new createModel(temp,month,loc,wspeed,days[0],days[1],days[2],days[3],days[4]);
	view.update();
}

function lookupWoeid(){
	var zip;
	if(count==0) zip=document.getElementById("zip").value;
	else{
		zip=document.getElementById("zip2").value;
	}
	getNewPlace(zip);
}

function getNewPlace(place){
	var script=document.createElement("script");
	script.src="https://query.yahooapis.com/v1/public/yql?q=select \
	woeid,name,admin1,country  from   geo.places where text='"+place+"' & \
	format=json & callback=placeCallback";
	document.body.appendChild(script);
	setTimeout(function(){document.body.removeChild(script);}, 2000);
}

function placeCallback(data){
	if(data.query.results==null){
		alert("no such place");
		return;
	}
	else{
		if (data.query.results.place[0] == undefined) {
	    place = data.query.results.place;
		}
		else {
	    	place = data.query.results.place[0];
		}
		var woeid = place.woeid;
    }
    weather(woeid);
}

function weather(woe){
	var script=document.createElement("script");
	script.src="https://query.yahooapis.com/v1/public/yql?q=select * from \
	weather.forecast where woeid="+woe+"&format=json&callback=callbackFunction";
	document.body.appendChild(script);
	setTimeout(function(){document.body.removeChild(script);}, 2000);
	console.log(name);
}