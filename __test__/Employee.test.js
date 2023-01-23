const Employee = require ("../lib/Employee")
test ("can instantiat employee instance", ()=>{
    const bill = new Employee ()
    expect (typeof(bill)).toBe("object")
})
test ("can set the name via the constructor",()=>{
    const name = "anyName"
    const e=new Employee (name)
    expect (e.name).toBe(name)
})
test ("can set the id via the constructor",()=>{
    const testId = 100
    const e=new Employee ("apple", testId)
    expect (e.id).toBe(testId)
})
test ("can set the name via the constructor",()=>{
    const email = "anyName@.com"
    const e=new Employee ("name", 100, email)
    expect (e.email).toBe(email)
})
test ("can set the name via the getName()",()=>{
    const testName = "anyName"
    const e=new Employee (testName)
    expect (e.name).toBe(testName)
})
test ("can set the id via the getId()",()=>{
    const testId = 100
    const e=new Employee ("name", testId)
    expect (e.id).toBe(testId)
})
test ("can set the email via the getEmail()",()=>{
    const testEmail = "anyName@.com"
    const e=new Employee ("name", 100, testEmail)
    expect (e.email).toBe(testEmail)
})
test ("getRole() should return Employee",()=>{
    const test = "Employee"
    const e=new Employee ("name", 100, "Alex@gmail.com")
    expect (e.getRole()).toBe(test)
})
