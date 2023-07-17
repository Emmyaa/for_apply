import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <aside>
            <div className="nav">
                <Link to="/p1" className="link1">
                    <div className="probname">
                        โจทย์ข้อที่ 1
                    </div>
                </Link>
            </div>
            <div className="nav">
                <Link to="/p2" className="link2">
                    <div className="probname">
                        โจทย์ข้อที่ 2
                    </div>
                </Link>
            </div>
        </aside>
    );
};

export default Navigation;