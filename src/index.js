module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s/g,'');
    var result = [],
        array = equation.split(/\*x\^2|\*x/), //spliting our arr
        a = parseInt(array[0]), //parsing array for int arg
        b = parseInt(array[1]),
        c = parseInt(array[2]),
        discriminant = (Math.pow(b,2) - 4 * a * c); // discriminant func

    result[0] = Math.round((-b + Math.sqrt(discriminant)) / (2 * a)); //result array
    result[1] = Math.round((-b - Math.sqrt(discriminant)) / (2 * a)); //same

    return result.sort((left, right) => left - right); //sort our result out with compr
}
