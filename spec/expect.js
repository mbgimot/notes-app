var expect = {
  isEqualTo: function(cond1, cond2) {
    if (cond1 !== cond2) {
      console.log("Equality failed |" + cond1 + " does not match " + cond2 + "| Hahaha try again! :D");
    }
    else {
      console.log("%cTest passed!", 'color: green; font-weight: bold;');
    }
  }
};
