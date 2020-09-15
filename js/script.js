function copyToClipboard() {
    document.getElementById("contact-mail").select()
    document.getElementById("contact-mail").setSelectionRange(0,99999)
    document.execCommand("copy")
}