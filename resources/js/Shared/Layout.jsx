import React from "react";
import Nav from "./Nav";
function Layout({ children }) {
    return (
        <div className="min-h-screen min-w-full overflow-y-auto">
            <Nav />
            {children}
        </div>
    );
}

export default Layout;
