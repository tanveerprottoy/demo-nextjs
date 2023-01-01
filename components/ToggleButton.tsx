import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggle } from "../store/toggle/action"

export const Toogle = ({ isSet, toggle }: any) => {
    return (
        <div>
            <h1>
                Toogle: <span>{isSet.toString()}</span>
            </h1>
            <button onClick={toggle}>Toogle</button>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    isSet: state.toggler.isSet,
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggle: bindActionCreators(toggle, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toogle)
