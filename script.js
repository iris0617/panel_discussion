const questionList = [
    {
        subtitle: '行业现状篇',
        questions: ['我所在公司对产品经理的定义', '国内产品经理眼花缭乱的职位之间到底有什么区别？'],
    },
    {
        subtitle: '面试流程篇',
        questions: ['产品经理所需要的性格特质','如何找到第一份实习; 如何找到一份工作', '作为数据科学家/分析师/程序媛/设计师，如何转行成为产品经理'],
    },
    {
        subtitle: '工作日常篇',
        questions:[
        '你的一个典型的工作日大概是什么样的？每天总工作时长为多久？', '工作中开会/写码/写设计文档的比例是？', '你常应用的技术是...? 最常使用的协作工具是...？']
    },

    {
        subtitle: '团队协作篇',
        questions: ['开发团队和产品团队是如何合作完成一个功能的开发的？',
        '作为程序媛, 你通常向上向下分别和谁对接？',
        '你所在团队的开发人员之间是如何分配工作和互相合作的？'
        ],
    },
     {
         subtitle:'职业发展篇',
         questions: ['所在公司人员性别/种族比例', '女性产品经理的职业天花板',
         '职业发展道路思考'],
    },
    {
        subtitle:'未来建议篇',
        questions: ['非技术出身产品经理对技术该有什么程度的了解', '非技术出身产品经理如何避免成为传话筒', '产品经理如何提升产品能力和专业知识? 怎么发掘自己的技能树并点上技能点？'],
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