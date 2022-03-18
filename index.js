require("babel-core").transform("code", {
  plugins: ["conditional-compile",{
    define:{
      IS_DEV:false,
      CODE_FOR_IE:true
    }
  }]
});
