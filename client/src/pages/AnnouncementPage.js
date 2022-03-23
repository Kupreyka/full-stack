import React, {useEffect} from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {setData} from "../redux/reducers/announcementReducer";
import AnnouncementCard from "./announcementCard/AnnouncementCard";
import Preloader from "../components/preloader/preloader";
import {setAdPageData} from "../redux/reducers/adPageReducer";

const AnnouncementPage = (props) => {

    useEffect(async () => {
        let data = await axios.get('/api/animals?count=6')
        props.setData(data.data)
    }, [])

    return (
        <div className="container">
            <h1>AnnouncementPage</h1>
            {props.announcement && <p class="flow-text">{`Total Animals: ${props.announcement.length}`}</p>}
            {!props.announcement ? <Preloader/> :
                <div className="row">{props.announcement.map(p => <AnnouncementCard animalImg={p.animalImg}
                                                                                    animalName={p.animalName}
                                                                                    streetAddress={p.streetAddress}
                                                                                    city={p.city}
                                                                                    phoneNumber={p.phoneNumber}
                                                                                    data={p.data}
                                                                                    description={p.description}
                                                                                    setAdPageData={props.setAdPageData}/>)}</div>}
        </div>

    )
}

let mapStateToProps = (state) => ({
    announcement: state.announcement.data
})

export default connect(mapStateToProps, {setData, setAdPageData})(AnnouncementPage)
