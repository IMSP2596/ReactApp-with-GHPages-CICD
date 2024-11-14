import React from "react";
const App=()=>{
    console.log(`repo name ${process.env.repo_name}`)
    return (
        <>
        <h1>{`Hello World `}</h1>
        
        <h1>{`mode  ${process.env.NODE_ENV}`}</h1>
        </>
    )
}
export default App