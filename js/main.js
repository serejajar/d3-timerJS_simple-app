console.log(d3.now());

var dom = {
    progressBar: document.querySelector('.progress-bar'),
    popup: document.querySelector('.popup')
}

var t = d3.timer(function(elapsed) {
    var time = 10000;
    var progress = elapsed / (time / 100);

    if (progress >= 100) {
        progress = 100;
    }

    dom.progressBar.style.width = `${progress}%`;

    if (elapsed > time) {
        t.stop();
        dom.popup.style.display = 'block';
    }
}, 100);
