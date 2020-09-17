function copyToClipboard() {
    document.getElementById("contact-mail").select()
    document.getElementById("contact-mail").setSelectionRange(0,99999)
    document.execCommand("copy")
    document.getElementById("contact-mail").setSelectionRange(0,0)
    document.getElementById("toast").style.display=inline-block
}

// Show toast after selecting mail address in contact us
$(document).ready(function(){
    $("#copied").click(function(){
        $('.toast').toast({delay: 2000});
      $('.toast').toast('show');
    });
  });