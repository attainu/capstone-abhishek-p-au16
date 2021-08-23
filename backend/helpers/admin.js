const AdminModel = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { secretkey } = process.env;



module.exports = {
    adminSignup: async (req, res) => {
      admin = req.body;
      const salt = await bcrypt.genSalt(10);
  
      const hashedPassword = await bcrypt.hash(admin.password, salt);
      user.password = hashedPassword;
      console.log(user);
  
      const newAdmin = new AdminModel(admin);
      newAdmin.save((err, newAdmin) => {
        if (err) {
          return res.status(400).json({ message: err });
        }
        res.json({ newAdmin });
        console.log(Admin);
      });
    },
    adminLogin: (req, res) => {
        AserModel.findOne({ email: req.body.email }, (err, data) => {
          if (err)
            return res
              .status(500)
              .send({ auth: false, error: "Error while login" });
          if (!data)
            return res
              .status(500)
              .send({ auth: false, error: "you are not a admin" });
          else {
            const passIsValid = bcrypt.compareSync(req.body.password,data.password);
            if (!passIsValid) {
              return res
                .status(500)
                .send({ auth: false, error: "Invalid Password" });
            }
            let token = jwt.sign({ id: data.id }, secretkey, { expiresIn: 86400 });
            return res
              .status(200)
              .send({
                id: data.id,
                name: data.username,
                email: data.email,
                role: data.role,
                token: token,
              });
          }
        });
      }
}