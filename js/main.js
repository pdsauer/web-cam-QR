// Elements for taking the snapshot
var canvasContext = document.getElementById('canvas').getContext('2d');
var video = document.getElementById('video');
let start = document.querySelector('#start').addEventListener('click', () => {
	cameraRoll();
});
// Trigger photo take
document.getElementById('snap').addEventListener('click', () => {
	canvasContext.drawImage(video, 0, 0, 640, 480);
});
const cameraRoll = () => {
	if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		// Not adding `{ audio: true }` since we only want video now
		navigator.mediaDevices
			.getUserMedia({
				video: {
					width: { ideal: 680 },
					height: { ideal: 680 },
					facingMode: { exact: 'environment' },
				},
			})
			.then(function (stream) {
				//video.src = window.URL.createObjectURL(stream);
				video.srcObject = stream;
				video.play();
			});
	}
};
