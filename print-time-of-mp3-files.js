const fs = require("node:fs");
const { getAudioDurationInSeconds } = require("get-audio-duration");

fs.readdir("./", async function (err, files) {
	if (err) {
		console.log("errro");
		return;
	}

	const filtered = files.filter((item) => item.endsWith(".mp3"));

	const res = await Promise.all(
		filtered.map(async (file) => getAudioDurationInSeconds(file)),
	);

	const seconds = res.reduce((total, item) => total + parseFloat(item), 0);

	const minutes = seconds / 60;
	const hours = seconds / 60 / 60;

	console.log(minutes.toFixed(2) + " minutes");
	console.log(hours.toFixed(2) + " hours");
});
