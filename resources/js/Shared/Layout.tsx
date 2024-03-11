import React from "react";
import Nav from "./Nav";

interface LayoutProps {
    children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps): React.ReactElement => {
    return (
        <div className="min-h-screen min-w-full overflow-y-auto relative">
            <Nav />
            {children}
        </div>
    );
}

export default Layout;
