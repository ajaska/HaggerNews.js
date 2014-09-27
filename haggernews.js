function benisify(s){
    return [
        function (s) { return s.toLowerCase() },
        function (s) { return s.replace(/x/g, 'cks') },
        function (s) { return s.replace(/ing/g,'in') },
        function (s) { return s.replace(/you/g, 'u') },
        function (s) { return s.replace(/oo/g, 'u') },
        function (s) { return s.replace(/ck\b/g, 'g') },
        function (s) { return s.replace(/ck/g, 'gg') },
        function (s) { return s.replace(/\bthe\b/g, 'da') },
        function (s) { return s.replace(/(t+)/g, function(x){ return Array(x.length + 1).join('d') }) },
        function (s) { return s.replace(/p/g, 'b') },
        function (s) { return s.replace(/\bc/g, 'g') },
        function (s) { return s.replace(/\bis\b/g, 'are') },
        function (s) { return s.replace(/c+(?![eiy])/g, 'g') },
        function (s) { return s.replace(/know/g, 'no') },
        function (s) { return s.replace(/kn/g, 'n') },
        function (s) { return s.replace(/[qk]/g, 'g') }
    ].reduce(function(acc, f) { return f(acc); }, s);
};

var el = document.querySelectorAll('.title a, .pagetop > a, a[href="news"], title');
for(var i=0; i<el.length; i++) {
    if(el[i].innerText) {
      el[i].innerText = benisify(el[i].innerText);
    }
}

var el = document.querySelectorAll('.comment > font, .comment > p > font');
for(var i=0; i<el.length; i++) {
    nodes = el[i].childNodes;
    for(var j=0; j<nodes.length; j++) {
      if(nodes[j].nodeName === "#text") {
        if(nodes[j].data) {
          nodes[j].data = benisify(nodes[j].data);
        }
      } else if(nodes[j].nodeName === "P") {
        if(nodes[j].innerText) {
          nodes[j].innerText = benisify(nodes[j].innerText);
        }
      }
    }
}


