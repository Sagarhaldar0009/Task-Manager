const { createContext } = require("react");


const UserContext = createContext({})

export default UserContext;


// Concept of Context API in ReactJs
// Step - 1 : Create a Context (Done in Above)
// Step - 2 : Provide the Context to your App (Done in layout.js - by wrapping all component inside <UserContext> component)
// Step - 3 : 