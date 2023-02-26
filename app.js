         // using selectors inside the element     

        const questions = document.querySelectorAll('.question');
          
        questions.forEach(function (question) {       
            const Btn = question.querySelector('.question-btn');      //parent dan childa inis question degerini verdik question degerindende btnlara ulastik
                  Btn.addEventListener("click", function() {
                    questions.forEach(function (item)  {
                        if(item !== question) {
                            item.classList.remove("show-text"); //buradaki yaptigimiz islemde question ile item esitdegilse kaldir show-texti
                    }})
                    question.classList.toggle("show-text"); //toggle ile tikladigimizda paragrafimizi goster birdaha tikladigimizda paragrafimizi kapat
                })
        })

    
    // traversing the dom 

    // const btns = document.querySelectorAll(".question-btn");
    // btns.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
    //         e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
    //     })})
