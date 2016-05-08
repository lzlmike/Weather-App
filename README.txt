ECS89H Weather APP
Author: Zuolin Li
This design is based on Jasica Lam's design.

I chose this design since it looks very clear for each day's weather. It seemed not hard to implement, but the I found that it was not easy to arrange those pictures and font to fits a responsive website.

I used MVC model to implement the app. Object model contains all the data of 5 day's  weather information through Yahoo API. I stored those data using object constructor. In the model object, it contains "one","two","three","four","five", which are all objects, and inside each object, it is information of each day. Model also contains location, windspeed element. 

In the view model, it contains all the method I used to update the html of different places. 
	view={
		switch(),updateHeader(),clean(),updateTemp(),updateImage(),updateDay(),updateBot(),updateTempOne(),update()
	}

switch() is used to switch from start page to another page, since I used individual divs for the start div, which just asks for the input of the place, and the second page shows the weather informaion.

updateHeader() is used to update the place and text in the top side.
clean() is used to clean the childNodes of a specific div.
updateTemp() is used to update the temperature of the day.
updateImage() is used to update the image of each day. ex:sunny;
updateDay() is used to update the date for each day.
updateBot() is used to update the bottom part of "Today",not other four days.
updateTempOne() is used to update the temperature of "Today", since its layout is different from others.
update() is just the whole update of the page using above methods.


The rest part of the code in javascript is just the callback function or getting data from yahoo.

I also implement the phone-size part of this app, just write another css while the screen size is smaller then abut 690px i think.

That's all for this app.