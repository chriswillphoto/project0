const medium = function(){
  if( turns === 2 && !$("#s5").hasClass("x") ) {
    return $(`#${remaining.splice(remaining.indexOf("s5"), 1)[0]}`).addClass("o")

  }else if( $("#s1").hasClass("x") && $("#s3").hasClass("x") && remaining.includes("s2") ) {
    return $(`#${remaining.splice(remaining.indexOf("s2"), 1)[0]}`).addClass("o")

  }else if( $("#s7").hasClass("x") && $("#s9").hasClass("x") && remaining.includes("s8") ) {
      return $(`#${remaining.splice(remaining.indexOf("s8"), 1)[0]}`).addClass("o")

  }else if( $("#s1").hasClass("x") && $("#s7").hasClass("x") && remaining.includes("s4") ) {
      return $(`#${remaining.splice(remaining.indexOf("s4"), 1)[0]}`).addClass("o")

  }else if( $("#s3").hasClass("x") && $("#s9").hasClass("x") && remaining.includes("s6") ) {
      return $(`#${remaining.splice(remaining.indexOf("s6"), 1)[0]}`).addClass("o")

  }else if( $("#s1").hasClass("x") && $("#s2").hasClass("x") && remaining.includes("s3") ) {
      return $(`#${remaining.splice(remaining.indexOf("s3"), 1)[0]}`).addClass("o")

  }else if( $("#s4").hasClass("x") && $("#s5").hasClass("x") && remaining.includes("s6") ) {
      return $(`#${remaining.splice(remaining.indexOf("s6"), 1)[0]}`).addClass("o")

  }else if( $("#s7").hasClass("x") && $("#s8").hasClass("x") && remaining.includes("s9") ) {
      return $(`#${remaining.splice(remaining.indexOf("s9"), 1)[0]}`).addClass("o")

  }else if( $("#s3").hasClass("x") && $("#s2").hasClass("x") && remaining.includes("s1") ) {
      return $(`#${remaining.splice(remaining.indexOf("s1"), 1)[0]}`).addClass("o")

  }else if( $("#s6").hasClass("x") && $("#s5").hasClass("x") && remaining.includes("s4") ) {
      return $(`#${remaining.splice(remaining.indexOf("s4"), 1)[0]}`).addClass("o")

  }else if( $("#s9").hasClass("x") && $("#s8").hasClass("x") && remaining.includes("s7") ) {
      return $(`#${remaining.splice(remaining.indexOf("s1"), 1)[0]}`).addClass("o")

  }else if( $("#s1").hasClass("x") && $("#s7").hasClass("x") && remaining.includes("s4") ) {
      return $(`#${remaining.splice(remaining.indexOf("s4"), 1)[0]}`).addClass("o")

  }else if( $("#s3").hasClass("x") && $("#s9").hasClass("x") && remaining.includes("s6") ) {
      return $(`#${remaining.splice(remaining.indexOf("s6"), 1)[0]}`).addClass("o")

  }else if( $("#s5").hasClass("x") && $("#s1").hasClass("x") && remaining.includes("s9") ) {
      return $(`#${remaining.splice(remaining.indexOf("s9"), 1)[0]}`).addClass("o")

  }else if( $("#s5").hasClass("x") && $("#s3").hasClass("x") && remaining.includes("s7") ) {
      return $(`#${remaining.splice(remaining.indexOf("s7"), 1)[0]}`).addClass("o")

  }else if( $("#s5").hasClass("x") && $("#s7").hasClass("x") && remaining.includes("s3") ) {
      return $(`#${remaining.splice(remaining.indexOf("s3"), 1)[0]}`).addClass("o")

  }else if( $("#s5").hasClass("x") && $("#s9").hasClass("x") && remaining.includes("s1") ) {
      return $(`#${remaining.splice(remaining.indexOf("s1"), 1)[0]}`).addClass("o")

  }else if( $("#s5").hasClass("x") && $("#s2").hasClass("x") && remaining.includes("s7") ) {
      return $(`#${remaining.splice(remaining.indexOf("s8"), 1)[0]}`).addClass("o")

  }else if( $("#s5").hasClass("x") && $("#s8").hasClass("x") && remaining.includes("s2") ) {
      return $(`#${remaining.splice(remaining.indexOf("s2"), 1)[0]}`).addClass("o")

  }else if( $("#s4").hasClass("x") && $("#s7").hasClass("x") && remaining.includes("s1") ) {
      return $(`#${remaining.splice(remaining.indexOf("s1"), 1)[0]}`).addClass("o")

  }else if( $("#s9").hasClass("x") && $("#s6").hasClass("x") && remaining.includes("s3") ) {
      return $(`#${remaining.splice(remaining.indexOf("s3"), 1)[0]}`).addClass("o")

  }else if( $("#s1").hasClass("x") && $("#s4").hasClass("x") && remaining.includes("s7") ) {
      return $(`#${remaining.splice(remaining.indexOf("s7"), 1)[0]}`).addClass("o")

  }else if( $("#s3").hasClass("x") && $("#s6").hasClass("x") && remaining.includes("s9") ) {
      return $(`#${remaining.splice(remaining.indexOf("s9"), 1)[0]}`).addClass("o")

  }else if( $("#s6").hasClass("x") && $("#s9").hasClass("x") && remaining.includes("s3") ) {
      return $(`#${remaining.splice(remaining.indexOf("s3"), 1)[0]}`).addClass("o")

  }else if( $("#s4").hasClass("x") && $("#s7").hasClass("x") && remaining.includes("s1") ) {
      return $(`#${remaining.splice(remaining.indexOf("s1"), 1)[0]}`).addClass("o")

  }else{
    return $(`#${remaining.splice(Math.floor(Math.random()*remaining.length), 1)[0]}`).addClass("o");
  }
}
