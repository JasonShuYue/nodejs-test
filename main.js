myButton.addEventListener("click", function() {
    let request = new XMLHttpRequest();
    request.open('GET', "/xxx");    // 配置request
    request.send();
    request.onreadystatechange = function() {
        if(request.readyState === 4) {
            console.log("request done");
            let status = request.status;
            if(status >= 200 && status < 300) {
                let responseText = request.responseText;
                let string = JSON.parse(responseText);
                console.log(string);
            } else if(status >= 400) {
                console.log("request, fail")
            }
        }
    }
});