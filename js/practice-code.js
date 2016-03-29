var name = "Ronald Schaeffer"
var formattedName =	HTMLheaderName.replace
("%data%", name);

var role = "Web Developer"
var formattedRole =	HTMLheaderRole.replace
("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

// break ****

var bio = {
	"name" : "Ronald",
	"role" : "Web Developer",
	"contactInfo" : {
		"mobile": "704-300-5618",
		"email": "captronnc@yahoo.com",
		"github": "captronnc",
		"location": "North Carolina"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc et etc.",
	"skills": ["fixing stuff", "watching stuff", "sleeping"],
	"bioPic": "images/chefron.jpg"
}

$("#main").append(bio.contactInfo.mobile);

// break **** Dot.Notation

var work = {};
	work.currentJobPosition = "Chef & Culinary Instructor";
	work.employer = "TJCA";
	work.yearsWorked = "5";
	work.city = "Mooresboro";


$("#main").append(work.currentJobPosition);

// break **** [:Bracket Notation"]

var edu = {};
	edu["lastSchool"] = "MSU";
	edu["yearsAttended"]= "2014-16";
	edu["city"]= "Stark Vegas";

$("#main").append(edu["city"]);

// break **** "object": "literal" or JSON

var education = {
	"schools": [
		{
			"name": "MSU",
			"city": "Stark Vegas",
			"major": "Technology Teacher Education"
		},
		{
			"name": "Udacity",
			"city": "Mountain View",
			"major":"Front-end Development"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Development",
			"school": "Udacity",
			"dates": "2016",
			"url": "http://www."
		}
	]

}

// break **** JSON

var education = {
	"schools": [
	{
		"name": "MSU",
		"city": "Stark Vegas",
		"degree": "BS",
		"major": ["compSci", "French"]
	},
	{
		"name": "MSU",
		"city": "Stark Vegas",
		"degree": "BS",
		"major": ["compSci", "French"]
	}
	]
}
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj) {
    var locationArray = [];

    for(job in work.jobs) {
    	var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
    }

console.log(locationizer(work));


function inName(name) {
	var name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0]+ " " + name[1];
}

$("#main").append(internationalizeButton);

function numberAdder () {
	var text, number;

	text = $(this).text();

	number = text.length;

	$(this).text(text + " " + number);
}

$('p').each(numberAdder);