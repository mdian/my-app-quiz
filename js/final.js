class Final {
    constructor(score, total) {
        this.score = score;
        this.total = total;
        this.scoreDom = document.getElementById("score")
        this.totalDom = document.getElementById("total")
        this.tryAgainBtn = document.getElementById("tryAgain")
        this.setting = document.getElementById("setting")
        this.tryAgainBtn.addEventListener("click", this.trayAgain)
        this.renderScore()

    }

    renderScore = () => {
        this.scoreDom.innerHTML = this.score
        this.totalDom.innerHTML = this.total
    }
    trayAgain = () => {
        location.reload();
    }
}
export default Final