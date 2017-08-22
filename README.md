# html5ToLocalhost
bookmarklet for easy opening editor in localhost

Drag <a href="javascript: var a='',b=document.querySelector('iframe');if(b?a=b.getAttribute('src'):location.host.indexOf('foxpublish.net')>=0&&(a=location.href),a&&a.length>0&&a.indexOf('editor/?')>=0){var c=a.substr(a.indexOf('editor/?')+'editor/'.length),d='http://localhost:3000/'+c,e=window.open(d,'_blank');e.focus()}">this link</a> to your bookmarks.
