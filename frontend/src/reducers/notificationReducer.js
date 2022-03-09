
const initialState = {
    message: 'This is a notification',
    isVisible: false
}

const notificationReducer = (state=initialState,action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            //StartNotificationTimer()
            return {
                message:action.message,
                isVisible:true
            }
        case 'TURN_OFF_NOTIFICATION':
            return {...state,isVisible:false}
    }
    return state
}

let latestProm = null

export const setNotification = (message,seconds) => {
    const ms = seconds*1000
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            message: message
        })
        const prom = new Promise(resolve=>setTimeout(resolve,ms))
        latestProm = prom
        await prom
        if(prom===latestProm) {
            dispatch({
                type: 'TURN_OFF_NOTIFICATION'
            })
         }

    }
}

export const turnOffNotification = () => {
    return {
        type: 'TURN_OFF_NOTIFICATION'
    }
}

export default notificationReducer