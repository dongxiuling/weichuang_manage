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
        title:"教师管理",
        path:'/teacher',
        icon:'appstore',
        children:[
            {
                title:"教师列表",
                path:'/teacher/list'
            },
            {
                title:"教师成绩",
                path:'/teacher/list2'
            }
        ]
    }
]

export default menuList;