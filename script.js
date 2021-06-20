const questionList = [
    {
        subtitle: '🎙 制作播客的契机',
        questions: [ '请简单介绍一下自己和与对方相遇的故事!',
         '开始制作螈与龙的契机是什么？怎么确定的播客名字和主题？' , 
         '如果我想和朋友制作一个自己的播客，前期准备都有什么？'],
    },
    {
        subtitle: '🎙 播客的编写剪辑制作',
        questions: ['一期播客从筹划到全平台上线的生命周期', '作为podcaster需要的工具和技能树'],
    },
    {
        subtitle:'🎙 播客人的酸甜苦辣 & 平衡工作与副业的关系',
        questions: ['制作螈与龙的一年里，觉得最焦虑的瞬间是什么？觉得最有成就感的瞬间又是什么？', '作为打工人，如何平衡工作和副业之间的关系？'],
    },
    {
        subtitle: '🎙 播客中的女性声音 & 作为女性表达和发声的意义',
        questions:[
        '女性播客在播客届占据很重要的一席之地。为什么我们喜欢，也需要从女性视角出发，讨论女性议题的播客？','对于你们来说，通过播客的形式持续创作，表达和发声的意义是什么？']
    }
    
];

let currQuesIdx = 0;
let currQues = ''

const renderQ = function() {

    $('.q-text ul').empty()

    if (currQuesIdx >= 0 && currQuesIdx < questionList.length) {
        currQues = questionList[currQuesIdx]; 
    } else {
        currQues = "没有问题啦！"
        if (currQuesIdx < 0) {
            currQuesIdx = -1
        } else if (currQuesIdx >= questionList.length) {
            currQuesIdx = questionList.length
        }
        $('.q-text p').text(currQues)
        return
    }

    $('.q-text p').text(currQues.subtitle)

    currQues.questions.forEach(function(question) {
        $('.q-text ul').append(`<li>${question}</li>`)
    })
}

const resetStatus = function() {
    $guests = $('.guest-p')
    for (let i = 0; i < $guests.length; i++) {
        $guests.eq(i).removeClass('guest-active')
        $guests.eq(i).addClass('guest-inactive')
        $guests.eq(i).closest('.col-4').find('svg').css('color', 'white')
    }
}

const resetQColor = function() {
    $ques = $('li')
    for (let i = 0; i < $ques.length; i++) {
        $ques.eq(i).removeClass('q-primary')
    }
}


$('.right-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx += 1
    renderQ()
    resetQColor()
    resetStatus()
})

$('.left-nav').on('click', function(e) {
    e.preventDefault()
    currQuesIdx -= 1
    renderQ()
    resetQColor()
    resetStatus()
})

$('.guest-p').on('click', function(e) {
    e.preventDefault()
    resetStatus()
    $(e.target).closest('.guest-p').removeClass('guest-inactive')
    $(e.target).closest('.guest-p').addClass('guest-active')
    $(e.target).closest('.col-4').find('svg').css('color','#0d6efd')
})

$('ul').on('click', function(e) {
    e.preventDefault()
    resetQColor()
    $(e.target).addClass('q-primary')
})

renderQ()
resetStatus()
resetQColor()