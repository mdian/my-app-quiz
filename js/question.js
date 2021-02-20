class Question {
    constructor(data, questionNumber = [0]) {
        this.questionNumber = questionNumber
        this.data = data
        this.questionDom = document.getElementById("question")

        this.answersDom = [
            document.getElementById("a1"),
            document.getElementById("a2"),
            document.getElementById("a3"),
            document.getElementById("a4"),
        ]
        this.answers = [
            this.data.results[this.questionNumber].correct_answer,
            ...this.data.results[this.questionNumber].incorrect_answers
        ]

    }

    renderQuestion = () => {
        this.questionDom.innerHTML = this.data.results[this.questionNumber].question
        let number = [];
        for (let i = 0; i < 4; i++) {

            let randomNumber = Math.floor(Math.random() * 4)
            if (number.length == 0) {
                number.push(randomNumber)
                console.log("random number", randomNumber)
                console.log("first fill of array", number)
                this.answersDom[randomNumber].innerHTML = ` <input data= rn${randomNumber} type="radio" name="answer"  value="${this.answers[i]}" /> ${ this.answers[i]}`
                console.log("first answer", this.answersDom[randomNumber].parentNode)
                console.log(this.answersDom[randomNumber].innerHTML)


            } else {
                let newUniqNum = this.recursion(number, randomNumber)
                this.answersDom[newUniqNum].innerHTML = ` <input type="radio" data= rn${newUniqNum} name="answer"  value="${this.answers[i]}" /> ${ this.answers[i]}`
            }
        }
    }


    recursion = (array, num) => {
        let rmNumber = num;
        let isExist = array.some(item => item == rmNumber)
        if (isExist) {
            rmNumber = Math.floor(Math.random() * 4)
            this.recursion(array, rmNumber)

        } else {
            let newArray = array.push(rmNumber)
        }
        return array[array.length - 1]
    }

}


export default Question