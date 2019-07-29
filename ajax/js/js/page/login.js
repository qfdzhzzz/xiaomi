function Login(container){
    this.container = container;
    this.init();
}

Login.template = `
<div class="container login">
<form id="js_login_btn">
    <div class="form-group">
        <label for="js_login_username">用户名</label>
        <input type="text" class="form-control" id="js_login_username" placeholder="请输入用户名">
    </div>
    <div class="form-group">
        <label for="js_login_password">密码</label>
        <input type="password" class="form-control" id="js_login_password" placeholder="请输入密码">
    </div>
    <p class="bg-success bg-register" id="js_bgRegister">没有账号,去注册</p>
    <button type="submit" class="btn btn-primary login_btn">登陆</button>
</form>
</div>
`

Login.prototype = {
    init:function(){
        this.render(); 
        this.submit();
        this.handleTo();
    },
    render(){
        this.container.innerHTML = "";
        this.el = document.createElement("div");
        this.el.innerHTML = Login.template;
        this.container.appendChild(this.el)
    },
    submit(){
        var btn = document.getElementById("js_login_btn");
        this.username = document.getElementById("js_login_username");
        this.password = document.getElementById("js_login_password");
        btn.addEventListener("submit",this.handleSubmitCb.bind(this))
    },
    handleSubmitCb(e){
        e.preventDefault();

        axios({
            method:"post",
            url:"http://localhost/xiaomi/ajax/php/login.php",
            data:{
                username:this.username.value,
                password:this.password.value
            }
        }).
        then(this.handleLoginSuccess.bind(this))
    },
    handleLoginSuccess(data){
        if(data.status){
            location.href="http://localhost/xiaomi/index.html";
            alert("登陆成功");
        }
    },
    handleTo(){
        var js_bgRegister = document.getElementById("js_bgRegister");
        js_bgRegister.addEventListener("click",this.handleToCb.bind(this))
    },
    handleToCb(){
        new Users().render(false);
    }
    
}