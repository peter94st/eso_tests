import { Card, Button } from "antd"
import logo from '../assets/logo/main_logo.png'

import { useNavigate } from "react-router-dom"

export function Home () {
    const navigate = useNavigate()

    return (
        <Card
            style={{
                height: '80%',
                width: '80%',
            }}
            styles={{
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
            }
            }}
        >
            <img src={logo} alt="" style={{
                width: '25%',
                height: 'auto'
            }} />
            <h1>
                {/* ¡ De vuelta en 3º de la ESO ! */}
                ¿Cuánto sabes de 3º de la ESO?
            </h1>
            <p className="biggerFont" >
                Pon a prueba lo que recuerdas de este fatídico curso.
            </p>
            <p className="biggerFont">
                ¿Lo harás mejor que un niño de 15 años?
            </p>
            <Button
                className="startButton"
                syze='large'
                onClick={() => navigate('/subjects')}
            >
                ¡Empezar!
            </Button>
        </Card>
    )
}