var fs=require("fs")
fs.writeFile("mynewfile2.txt","Hello muskan valmikee!",function(err){
    if (err) throw err;
       console.log("saved!")
});
//here we create file by using fs.writeFile() methods 