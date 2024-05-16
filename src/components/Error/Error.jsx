import { MdErrorOutline } from "react-icons/md";
import css from '../Error/Error.module.css'
export default function Error({children}) {
    return (
        <div className={css.errorCont}>
        <MdErrorOutline size={220} color={'red'} />
        <p className={css.error}>{children}</p>   
    </div>)
       
}