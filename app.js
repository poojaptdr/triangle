const inputs = document.querySelectorAll(".angle-input")
const triangleBtn = document.getElementById("btn")
const outputEl = document.getElementById("output")

function calculateSumOfAngles(angle1, angle2, angle3) {
    sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles)
    return sumOfAngles;
}

function isTriagle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (sumOfAngles === 180) {
        outputEl.innerText = "Yay, The angles form a triangle"
    } else {
        outputEl.innerText = "oh oh! The angles don't from a triangle"
    }
}

triangleBtn.addEventListener("click", isTriagle)