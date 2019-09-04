let counter = 10;
let timer;
let totalQuestions = 10;
let question = 0;
let questions = new Array(0);
let answers = new Array(0);
let clicked = false;

$('.squares').one('click',function(){
    $('.display').css('display','block');
    $('.description').append("<p>One number will be given. You have to square the Number</p>");
});

$('.btn-go').click(function(){
    $('.display').css('display','none');
    $('.playground').css('display','block');

    for(let i = 0;i<totalQuestions;i++){
        let n = Math.floor(Math.random()*10 + 1);
        questions.push(n);
        let html = `<div class="row number-${i}">
                        <div class="col-sm-12 col-md-6 text-center">
                            <p>Number:${n}</p>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <span>Answer:</span>
                            <input type="number" class="answer-${i}">
                        </div>
                    </div>`;
        $('.playground').append(html);
    }
    for(let i=1;i<totalQuestions;i++){
        $(`.number-${i}`).css('display','none');
    }
    $('.timer').html(`Time : ${counter}`);

    timer = setInterval(countDown,1000);
    getInput();
});

function countDown(){
    if(question == totalQuestions){
        clearInterval(timer);
        displayResults();
    }
    counter--;
    $('.timer').html(`Time : ${counter}`);
    if(counter === 0){
        clearInterval(timer);
        $('input[type=number]').prop('disabled', true);
        if($(`.answer-${question}`).val()!="" || $(`.answer-${question}`).val()!= undefined){
            answers.push($(`.answer-${question}`).val());
        }
        displayResults();
    }
}

function getInput(){
    $('input[type=number]').focus();
    $('input[type=number]').keydown(function(event){
        if(event.which == 13){
            event.preventDefault();
            if($(`.answer-${question}`).val()!=""){
                answers.push($(`.answer-${question}`).val());
            }
            loadNextQuestion();
        }
    });
}

function loadNextQuestion() {
    $(`.number-${question}`).css('display','none');
    question++;
    $(`.number-${question}`).css('display','flex');
    $('input[type=number]').focus();

}

function displayResults(){
    $('.playground').css('display','none');
    $('.result').css('display','block');
    for(let i=0;i<answers.length;i++){
        if(answers[i] == questions[i]*questions[i])    {right = 'success'; icon = '<i class="fa fa-check float-right"></i>'}
        else    {right = 'danger'; icon='<i class="fa fa-times float-right"></i>';}
        let html = `<div class="card text-center text-white bg-${right} mb-3">
                <div class="card-body">
                    <span class="card-text">
                        <span class="float-left">${i+1}.   Number ${questions[i]}</span>
                        <span>Your Answer: ${answers[i]}</span>
                        ${icon}
                    </span> 
                </div>
            </div>`;
        $('.result').append(html);
    }
}
