import {actions} from './App'

export default function DigitButton({dispatch,digit}){
    return (
        <button
        onClick={()=> dispatch({type: actions.add_digit, payload: {digit}})}
        className='cursor-pointer text-3xl border border-white outline-0 bg-white/75 hover:bg-white/90 focus:bg-white/90'>{digit}</button>
    )
}