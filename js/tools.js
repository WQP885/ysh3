//动画函数
                /*参数
                 * -1.obj 对象
                 * -2.speed 速度
                 * -3.target 执行动画的目标
                 * -4.arrt 要变化的样式
                 * -5.callback:回调函数 将会在动画执行完后执行
                 */
            
                function move (obj,speed,target,arrt,callback){
                    //关闭上一次定时器
                        clearTimeout(obj.timer);
                        //判断速度的正负值
                        //如果从0向800移动则为正
                        //如果从800向0移动则为负
                        var current=parseInt(getStyle(obj,arrt));
                       if(current>target){
                           speed=-speed;
                       }
                       //开启一个定时器
                       //为obj添加一个timer属性，用来保存它1自己的定时器的标识
                        obj.timer=setInterval(function(){
                            
                       //获取原来的left值
                        var oldvalue=parseInt(getStyle(obj,arrt));
                        var newvalue=oldvalue+speed;
                        if(speed<0&&newvalue<target||speed>0&&newvalue>target)
                        {
                            newvalue=target;
                        }
                        obj.style[arrt]=newvalue+"px";
                        //当元素到达target关闭定时器
                        if(newvalue===target||newvalue===target){
                        clearTimeout(obj.timer);
                        //动画执行完 执行函数
                        callback&&callback();
                    }
                    
                },30);
                };// JavaScript Document