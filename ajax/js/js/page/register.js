function Register(container){
    this.container = container;
    this.init();
}

Register.template = `
<div class="container register">
<form id="js_register_btn">
    <div class="form-group">
        <label for="js_register_username">用户名</label>
        <input type="text" class="form-control" id="js_register_username" placeholder="请输入用户名">
    </div>
    <div class="form-group">
        <label for="js_register_password">密码</label>
        <input type="password" class="form-control" id="js_register_password" placeholder="请输入密码">
    </div>
    <p class="bg-success bg-login" id="js_bgLogin">已有账号,去登陆</p>
    <button type="submit" class="btn btn-primary register_btn" >注册</button>
</form>
</div>
`

Register.prototype = {
    init:function(){
        this.render(); 
        this.submit();
        this.handleTo();
    },
    render(){
        this.container.innerHTML = "";
        this.el = document.createElement("div");
        this.el.innerHTML = Register.template;
        this.container.appendChild(this.el)
    },
    submit(){
        var btn = document.getElementById("js_register_btn");
        this.username = document.getElementById("js_register_username");
        this.password = document.getElementById("js_register_password");
        btn.addEventListener("submit",this.handleSubmitCb.bind(this))
    },
    handleSubmitCb(e){
        //阻止默认事件
        e.preventDefault();

        axios({
            method:"post",
            url:"http://localhost/xiaomi/ajax/php/register.php",
            data:{
                username:this.username.value,
                password:this.password.value
            }
        }).then(this.handleRgisterSuccess.bind(this))
        

    },
    handleRgisterSuccess(data){
        if(data.status){
            
            alert("注册成功");
            setTimeout(function(){
                new Users().render(true);
            },2000)
        }
    },
    handleTo(){
        var js_bgLogin = document.getElementById("js_bgLogin");
        js_bgLogin.addEventListener("click",this.handleToCb.bind(this))
    },
    handleToCb(){
        new Users().render(true);
    }
}