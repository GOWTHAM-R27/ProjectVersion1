const { render } = require("express/lib/application");
const mysql = require("mysql");
// const bcryptjs = require("bcryptjs");
// const bcrypt = require("bcryptjs/dist/bcrypt");
const async = require("hbs/lib/async");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
});
const db2 = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
});
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).render("login", {
        msg: "Please fill the fields",
        msg_type: "error",
      });
    }

    db.query(
      "select * from users where email=?",
      [email],
      async (error, result) => {
        console.log(result);
        if (result.length <= 0) {
          return res.status(401).render("login", {
            msg: "Invalid email/password",
            msg_type: "error",
          });
        } else {
          // if(!(await bcrypt.compare(password, result[0].PASS)))
          if (password !== result[0].PASS) {
            return res.status(401).render("login", {
              msg: "invalid password",
              msg_type: "error",
            });
          } 
          else {
            console.log(email);
            return res.render("home");
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.register = (req, res) => {
  console.log(req.body);
  // const name=req.body.username;
  // const mobile=req.body.mobile;
  // const email=req.body.email;
  // const password=req.body.password;
  // const confirm_password=req.body.confirm_password;
  // console.log(name);
  // console.log(email);
  // console.log("form submitted");

  const { username, mobile, email, password, confirm_password } = req.body;
  db.query(
    "select email from users where email=?",
    [email],
    async (error, result) => {
      // if (username == "") {
      //   return res.render("register", {
      //     msg: "please enter user name",
      //     msg_type: "error",
      //   });
      // }
      // if (!username.match(/^(?=.*[0-9])[a-zA-Z0-9]{7,15}$/)) {
      //   return res.render("register", {
      //     msg: "User name -[7-15 character,atleast one num,no special character]",
      //     msg_type: "error",
      //   });
      // }
      // if (isNaN(mobile) || mobile == "") {
      //   return res.render("register", {
      //     msg: "please enter mobile number",
      //     msg_type: "error",
      //   });
      // }
      // if (mobile.length < 10 || mobile.length > 10) {
      //   return res.render("register", {
      //     msg: "Mobile number not valid",
      //     msg_type: "error",
      //   });
      // }

      if (error) {
        confirm.log(error);
      }
      if (result.length > 0) {
        return res.render("register", {
          msg: "Email id already taken",
          msg_type: "error",
        });
      }
      // if (password == "") {
      //   return res.render("register", {
      //     msg: "Please enter the password",
      //     msg_type: "error",
      //   });
      // }
      // if (
      //   !password.match(
      //     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
      //   )
      // ) {
      //   return res.render("register", {
      //     msg: "Password : 7-15 characters atleast 1 numeric digit and special character",
      //     msg_type: "error",
      //   });
      // } 
      else if (password !== confirm_password) {
        return res.render("register", {
          msg: "Password not match",
          msg_type: "error",
        });
      }
      // let hashedPassword = await bcrypt.hash(password, 8);
      //console.log(hashedPassword);
      db.query(
        "insert into users set?",
        { name: username, mobileno: mobile, email: email, pass: password },
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            return res.render("login");
          }
        }
      );
    }
  );
};

exports.book = (req, res) => {
  console.log(req.body);

  const { Fname, Lname, MobileNo, AlterNo, email, date_time, padd, eadd ,service,days} =req.body;

  // if (Fname == "" || Lname == "") {
  //   return res.render("book_now", {
  //     msg: "please enter user name",
  //     msg_type: "error",
  //   });
  // }
  // if (isNaN(MobileNo) || MobileNo == " ") {
  //   return res.render("book_now", {
  //     msg: "please enter mobile number",
  //     msg_type: "error",
  //   });
  // }
  // if (MobileNo.length < 10 || MobileNo.length > 10) {
  //   return res.render("book_now", {
  //     msg: "Mobile number not valid",
  //     msg_type: "error",
  //   });
  // }
  // if (isNaN(AlterNo) || AlterNo == " ") {
  //   return res.render("book_now", {
  //     msg: "please enter mobile number",
  //     msg_type: "error",
  //   });
  // }
  // if (AlterNo.length < 10 || AlterNo.length > 10) {
  //   return res.render("book_now", {
  //     msg: "Alternate Mobile number not valid",
  //     msg_type: "error",
  //   });
  // }
  // if (email == "") {
  //   return res.render("book_now", {
  //     msg: "please enter email",
  //     msg_type: "error",
  //   });
  // }
  // if (date_time == "") {
  //   return res.render("book_now", {
  //     msg: "please enter date and time",
  //     msg_type: "error",
  //   });
  // }
  // if (padd == "") {
  //   return res.render("book_now", {
  //     msg: "please enter address",
  //     msg_type: "error",
  //   });
  // }
  // if (eadd == "") {
  //   return res.render("book_now", {
  //     msg: "please enter event place address",
  //     msg_type: "error",
  //   });
  // }
  // if (service == "") {
  //   return res.render("book_now", {
  //     msg: "please select the category",
  //     msg_type: "error",
  //   });
  // }
  // if (days == "") {
  //   return res.render("book_now", {
  //     msg: "please select the days",
  //     msg_type: "error",
  //   });
  // }

  var query = "insert into booking values(?,?,?,?,?,?,?,?,?,?);"
  var value = [Fname,Lname,MobileNo,AlterNo,email,date_time,padd,eadd,service,days];

  db2.query(query,value,(error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    }
  );

  res.render("msg");
};

// exports.admin=(req,res)=>{
//   db.query("select * from users",(err,result)=>{
//         var length=result.length;
//         console.log(length);
//         //res.render("admin",{length});
//       console.table(result);
// });
// };

