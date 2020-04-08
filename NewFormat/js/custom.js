//image size fix
function imgFix() { 
	var images = document.getElementsByTagName('img');
	var maxWidth = Math.round(document.body.clientWidth * 0.95);
	if (maxWidth < 200)
		maxWidth = 200;
	for (var i = 0; i < images.length; i++) 
	{	
		var img = new Image();
		img.src = images[i].src;
		var naturalWidth = img.width;
		
		if (maxWidth && naturalWidth && images[i].width)
		{
			if (naturalWidth < maxWidth)
			{
				images[i].width = naturalWidth;
			}
			else
			{
				images[i].width = maxWidth;						
			}			
		}
		
	};		
};

window.attachEvent("onresize", imgFix);
imgFix();