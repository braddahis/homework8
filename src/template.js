const Employee = require("../lib/Employee")

const generateHTML = teamData => {
    const generateManager = manager => {
        return `
        <div>${manager.getName()}</div>
        <div>${manager.getId()}</div>
        <div>${manager.getEmail()}</div>
        <div>${manager.getOfficeNumber()}</div>
        
        `
    }
    // Do engineer 
    // Do Intern
    const HTML = []
    HTML.push(team.filter(employee=>employee.getRole()==="Manager"))
    .map(manager=>generateManager(manager))

    // Do a .join for intern and engineer






}
module.exports=team=>{
    return `

    <div>${generateHTML(team)}</div>
    
    
    
    `
}