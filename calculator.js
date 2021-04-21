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

<script>
jQuery(document).ready(function() {
  var downloadButton = jQuery('.et-download-button');
   
  downloadButton.each(function(index) {
    jQuery(this).attr('download', 'image-file');
  });
});
</script>
