$('.squares').click(function(){
    $('.display').css('display','block');
    $('.description').append("<p>One number will be given. You have to square the Number</p>");
})

let counter = 10;
let timer;

function countDown(){
    counter--;
    $('.timer').html(`Time : ${counter}`);
    if(counter === 0){
        clearInterval(timer);
        // TODO: display result
    }
}

$('.btn-go').click(function(){
    $('.display').css('display','none');
    $('.playground').css('display','block');
    $('.timer').html(`Time : ${counter}`);

    timer = setInterval(countDown,1000);
    generateQuestion();
});

function check(ans){
    $('input[type=number]').keydown(function(event){
        if(event.which == 13){
            if($('input[type=number]').val()!="")
            userAns = $('input[type=number]').val();
            if(userAns == ans){
                $('input[type=number]').val("");
                generateQuestion();
            }
            $('input[type=number]').focus();
        }
    })
}

function generateQuestion(){
    let n = Math.floor(Math.random()*10 +1);
    $('.number > p').text(`Number: ${n}`);
    $('input[type=number]').focus();
    let ans = n*n;
    check(ans);
}
