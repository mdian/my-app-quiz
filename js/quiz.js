import Question from './question.js';
import Final from './final.js';


class Quiz {
    constructor(data) {
        this.correctAnswer = data.results[0].correct_answer;
        this.data = data;
        this.scoreTotal = 0;
        this.currentNumber = 0
        this.countOfQuestion = data.results.length;
        document.getElementById("total_ques").innerHTML = this.countOfQuestion
        this.counter_question = document.getElementById("current_ques");
        this.counter_question.innerHTML = this.currentNumber + 1
        this.nextBtn = document.getElementById("nextBtn")
        this.nextBtn.addEventListener("click", this.nextQuestion)
        this.quizDom = document.getElementById("quiz")
        this.final = document.getElementById("final")

        new Question(data).renderQuestion()

    }

    nextQuestion = () => {
        this.checkAnswer(this.currentNumber)
        this.currentNumber += 1
        if (this.currentNumber < this.countOfQuestion) {
            this.counter_question.innerHTML = this.currentNumber + 1
            new Question(this.data, this.currentNumber).renderQuestion()
        } else {
            // create a new final object
            this.quizDom.style.display = "none"
            this.final.style.display = "block"
            new Final(this.scoreTotal, this.countOfQuestion)
        }
    }

    checkAnswer(number) {
        let inputs = Array.from(document.querySelectorAll("input[name='answer']"))
        let checkedInput = inputs.filter(el => el.checked)
        let answer = checkedInput[0].getAttribute('value')
        console.log(this.data.results[number].correct_answer)
        if (answer == this.data.results[number].correct_answer) {
            this.scoreTotal += 1;
        } else {
            console.log("wrong answer")
            alert(" wrong answer")
        }

    }

}

export default Quiz