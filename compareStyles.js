function compareStyles (elem) {
  var prevO = {},
      oo = {};
  var prev = getComputedStyle(elem);
  for (v in prev) { console.log('v', v, prev[v]); prevO[v] = prev[v] }; 
  return function(ele) {
    var curr = getComputedStyle(ele);
    for (p in prevO) {
      if (curr[p] != prevO[p]) { 
         oo[p] = {"first": prevO[p], "second": curr[p]}; 
      };
    }
    return oo;
  }
  
}