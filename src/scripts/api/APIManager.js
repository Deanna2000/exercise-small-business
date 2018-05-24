const $ = require("jquery")


const APIManager = Object.create(null, {
    getAllEmployees: {
        value: function () {
            return $.ajax("http://localhost:8088/employees")
        }
    },
    getDepartment: {
        value: function (departmentId) {
            return $.ajax("http://localhost:8088/departments")
        }
    },
    getComputer: {
        value: function (computerId) {
            return $.ajax("http://localhost:8088/computers")
        }
    },
    getSingleEmployee: {
        value: function (employeeId) {
            return $.ajax(`http://localhost:8088/employees${employeeId}`)
        }
    },
    createEmployee: {
        value: function (employee) {
            return $.ajax({
                url: "http://localhost:8088/employees",
                method: "POST",
                data: employee
            })
        }
    },
    terminateEmployee: {
        value: function (employeeId) {
            return $.ajax({
                url: `http://localhost:8088/employees/${employeeId}`,
                method: "DELETE"
            })
        }
    },
    updateEmployee: {
        value: function (employee) {
            return $.ajax({
                url: `http://localhost:8088/employees/${employee.id}`,
                method: "PUT",
                data: employee
            })
        }
    }
})

module.exports = APIManager

