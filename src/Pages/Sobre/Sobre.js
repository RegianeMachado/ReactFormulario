import React, { Fragment } from 'react'
import Header from '../../Components/Header/Header'
import Typografy from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useEstilos = makeStyles({
    titulo : {
        textAlign: 'center',
        color: '#303f9f'
    }
})

const Sobre = () => {
    const classes = useEstilos()
    return (
        <Fragment>
            <Header />
            <Container maxWidth='sm'>
                <Typografy
                    className={classes.titulo}
                    variant='h1'
                    component='h2'
                >
                    Sobre
                </Typografy>
                <Typografy
                    variant='body1'
                    component='p'
                >
                    Casa do Código é uma editora que vende livros de tecnologia
                </Typografy>
            </Container>
        </Fragment>
    )
}

export default Sobre;