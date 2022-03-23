import React from 'react'
import {connect} from "react-redux"
import {useFormik} from 'formik';
import {setMessageData} from "../redux/reducers/adPageReducer";


const AdPage = (props, {resetForm}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            comment: ''
        },
        onSubmit: values => {
            props.setMessageData(values.name, values.phone, values.comment)
            formik.resetForm()
        },
    });

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
                    <span className="card-title grey-text text-darken-4">Short description<i
                        className="material-icons right">close</i></span>
                            <p>{`${props.adpage.animalName} is waiting to be found!`}</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8">
                    <p style={{margin: '0'}} className="flow-text"><b>{props.adpage.animalName}</b></p>
                    <p><b>City:</b> {props.adpage.city}</p>
                    <p><b>Street Address:</b> {props.adpage.streetAddress}</p>
                    <p><b>Number phone:</b> {props.adpage.phoneNumber}</p>
                    <p><b>Data:</b> {props.adpage.data.substring(0, 10)}</p>
                    <p><b>Description:</b> {props.adpage.description}</p>
                    <p className="flow-text">Leave your comment:</p>
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input
                                required="true"
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <label htmlFor="phone">Number phone</label>
                            <input
                                required="true"
                                id="phone"
                                name="phone"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            />
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                required="true"
                                id="textarea1"
                                className="materialize-textarea"
                                name="comment"
                                onChange={formik.handleChange}
                                value={formik.values.comment}
                            />
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                    <div className="feedbackComment" style={{marginTop: "1rem"}}>
                        {props.adpage.messageData.map(p => <FeedbackComment name={p.name} comment={p.comment}
                                                                            phone={p.phone}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const FeedbackComment = (props) => {
    return (
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{props.name}</span>
                <p style={{fontSize:'12px'}}>{props.phone}</p>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}


let mapStateToProps = (state) => ({
    adpage: state.adpage
})

export default connect(mapStateToProps, {setMessageData})(AdPage)
