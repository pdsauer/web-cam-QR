// Elements for taking the snapshot
var canvasContext = document.getElementById('canvas').getContext('2d');
var video = document.getElementById('video');
let start = document.querySelector('#start').addEventListener('click', () => {
	cameraRoll();
});

// set Video width to window width
video.setAttribute('width', window.innerWidth);
video.setAttribute('height', window.innerWidth);

// Trigger photo take
document.getElementById('snap').addEventListener('click', () => {
	canvasContext.drawImage(video, 0, 0, 640, 480);
});
const cameraRoll = () => {
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		// check if back camera exists
		console.log(navigator.mediaDevices.enumerateDevices());
		let facingmode = 'user';

		// Not adding `{ audio: true }` since we only want video now
		navigator.mediaDevices
			.getUserMedia({
				video: {
					width: { ideal: 680 },
					height: { ideal: 680 },
					facingMode: facingMode,
				},
			})
			.then(function (stream) {
				//video.src = window.URL.createObjectURL(stream);
				video.srcObject = stream;
				video.play();
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
