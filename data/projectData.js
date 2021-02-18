const projectData = [
	{
		name: "Ambient Noise Remover",
		description: "A program that removes ambient noise from an audio file. It uses the Kalman Filter to estimate the noise and the Java Sound API to remove the byte data representing the noise.",
		category: "Science Fair",
		status: "Current",
		borumProduct: false,
		link: "https://varunsingh.dev/Ambient-Noise-Remover",
		softwareDevelopmentTools: {
			languages: ["Java"],
			apis: ["Java Sound API"],
		},
	},
	{
		name: "Borum Jot API",
		description:
			"A REST API and the back-end for my Borum Jot apps. It encrypts user data before storing it on a MySQL database",
		category: "Personal",
		status: "Finished",
		borumProduct: true,
		link: "https://api.jot.bforborum.com",
		img: "./images/borumjot.png",
		softwareDevelopmentTools: {
			languages: ["PHP", "SQL", "JSON"],
		},
		years: "2020",
	},
	{
		name: "Borum Jot Web App",
		description: "The web app for Borum Jot",
		category: "Personal",
		status: "Finished",
		borumProduct: true,
		link: "https://jot.bforborum.com",
		img: "./images/borumjot.png",
		softwareDevelopmentTools: {
			languages: ["JavaScript", "CSS"],
			libraries: ["ReactJS"],
			frameworks: ["NextJS"],
			apis: ["Borum Jot"]
		}
	},
	{
		name: "Borum Jot Android App",
		description:
			"My first Android app, which manages a user's notes and tasks in one app",
		category: "Personal",
		status: "Finished",
		borumProduct: true,
		link: "https://jot.bforborum.com",
		img: "./images/borumjot.png",
		softwareDevelopmentTools: {
			languages: ["Java", "XML", "PHP"],
			apis: ["Android", "Borum Jot"],
		},
		years: "2020",
	},
	{
		name: "Borum Dev Docs",
		description: "API documentation for Borum products for developers",
		category: "Personal",
		status: "Continuous",
		borumProduct: true,
		link: "https://developer.bforborum.com",
		img: "./images/borumtech.png",
		softwareDevelopmentTools: {
			languages: ["JavaScript"],
			frameworks: ["NextJS"],
			libraries: ["ReactJS"],
		},
	},
	{
		name: "North Star",
		description:
			"A mobile app that helps slaves escape from the south and find safehouses as they travel to the north",
		category: "Hackathon",
		status: "Ended",
		borumProduct: false,
		link: "https://devpost.com/software/north-star-xio17y",
		img:
			"https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/173/541/datas/medium.png",
		softwareDevelopmentTools: {
			languages: ["Dart"],
			apis: ["Flutter"],
		},
		years: "2020",
	},
	{
		name: "EcoFriend",
		description:
			"A social network for people to share environmental acts they've done and get awarded for doing so",
		category: "Hackathon",
		status: "Ended",
		link: "https://devpost.com/software/enviroshare",
		img:
			"https://raw.githubusercontent.com/Borumer/EcoFriend/master/assets/images/icon.png",
		softwareDevelopmentTools: {
			languages: ["Dart"],
			apis: ["Flutter"],
		},
		years: "2020",
	},
	{
		name: "FarmaKarma",
		description:
			"An app that rates farmers on their environmental practices",
		category: "Hackathon",
		status: "Ended",
		link: "https://devpost.com/software/FarmaKarma",
		img:
			"https://cdn.glitch.com/abf7c191-9bf8-48f2-a97c-4ade2e75e824%2Fimg_typo.jpg?v=1594932645362",
		softwareDevelopmentTools: {
			languages: ["JavaScript", "HTML", "CSS"],
			libraries: ["csvtojson", "axios"],
			apis: ["USDA API"],
			frameworks: ["Express"],
			runtime: "NodeJS",
		},
		years: "2020",
	},
	{
		name: "Flytrap",
		description: "A repository for storing and sharing audio files",
		category: "Personal",
		status: "Ended",
		borumProduct: true,
		link: "http://audio.bforborum.com",
		img:
			"https://raw.githubusercontent.com/Borumer/Flytrap/master/images/icon.png",
		softwareDevelopmentTools: {
			languages: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
		},
		years: "2020",
	},
	{
		name: "Frequency Analysis Simulator",
		description:
			"A program that decrypts basic ciphers using frequency analysis",
		category: "Science Fair",
		status: "Ended",
		borumProduct: false,
		link: "https://borumer.github.io/Frequency-Analysis-Simulator",
		img:
			"https://raw.githubusercontent.com/Borumer/Frequency-Analysis-Simulator/master/icon.ico",
		softwareDevelopmentTools: {
			languages: ["Java"],
			libraries: ["extJWNL"],
			apis: ["WordNet"],
		},
		years: "2019-2020",
	},
	{
		name: "Borum Feasts",
		description: "A website for ordering food ",
		category: "Personal",
		status: "Ended",
		borumProduct: true,
		link: "http://feasts.bforborum.com",
		img: "./images/pizza.png",
		softwareDevelopmentTools: {
			languages: ["HTML", "CSS", "JavaScript"],
		},
	},
	{
		name: "Borum Paint",
		description: "A paint application",
		category: "Personal",
		status: "Ended",
		borumProduct: true,
		link: "http://paint.bforborum.com",
		img:
			"https://raw.githubusercontent.com/Borumer/BorumPaint/master/paint-pallete.png",
		softwareDevelopmentTools: {
			languages: ["Processing", "JavaScript", "HTML"],
			library: ["p5.js"],
		},
	},
	{
		name: "Library System",
		category: "Personal",
		status: "Ended",
		borumProduct: false,
		link: "https://library-management-system.glitch.me/",
		img:
			"https://cdn.glitch.com/65f2c798-3d83-4eea-9b3c-130c150e928b%2Flmsicon.png?v=1594941302927",
		softwareDevelopmentTools: {
			languages: ["C#"],
		},
		years: "2019",
	},
	{
		name: "Text Adventure",
		category: "Personal",
		status: "Ended",
		borumProduct: false,
		link: "https://borumer.github.io/text-adventure",
		img:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Terminalicon2.png/512px-Terminalicon2.png",
		softwareDevelopmentTools: {
			languages: ["Java"],
		},
		years: "2017-2018",
	},
	{
		name: "Borum Q&A",
		description: "A question-and-answer site",
		category: "Personal",
		status: "Ended",
		borumProduct: true,
		link: "http://www.bforborum.com",
		img: "./images/borumtech.png",
		softwareDevelopmentTools: {
			languages: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
			frameworks: ["Bootstrap"],
			libraries: ["jQuery"],
		},
		years: "2018-2020",
	},
];
