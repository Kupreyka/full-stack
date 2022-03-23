import React from 'react'
import {connect} from "react-redux";

const AdPage = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={props.adpage.animalImg}/>
                        </div>
                        <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{props.adpage.animalName}<i
                        className="material-icons right">more_vert</i></span>
                            {/*<p><a href="#">This is a link</a></p>*/}
                        </div>
                        <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Description<i
                        className="material-icons right">close</i></span>
                            <p>{props.adpage.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8">
                    <p style={{margin:'0'}} className="flow-text"><b>{props.adpage.animalName}</b></p>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    adpage: state.adpage
})

export default connect(mapStateToProps, {})(AdPage)
