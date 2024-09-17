import ComponentB from '/home/ahdat305/Documents/Workspace/react/second-app/src/UseContext/ComponentB.jsx';
import React, { createContext, useState } from 'react';
export const UserContext = createContext();
function ComponentA() {
    const [user, setUser] = useState("Dat")
    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>

        </div>
    );
}
export default ComponentA