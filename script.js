const questionList = [
    {
        subtitle: '👩‍💻 行业现状篇',
        questions: ['请介绍一下自己和自己正在从事的工作!', '常见的开发岗位有几种？不同的岗位的职责有什么区别？', '需要程序媛的公司类型有哪些？不同的城市，工作机会有多大的不同？你怎样看待互联网行业的现状？'],
    },
    {
        subtitle: '👩‍💻 面试流程篇',
        questions: ['你所在的公司面试流程是怎样的？有几轮，难度怎样？','大厂/Startup, 国企/外企在招人时更看重什么？', '准备面试时，对刷题/基础知识/个人项目的时间分配比例应该是怎样的？'],
    },
    {
        subtitle: '👩‍💻 工作日常篇',
        questions:[
        '你的一个典型的工作日大概是什么样的？每天总工作时长为多久？', '工作中开会/写码/写设计文档的比例是？工作中，你最喜欢和最头秃的部分分别是什么？', '你在日常中应用最多的技术是...? 最常使用的团队协作工具是...？']
    },

    {
        subtitle: '👩‍💻 团队协作篇',
        questions: ['开发团队和产品团队是如何互相合作，最终完成一个功能的开发的？',
        '作为程序媛，你通常向上向下分别和谁对接？需要交流的主要内容是什么？',
        '你所在团队中，开发人员之间是如何分配工作和互相合作的？'
        ],
    },
     {
         subtitle:'👩‍💻 职业发展篇',
         questions: ['程序媛比较典型的未来职业发展道路一般有几种？各自需要怎样的技能点？',
         '从开发转入其他岗位，选择都有哪些？从其他岗位转行开发，要做怎样的准备？',
         '在性别不平衡的行业现状下，你的女性身份为你带来了怎样的优势和劣势？',
        ],
    },
    {
        subtitle:'👩‍💻 未来建议篇',
        questions: ['对于零基础转码的姐妹，我有这样的建议...？', '新人程序媛们，入行初期， 这样的坑请一定不要踩！', '科技迭代日新月异，工作之余，作为程序媛，我该怎样提升我的技能点？'],
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