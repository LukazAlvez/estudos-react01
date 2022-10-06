import './styles.css';
import {useState} from 'react';


const colors = ['red', 'blue', 'pink','black'];
let counter = 0;

const Header = () => {

    // funçoes
    let [color, setColor] = useState('red');

    const back = () =>{
        if(counter === 0){
            counter = colors.length - 1
            setColor(colors[colors.length - 1])
        }else{
            counter --
            setColor(colors[counter])
        }
    }
        
    const next = () =>{
        if(counter === colors.length-1){
            counter = 0
            setColor(colors[0])
        }else{
            counter ++
            setColor(colors[counter])
        }     
    }

    // header
    return(
        <div className='header' style={{backgroundColor: color }}>
            <h1>{color.toUpperCase()}</h1>
            <div className='btns'>
                <button onClick={back}>Voltar</button>
                <button onClick={next}>avançar</button>
            </div>
        </div>
    );
}

export default Header;