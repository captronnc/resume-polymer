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
	"welcomeMessage": "I have been interested in web development for many years. I wanted to further develop my skills, so I enrolled in Udacity's Front-end Development Nanodegree Program. One of the fascinating things I learned is that the skills necessary to be a successfu web developer are neary identical to my current profession as a chef.",
	"skills": ["Managing Workflow", "watching stuff", "keeping odd hours"],
	"bioPic": "images/chefron.jpeg"
};

bio.display = function() {
	// Bio Header
	var formattedName =	HTMLheaderName.replace
	("%data%", bio.name);
	var formattedRole =	HTMLheaderRole.replace
	("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	// Bio Contacts
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

	// Bio Message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	// Bio Picture
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic)
	$("#header").append(formattedPic);

	// Bio Skills
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	}
};

bio.display();

// education ****

var education = {
	"schools": [
		{
			"name": "Mississippi Sate University",
			"location": "Starkville, MS",
			"degree": "Bachelor of Science Candidate",
			"majors": "Technology Teacher Education",
			"dates": "2014-current",
			"url": "http://distance.msstate.edu/teched/"
		},
		{
			"name": "Cleveland Community College",
			"location": "Shelby, NC",
			"degree": "Associate of Arts",
			"majors": "Business Administration",
			"dates": "1994-96",
			"url": "www.clevelandcc.edu"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Development Nanodegree",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]

};

education.display = function() {
	// Education Schools
	for (var school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);

		$(".education-entry:last").append(formattedSchoolNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolURL);
	}
	// Education Online Classes
	for (var course in education.onlineCourses) {

		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date)

		$(".education-entry:last").append(formattedOnlineTitleSchool);
		$(".education-entry:last").append(formattedOnlineDates);
	}
};

education.display();

// work ****

var work = {
	"jobs": [
	{
		"employer": "TJCA",
		"title": "Head Chef & Culinary Instructor",
		"dates": "now",
		"description": "Planned lunch menus according to nutritional guidelines and regulations. Cooked and prepared meals according to standardized recipes. Provided customer service to students, parents, and staff to ensure quality and safety. Ordered food and supplies to meet needs of the operation.",
		"location": "Mooresboro, NC, US"
	},
	{
		"employer": "NASP",
		"title": "Project Manager & Training Specialist",
		"dates": "then",
		"description": "Instructed Safety Auditor/Manager/Train-the-Trainer Certification Courses for industry professionals from around the world. Provided excellent customer service, trouble-shooting and technical support for digital products, training equipment, and computer software programs. Developed and delivered effective and interactive training presentations using Microsoft PowerPoint, and Adobe Acrobat. Increased attendance and referrals to training classes and events by providing dynamic, value-added experiences and creating strong relationships. Increase sales by managing data tracking system and providing analysis information to measure customer engagement through the company website. Co-authored, developed and documented standard operating procedures using Microsoft Word. Created brochures, sales and marketing publications using Microsoft Publisher.",
		"location": "Shelby, NC, US"
	}
	]
};

work.display = function() {
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
};

work.display();

// projects ****

var projects = {
	"projects": [
	{
		"title": "WPI",
		"dates": "2012",
		"description": "informational website",
		"images": ["images/wpi_800px.jpg"],
		"url": "http://www.wpintergroup.org"
	},
	{
		"title": "Portfolio",
		"dates": "2016",
		"description": "portfolio website",
		"images": ["images/portfolio_screenshot_800px.jpg"],

		"url": "http://www.http://captronnc.github.io/"
	}
	]
};

projects.display = function() {
	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage= HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

$("#mapDiv").append(googleMap);