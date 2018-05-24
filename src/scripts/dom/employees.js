const api = require("../api/APIManager")
const $ = require("jquery")

const employeeList = function () {
    // Get the employees
    api.getAllEmployees()
    .then(allEmployees => {
        // Iterate over employee list
        allEmployees.forEach(employee => {
            // Build HTML representation for each one
            currentEmployee = employee.name
            console.log(currentEmployee)
            $("#employee-list").append(
                `
                <div id="employeeName">
                    <section id=${employee.empID}>
                        ${employee.name}
                    </section>
                </div>
                `)

        api.getDepartment(employee.deptID)
        .then(oneDept => {
            //Iterate over department list
            oneDept.forEach(id => {
                if(employee.deptID === id.deptID){
                $(`#${employee.empID}`).append(
                    `
                    <section>
                    Dept: ${id.type}
                    </section>
                    `
                )}
                else if (employee.deptID === "undefined") {
                    console.log("No department is listed for this employee.")
                }
            })
            api.getComputer(employee.compID)
            .then(oneComp => {
                //Iterate over computer list
                oneComp.forEach(cid => {
                    if(employee.compID === cid.compID){
                    $(`#${employee.empID}`).append(
                        `
                        <section>
                        Computer: ${cid.type}
                        </section>
                        `
                    )}
                    else if (employee.compID === "undefined") {
                        console.log("No computer is listed for this employee.")
                    }
            })
})
})}
)}
)}


module.exports = employeeList