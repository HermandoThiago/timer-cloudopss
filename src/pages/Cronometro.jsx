import { useTimer } from 'use-timer';
import { Howl, Howler } from "howler";
import '../styles/geral.scss';

import Button from '../components/Button';

let sound = new Howl({
    src: require("../assets/audios/audio.mp3"),
    loop: true,
    volume: 0.5
})

export default function Cronometro(){
    const { time, start, pause, reset, status, advanceTime } = useTimer();

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const resetTimer = () => {
        reset();
        sound.stop();
    }

    const pauseTimer = () => {
        pause();
        sound.pause();
    }

    const iniciarTimer = () => {
        start();
        sound.play();

    }

    return (
        <div className="container">
            <div className='cronometro'>
                <div className='logo'>
                    <img src={require("../assets/images/logo.png")} alt="logo cloudopss" />
                </div>
                <div className='contagem'>
                    <span>{minutes.toString().padStart(2, "0")}</span><span>:{seconds.toString().padStart(2, "0")}</span>
                </div>
                <div className='botoes'>
                    <Button ClassStyle="start" FunctionClick={iniciarTimer}>
                        Start
                    </Button>
                    <Button ClassStyle="pause" FunctionClick={pauseTimer}>
                        Pause
                    </Button>
                    <Button ClassStyle="start" FunctionClick={resetTimer}>
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    )
}