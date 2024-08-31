import Sidebar from "../Sidebar/Sidebar";
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <div className="main">
                {children}
            </div>
        </div>
    );
};

export default Layout;
