import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import medeu from "../assets/medeu.jpg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { tours } from "../constants";

const Home = () => {
    return (
        <div className="main">
            <div className="header">
                <img src={avatar}></img>
                <h2>{localStorage.getItem('name')}</h2>
            </div>
            <div className="tours">
                {
                    tours.map(({img, name, days }, id) => (
                        <Link to={`/card/${id}`} >
                            <div className="tour-card">
                                <img src={img} alt="" />
                                <div className="card-bottom">
                                    <h3>{name}</h3>
                                    <div className="days">
                                        <AccessTimeIcon />
                                        <span>{days} дней.</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;