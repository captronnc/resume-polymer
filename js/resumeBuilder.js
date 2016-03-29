// bio ****

var bio = {
	"name": "Ronald Schaeffer",
	"role": "Web Developer",
	"contacts": {
		"mobile": "704-300-5618",
		"email": "captronnc@yahoo.com",
		"github": "captronnc",
		"twitter": "@ronschaeffer",
		"location": "North Carolina"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc et etc.",
	"skills": ["fixing stuff", "watching stuff", "keeping odd hours"],
	"bioPic": "images/chefron.jpeg"
}

// work ****

var work = {
	"jobs": [
	{
		"employer": "TJCA",
		"title": "Head Chef & Culinary Instructor",
		"dates": "now",
		"description": "Manager, cook, teacher.",
		"location": "Mooresboro, NC, US"
	},
	{
		"employer": "NASP",
		"title": "Project Manager & Training Specialist",
		"dates": "then",
		"description": "Developer, analyst, instructor.",
		"location": "Shelby, NC, US"
	}
	]
}

// education ****

var education = {
	"schools": [
		{
			"name": "MSU",
			"location": "Stark Vegas",
			"degree": "BS",
			"majors": "Technology Teacher Education",
			"dates": "2014-16",
			"url": "www.mstate.edu"
		},
		{
			"name": "CCC",
			"location": "Shelby, NC",
			"degree": "AA",
			"majors": "Business Administration",
			"dates": "1994-96",
			"url": "www.clevelandcc.edu"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Development",
			"school": "Udacity",
			"date": "2016",
			"url": "http://www."
		}
	]

}

// projects ****

var projects = {
	"projects": [
	{
		"title": "WPI",
		"dates": "2012",
		"description": "informational website",
		"images": [],
		"url": "http://www.wpintergroup.org"
	},
	{
		"title": "Portfolio",
		"dates": "2016",
		"description": "portfolio website",
		"images": [],
		"url": "http://www.http://captronnc.github.io/"
	}
	],
	display: function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage= HTMLprojectImage.replace("data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
	}
};

projects.display();

var formattedName =	HTMLheaderName.replace
("%data%", bio.name);

var formattedRole =	HTMLheaderRole.replace
("%data%", bio.role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

function displayContacts() {

		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

		$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
}

displayContacts();

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic)
$("#header").append(formattedPic);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for(job in work.jobs){

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedWorkLocation);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedWorkDescription);
	}
}

displayWork();


$("#mapDiv").append(googleMap);

