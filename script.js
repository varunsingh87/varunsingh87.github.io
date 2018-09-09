window.onload = function() {
/* 
	Create new link element
	Tell browser it is a favicon (in the title tab to the left an image)
	Give link to image as the kangaroo with an 'ico' extension
*/
  var link = top.document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = "./Australian_Kangaroo.ico";
  top.document.getElementsByTagName("head")[0].appendChild(link);
}