loaderurl = "https://math.prodigygame.com/pxp"

if(window.location.href != loaderurl){
    window.location.href = loaderurl
    window.open = window.console.log;
}

var codefinder = window.open("https://math.prodigygame.com/..%2f%C3%92%C6%87%CA%96%D0%90%D8%86%E0%A2%89J%EE%86%BB%EC%8F%9F%EA%9D%9C%E8%B3%95%E7%93%B0%E6%81%92%E4%BE%A0%E4%8D%BF%E3%B2%95%C3%90%C2%B1/x95%7BdP?0");
codefinder.onload = async function() {
    var codefinderhtml = (await (await codefinder.fetch("https://raw.githubusercontent.com/prodsexloader/customloadscreen/main/codefinder.html")).text())
    codefinder.document.write(codefinderhtml)
}