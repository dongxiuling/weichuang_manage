const menuList = [
    {
        title:"首页",
        path:'/home',
        icon:'home'
    },
   
    {
        title:"学生管理",
        path:'/student',
        icon:'appstore',
        children:[
            {
                title:"添加学生",
                path:'/student/add'
            },
            {
                title:"学生列表",
                path:'/student'
            },
            {
                title:"学生成绩",
                path:'/student/list2'
            }
        ]
    },
    {
        title:"课程管理",
        path:'/course',
        icon:'appstore',
        children:[
            {
                title:"添加课程",
                path:'/course/add'
            },
            {
                title:"查看课程",
                path:'/course/look'
            },
            {
                title:"分阶段",
                path:'/course/stage'
            }
        ]
    }
]

export default menuList;