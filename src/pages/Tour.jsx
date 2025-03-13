import avatar from "../assets/avatar.png";
import insta from "../assets/insta.PNG";
import dyar from "../assets/dyar.jpg";
import TourMap from "../components/TourMap";
import TourTable from "../components/TourTable";
import { useParams } from "react-router-dom";
import { coord, tables } from "../constants";

const Tour = () => {
    const { id } = useParams()

    return (
        <div className="full-card">
            <div className="header">
                <img src={avatar}></img>
                <h2>{localStorage.getItem('name')}</h2>
            </div>
            <div className="info">
                <h1>Природные чудеса Алматы</h1>
                <div className='diyar'>
                    <img src={dyar}></img>
                    <div className="text">
                        <h2>Ваш гид</h2>
                        <h3>Саутов Дияр</h3>
                        <p>Номер телефона:<br></br> ⁠+7 707 869 6879</p>
                        <p className="desc">16 летний стаж в сфере «Туризм»</p>
                        <a href="https://www.instagram.com/sautovdiyar?igsh=MTRjNnlsYzI0b2N3&utm_source=qr">
                            <img src={insta}></img>
                        </a>
                    </div>
                </div>
                <TourMap coordinates={coord[id]}/>
                <TourTable tableData={tables[id]}/>
            </div>
            <div className="empty"></div>
        </div>
    )
}

export default Tour