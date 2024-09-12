import { useEffect, useState } from 'react';
import './card.css'

interface ICard {
    index     : number;
    id        : number;
    urlImage  : string;
    title     : string;
    eventClick: any;
    attempts  : number;
}

function Card(props: ICard) {
    const [active, setActive ] = useState<string>(``);

    function eventClick() {
        setActive(active === 'active' ? '' :'active')
        props.eventClick(props.id);
    }

    useEffect(() => {
        if( props.attempts > 1) {
            setActive('')
        }
    }, [props.attempts])

    return(
        <>
        <div className='card' onClick={eventClick}>
            <div className={`card__image ${active}`}>
                <img src={props.urlImage} />
            </div>
            <div className='card__description'>
                {props.id}
                {/* {props.title} - {props.id}                 */}
            </div>
        </div>
        </>
    )
}

export default Card