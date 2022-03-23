import React, {useState} from 'react'
import Preloader from "../../components/preloader/preloader";
import {NavLink} from "react-router-dom";

const AnnouncementCard = (props) => {

    const [loading, setLoading] = useState(false)

    const submitData = () => {
        props.setAdPageData(props.animalImg, props.animalName, props.streetAddress, props.city, props.phoneNumber, props.data, props.description)
    }

    return (
        <div className="col s12 m4">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.animalImg} alt={''} onLoad={() => {
                        setLoading(true)
                    }}/>
                    {!loading && <Preloader/>}
                    <span className="card-title z-depth-1 blue-grey darken-1">{props.animalName}</span>
                </div>
                <div className="card-content">
                    <p><b>City:</b> {props.city}</p>
                    <p><b>Street Address:</b> {props.streetAddress}</p>
                    <p><b>Number phone:</b> {props.phoneNumber}</p>
                    <p><b>Data:</b> {props.data.substring(0, 10)}</p>
                </div>
                <div className="card-action">
                    <NavLink to={"/adpage"} onClick={submitData}><b>More...</b></NavLink>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementCard
