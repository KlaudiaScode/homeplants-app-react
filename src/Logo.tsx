import { Link } from 'react-router-dom';
import {ReactComponent as Icon} from './logo.svg';


export default function Logo(){
    return (
        <div className="logo">
        <Icon />
        <Link to='/'>𝓗𝓸𝓾𝓼𝓮𝓟𝓵𝓪𝓷𝓽𝓼</Link>
        </div>
    )}
