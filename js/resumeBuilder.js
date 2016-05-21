'use strict';

var bio = {
	'name': 'Ronald Schaeffer',
	'role': 'Web Developer',
	'contacts': {
		'mobile': '704-300-5618',
		'email': 'captronnc@yahoo.com',
		'github': 'captronnc',
		'twitter': '@ronschaeffer',
		'location': 'North Carolina'
	},
	'welcomeMessage': "I have been interested in web development for many years. I wanted to further develop my skills, so I enrolled in Udacity's Front-end Development Nanodegree Program. One of the fascinating things I learned is that the skills necessary to be a successfu web developer are neary identical to my current profession as a chef.",
	'skills': ['Managing Workflow', 'watching stuff', 'keeping odd hours'],
	'biopic': 'images/chefron.jpeg'
};

bio.display = function() {

	var formattedName =	HTMLheaderName.replace	('%data%', bio.name);
	var formattedRole =	HTMLheaderRole.replace('%data%', bio.role);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	$('#header').prepend(formattedRole, formattedName);
	$('#header').append(formattedWelcomeMsg, formattedPic);
	$('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

	if(bio.skills.length) {
		$('#header').append(HTMLskillsStart);
		for (var i=0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
};

bio.display();

var education = {
	'schools': [
		{
			'name': 'Mississippi Sate University',
			'location': 'Starkville, MS',
			'degree': 'Bachelor of Science Candidate',
			'majors': ['Technology Teacher Education'],
			'dates': '2014-current',
			'url': 'http://distance.msstate.edu/teched/'
		},
		{
			'name': 'Cleveland Community College',
			'location': 'Shelby, NC',
			'degree': 'Associate of Arts',
			'majors': ['Business Administration'],
			'dates': '1994-96',
			'url': 'www.clevelandcc.edu'
		}
	],

	'onlineCourses': [
		{
			'title': 'Front-end Development Nanodegree',
			'school': 'Udacity',
			'date': '2016',
			'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	]

};

education.display = function() {
	education.schools.forEach(function(school) {

		var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
		var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', school.majors);
		var formattedSchoolURL = HTMLschoolURL.replace('%data%', school.url);
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(formattedSchoolNameDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor, formattedSchoolURL);
	});

	education.onlineCourses.forEach(function(course) {

		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.date);
		$('.education-entry:last').append(HTMLonlineClasses, formattedOnlineTitleSchool, formattedOnlineDates);

	});
};

education.display();

var work = {
	'jobs': [
	{
		'employer': 'TJCA',
		'title': 'Head Chef & Culinary Instructor',
		'dates': 'now',
		'description': 'Planned lunch menus according to nutritional guidelines and regulations. Cooked and prepared meals according to standardized recipes. Provided customer service to students, parents, and staff to ensure quality and safety. Ordered food and supplies to meet needs of the operation.',
		'location': 'Mooresboro, NC, US'
	},
	{
		'employer': 'NASP',
		'title': 'Project Manager & Training Specialist',
		'dates': 'then',
		'description': 'Instructed Safety Auditor/Manager/Train-the-Trainer Certification Courses for industry professionals from around the world. Provided excellent customer service, trouble-shooting and technical support for digital products, training equipment, and computer software programs. Developed and delivered effective and interactive training presentations using Microsoft PowerPoint, and Adobe Acrobat. Increased attendance and referrals to training classes and events by providing dynamic, value-added experiences and creating strong relationships. Increase sales by managing data tracking system and providing analysis information to measure customer engagement through the company website. Co-authored, developed and documented standard operating procedures using Microsoft Word. Created brochures, sales and marketing publications using Microsoft Publisher.',
		'location': 'Shelby, NC, US'
	}
	]
};

work.display = function() {
	work.jobs.forEach(function(job) {

		var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', job.location);
		var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', job.description);
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(formattedEmployerTitle, formattedWorkLocation, formattedWorkDates, formattedWorkDescription);
	});
};

work.display();

var projects = {
	'projects': [
	{
		'title': 'WPI',
		'dates': '2012',
		'description': 'informational website',
		'images': ['images/wpi_800px.jpg'],
		'url': 'http://www.wpintergroup.org'
	},
	{
		'title': 'Portfolio',
		'dates': '2016',
		'description': 'portfolio website',
		'images': ['images/portfolio_screenshot_800px.jpg'],
		'url': 'http://www.http://captronnc.github.io/'
	}
	]
};

projects.display = function() {
	projects.projects.forEach(function(project) {

		var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
		var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

		if(project.images.length) {
			for (var i=0; i <project.images.length; i++) {
				var formattedImage= HTMLprojectImage.replace('%data%',project.images[i]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	});
};

projects.display();

$('#mapDiv').append(googleMap);