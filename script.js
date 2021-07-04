const questionList = [
    {
        subtitle: '🎙 螈与龙的相遇故事 & 制作播客的契机',
        questions: [ '请简单介绍一下自己和与对方相遇的故事!',
         '开始制作螈与龙播客的契机是什么？怎么确定的播客名字和主题？' , 
         '如果我想和朋友制作一个自己的播客，前期准备都有什么？'],
    },
    {
        subtitle: '🎙 播客的编写剪辑制作 & 播客的粉丝社区运营',
        questions: ['一期播客从有想法到落地，究竟需要经历哪些步骤？', '作为播客主，需要哪些技能和工具？遇到过哪些技术难题？', '你们是如何建立和运营一个健康的播客粉丝社群的?'],
    },
    {
        subtitle:'🎙 播客人的酸甜苦辣 & 平衡工作与副业的关系',
        questions: ['播客是你的主业吗？你们各自的职业轨迹是怎样的？', '作为打工人，如何平衡热爱与赚钱，工作与生活的关系？', '制作螈与龙的一年里，觉得最焦虑的瞬间是什么？觉得最有成就感的瞬间又是什么？'],
    },
    {
        subtitle: '🎙 播客中的女性声音 & 作为女性表达和发声的意义',
        questions:[
        '为什么我们喜欢，也需要更多女性内容创作者？', '讨论性别议题对我们来说为什么这么重要？','对于你们来说，通过播客的形式持续创作，表达和发声的意义是什么？']
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