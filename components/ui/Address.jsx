import { FiMapPin } from "react-icons/fi";
export default function Address({addClass}){

    return(
        <div className={`${addClass ? addClass : ''} flex gap-2`}>
            <FiMapPin className={`mt-1`}/> Ziya Gökalp Mahhürriyet cad. 21/c Başakşehir / İstanbul
        </div>
    )
}