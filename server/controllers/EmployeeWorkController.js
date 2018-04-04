const EmployeeWork = require('../models/EmployeeWork');

exports.create = (req, res, next) => {
  const newEmployeeWork = req.body.employeeWork;
  console.log(newEmployeeWork);
  EmployeeWork.create(newEmployeeWork)
    .then((createdEmployeeWork) => {
      res.json(createdEmployeeWork);
    })
    .catch(next);
};

exports.find = (req, res, next) => {
  EmployeeWork.findById(req.user.id)
    .then((employeeWork) => {
      res.json(employeeWork);
    })
    .catch(next);
};

exports.update = (req, res, next) => {
  const editEmployeeWork = req.body.employeeWork;
  EmployeeWork.update(editEmployeeWork, req.user.id)
    .then((updatedEmployeeWork) => {
      res.json(updatedEmployeeWork);
    })
    .catch(next);
};