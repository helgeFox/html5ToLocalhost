function doIt() {
	var origUrl = '';
	var iframe = document.querySelector('iframe');
	if (!!(iframe)) {
	    origUrl = iframe.getAttribute('src');
	}
	else if (location.host.indexOf('foxpublish.net') >= 0) {
		origUrl = location.href;
	}

	if (origUrl && origUrl.length > 0 && origUrl.indexOf('editor/?') >= 0) {
	    var uri = origUrl.substr(origUrl.indexOf('editor/?') + 'editor/'.length);
	    var newUrl = 'http://localhost:3000/' + uri;
	    var win = window.open(newUrl, '_blank');
	    win.focus();
	}
}