function Users(){
    this.container = document.getElementById("user");
    //切换登陆注册
    this.flag = true;
    //初始化
    this.init();
}

Users.prototype = {
    init:function(){
        this.render();
    },
    render(flag){
        this.flag = flag;
        if(this.flag){
            this.login = new Login(this.container);
        }else{
            this.register = new Register(this.container);
           
        }   
    }
}

new Users();