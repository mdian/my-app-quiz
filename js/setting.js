import Quiz from './quiz.js'

class Setting{
    constructor(){
        // properties
        this.settingDom = document.getElementById("setting")
        this.quizDom = document.getElementById("quiz")
        this.category = document.getElementById("category")
        this.amount = document.getElementById("amount")
        this.levels =[
            document.getElementById("easy"),
            document.getElementById("medium"),
            document.getElementById("deficult"),
        ]
        this.startQuiz = document.getElementById("btnstart")
        this.startQuiz.addEventListener("click",this.getData)
    }

    // methods

    // get category

    getCategory=()=>{ 
       return this.category.value
    }

    // get amount method
    
    getAmount=()=>{
        let amount = this.amount.value
        if(amount > 0 && amount <21){
            return amount
        }else{
            alert(" Please enter Number between 0 and 20")
        }
    }
    //  get app level

    getlevel = () =>{
        let levelActive = this.levels.filter(item=>{
           return item.checked
        })
        if(levelActive.length >0)
        return levelActive[0].value
        else alert("Please choose the level")
    }

    // get Date (Questions)
   
    getData= async(amount,level,category)=>{
        let questionCategory=this.getCategory()
        let questionAmount = this.getAmount()
        let qustionLevel = this.getlevel()
  
        let data = await fetch(`https://opentdb.com/api.php?amount=${questionAmount}&category=${questionCategory}&difficulty=${qustionLevel}`).then(data =>data.json()).catch(err =>alert("there is an error happerned"))
  
        if(data){
            this.settingDom.style.display = "none"
            this.quizDom.style.display = "block"
            new Quiz(data)
        }
    }
}


export default Setting




