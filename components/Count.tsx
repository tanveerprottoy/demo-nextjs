import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount, removeCount } from '../store/count/action'

export const Count = ({ count, addCount, removeCount }: any) => {
    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <button onClick={addCount}>Add Count</button>
            <button onClick={removeCount}>Remove Count</button>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    count: state.count.count,
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        addCount: bindActionCreators(addCount, dispatch),
        removeCount: bindActionCreators(removeCount, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
