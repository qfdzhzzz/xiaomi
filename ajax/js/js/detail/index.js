function Detail(){
    this.init();
    
}
Detail.prototype = {
    init:function(){
        this.addData();
        this.getData();
        this.tableClick();
        this.updateClick();
    },
    addData:function(){
        this.subject = document.getElementById("js_subject");
        this.answer = document.getElementById("js_answer");
        var addBtn = document.getElementById("js_btn");

        addBtn.addEventListener("click",this.handleAddForm.bind(this))
    },
    handleAddForm(){
        // console.log(111)
        axios({
            method:"post",
            url:"http://localhost/ajax/php/addData.php",
            data:{
                subject:this.subject.value,
                answer:this.answer.value
            }
        }).then(this.handleAddSucc.bind(this));
    },
    handleAddSucc(data){
        if(data.status){
            alert("添加成功");
            this.getData();
        }
    },
    getData(){
        axios({
            method:"get",
            url:"http://localhost/ajax/php/getData.php",
        }).then(this.handleGetDataSucc.bind(this))
    },
    handleGetDataSucc(data){
        this.render(data);
    },
    render(data){
        var str = "";
        this.tbody = document.querySelector("#js_tab>tbody");
        for(var i=0;i<data.length;i++){
            str+=`<tr data-id="${data[i].bid}">
            <td>${i+1}</td>
            <td>${data[i].bname}</td>
            <td>${data[i].banswer}</td>
            <td><a href="##" class="del">删除</a> | <a href="##" class="modify" data-toggle="modal" data-target="#modify_Modal">修改</a></td>
          </tr>`
        }
        this.tbody.innerHTML = str;
    },
    //事件代理
    tableClick:function() {
        var js_tab = document.getElementById("js_tab");
        js_tab.addEventListener("click",this.handleTableCb.bind(this))
    },
    handleTableCb(e){
        var e = e||event;
        var target = e.target || e.srcElement;

        if(target.tagName == "A" && target.className =="del"){
            var id = target.parentNode.parentNode.getAttribute("data-id");
            axios({
                method:"get",
                url:"http://localhost/ajax/php/delete.php",
                data:{
                    id:id
                }
            }).then(this.handleDelSucc.bind(this))
        }else if(target.tagName == "A" && target.className =="modify"){
            var id = target.parentNode.parentNode.getAttribute("data-id");
            axios({
                method:"get",
                url:"http://localhost/ajax/php/modify.php",
                data:{
                    id:id
                }
            }).then(this.handleModifySucc.bind(this))

        }
    },
    handleDelSucc(data){
        if(data.status){
            alert("删除成功");
            this.getData();
        }
    },
    handleModifySucc(data){
        if(data.status){
           this.js_modify_subject = document.getElementById("js_modify_subject");
           this.js_modify_answer = document.getElementById("js_modify_answer");
           this.bid = document.getElementById("bid");
           this.js_modify_subject.value = data.data.bname;
           this.js_modify_answer.value = data.data.banswer;
           this.bid.value = data.data.bid;
        }
    },
    updateClick(){
        var js_modify_btn = document.getElementById("js_modify_btn");
        js_modify_btn.addEventListener("click",this.handleUpdateCb.bind(this))
    },
    handleUpdateCb(){
        axios({
            method:"post",
            url:"http://localhost/ajax/php/update.php",
            data:{
                bid:this.bid.value,
                bname:this.js_modify_subject.value,
                banswer:this.js_modify_answer.value
            }
        }).then(this.handleUpdateSucc.bind(this))
    },
    handleUpdateSucc(data){
        if(data.status){
            alert("修改成功");
            this.getData();
        }
    }
}

new Detail();