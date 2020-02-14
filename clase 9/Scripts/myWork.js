
self.onmessage = function (e) {

    if(e.data == "wk"){
        self.close();
    }else{
        for (c in e.data) {
            postMessage(e.data[c].toUpperCase());
        }
    }
}