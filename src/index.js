module.exports = function solveEquation(equation) {
  

  var equationArray = equation.split(' ');

  var a;
  var b;
  var c;
  var solutions = [];
  
  
  a = + equationArray[0];

  if (equationArray[3] == '-')  {
    b = (equationArray[4]) * (-1);
  } else {
    b = +equationArray[4];
  }

  if (equationArray[7] == '-')  {
    c = (equationArray[8]) * (-1);
  } else {
    c = +equationArray[8];
  }

  var discriminant = b*b - 4*a*c;

  if (discriminant >= 0) {
    var x1 = Math.round(((-b) + Math.sqrt(discriminant)) / (2*a));
    var x2 = Math.round(((-b) - Math.sqrt(discriminant)) / (2*a));
  } else  {
    return "Discriminant < 0 --> No roots"
  }

  
  solutions.push(x1, x2);
  return solutions.sort(function (a, b) {
    return a - b;
  });
}
