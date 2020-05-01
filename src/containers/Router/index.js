import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home';
import Calendar from '../Calendar';

export const routes = {
    initial: '/', // página que some
    login: '/login',
    signUp: '/cadastro',
    home: '/home', // estilo feed do profissional com seus trabalhos e tal
    agendamento: '/agendamento',
    produtos: '/produtos',
    detalheDeProduto: '/detalhe',
    carrinho: '/carrinho',
    minhaConta: '/minha-conta'
}

function Router(props){
    const { history } = props
    
    return(
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path={routes.home} component={Home}/>
                <Route exact path={routes.agendamento} component={Calendar}/>
                <Route path="*" component={() => "Página não encontrada"} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router