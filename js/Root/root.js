
    var url = {
        //登录页用户名验证
        // userName: "http://www.shouyouxinjiang.com/frontshow/register/checkCustomerName",
        //登录页
        userName: "http://www.shouyouxinjiang.com/frontshow/login/login",
        //用户注册页手机号验证
        tell_Verification: "http://www.shouyouxinjiang.com/frontshow/register/checkMobileCode",
        //用户注册页校验验证码
        Verification_Code: "http://www.shouyouxinjiang.com/frontshow/register/checkVerificationCode",
        //用户注册页发送手机验证码
        sendMobileCode: "http://www.shouyouxinjiang.com/frontshow/register/sendMobileCode",
        //用户找回密码页
        //第一页用户名校验
        //验证用户名是否存在
        checkAccountName: "http://www.shouyouxinjiang.com/frontshow/findpwd/checkAccountName.json",
        //校验手机验证码
        checkVerificationCode: "http://www.shouyouxinjiang.com/frontshow/findpwd/checkCustomerMobileValidateCode.json",
        //第一页下一步
        doStep1: "http://www.shouyouxinjiang.com/findpwdComp/doStep1",
    
        //第二页验证身份
        //获取手机验证码
        getCustomerMobileValidateCode: "http://192.168.90.188:8082/frontshow/findpwd/getCustomerMobileValidateCode.json",
        //校验手机验证码
        checkCustomerMobileValidateCode:"http://192.168.90.188:8082/frontshow/findpwd/checkCustomerMobileValidateCode.json",
        //跳转第三步
        doStep2:"http://www.shouyouxinjiang.com/findpwdComp/doStep2",
        //提交新密码
        changePwd:"http://www.shouyouxinjiang.com/frontshow/findpwd/changePwd"
    
    }
