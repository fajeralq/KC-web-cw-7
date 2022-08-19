function BMI (weight,height) {
    let result = weight / (height*height)
    return result

}
console.log (BMI(20,20))

function status (BMI) {
    if (BMI < 18.5) {
        return "لديك نقص في الوزن"
    }

    if (BMI >= 18.5 < 25){
        return "وزنك صحي"
    }
    if (BMI >= 25){
        return "لديك زيادة في الوزن"

    }
    
    function calculate () {
        let weight = document.getElementById ('weight').value
        let height = document.getElementById ('height').value

        let BMI = BMI(weight,height)
        let desc = status(BMI)

        let div = document.getElementById('result')

        div.innerText = BMI + "==" + desc

    



}
