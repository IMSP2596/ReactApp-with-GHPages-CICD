import React from "react";
const App=()=>{
    console.log(`repo name ${process.env.repo_name}`)
    return (
        <>
        <h1>{`Hello World `}</h1>
        
        <h2>{`mode  ${process.env.NODE_ENV}`}</h2>

        <h3>{`repo name ${process.env.repo_name}`}</h3>
        </>
    )
}
export default App
