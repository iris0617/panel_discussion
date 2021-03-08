const questionList = [
    {
        subtitle: '👩‍💻 领域简介 & 常用技术',
        questions: [ '前端开发和全栈开发有什么区别？为什么科技行业对全栈开发的需求越来越大？',
         '和以往相比，如今我们对全栈工程师的定义有怎样的改变？' , 
         '作为前端工程师, 我该怎样提升自己走向全栈？'],
    },
    {
        subtitle: '👩‍💻 个人项目 & 学习路径',
        questions: ['请分享一下你的个人项目和使用的技术栈！', '为什么说个人项目对于前端/全栈开发工程师非常重要？', '为了个人项目你学习了什么新技术，又是怎样把已掌握的技术应用起来的？'],
    },
    {
        subtitle:'👩‍💻 资源分享 & 使用建议',
        questions: ['请分享一下你推荐使用的学习资源和如何利用这些资源！', '你同意前端/全栈 "入门简单精通很难" 这种说法吗？你在学习中遇到过什么困难，又是怎样解决的？', '“道理我都懂一做就出问题”， 我们该怎样弥补理论知识和动手能力之间的差距？'],
    },
    {
        subtitle: '👩‍💻 面试准备 & 常见问题',
        questions:[
        '前端/全栈开发工程师面试与其它SDE岗位面试有何异同？','前端/全栈开发工程师的面试流程一般是怎样的？常见的面试问题都有什么？', '刷题之外, 我该如何准备前端/全栈工程师面试？']
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