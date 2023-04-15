import {actions} from './App'

export default function OperationButton({dispatch,operation}){
    return (
        <button
        onClick={()=> dispatch({type: actions.choose_operation, payload: {operation}})}
        className='cursor-pointer text-3xl border border-white outline-0 bg-white/75 hover:bg-white/90 focus:bg-white/90'>{operation}</button>
    )
}