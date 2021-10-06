var clicks = 0;
var testTime = 1;
var button = document.getElementById("btn");
var progressbar = document.getElementById("btnprog");

button.onclick = function() {
	if(clicks == 0) {
		setTimeout(timeout, testTime * 100);
		progressbar.style.width = '100%';
	}
	clicks ++;
	btn.innerText = clicks + ' clicks';
}

function timeout() {
	button.disabled = true;
	button.innerText = clicks  + ' CPS';
	button.style.cursor = 'wait';
	setTimeout(resetbutton, 3000);
	progressbar.style.transition = 'width 3s';
	progressbar.style.width = '0';
}

function resetbutton() {
	button.disabled = false;
	button.style.cursor = 'crosshair';
	progressbar.style.transition = 'width 1s linear';
	clicks = 0;
}
