function load_content(data) {
    $("#"+data+" .showdiv").load( "content/"+data+".html");
    $("#"+data+" .showa").removeAttr('onclick').click(retype);
    setTimeout(retype, 200);
}
function retype() {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}
