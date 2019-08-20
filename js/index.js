$('.squares').click(function(){
    $('.display').css('display','block');
    $('.description').append("<p>One number will be given. You have to square the Number</p>");
})

$('.btn-go').click(function(){
    $('.display').css('display','none');
    $('.playground').css('display','block');

    var n = Math.floor(Math.random()*10 +1);
    console.log(n);
    $('.number > p').text(`Number: ${n}`)
    var ans = n*n;
});
