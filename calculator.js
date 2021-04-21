function butttonClick(val){
  
    document.getElementById("screen").value+=val

}
function butttonClear(){
    document.getElementById("screen").value=""
}
function buttonEqual(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    console.log(result)
    document.getElementById("screen").value=result
    
}

function downloadImage() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://lcm.scienceinstitute.in/online-videos/videos/1617186816ALDEHYDES%20KETONES%20AND%20CARBOXYLIC%20ACIDS%20CSJ%20part%2010.mp4', true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.target = '_blank';
    tag.download = 'sample.png';
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.onerror = err => {
    alert('Failed to download video');
  };
  xhr.send();
}
