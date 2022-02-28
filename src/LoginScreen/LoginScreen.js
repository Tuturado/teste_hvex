import React, { Component, useEffect, useState } from 'react';
import { Card } from './style';
import { Button, TextField, Container } from '@material-ui/core';
import Logo from '../assets/Logo.png';
import { EMAIL, PASSWORD } from '../autentication';
import { Link } from 'react-router-dom';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   //Hook criado para validar se o Login e senha estão corretos
  const [validateLogin, setValidateLogin] = useState(false);

  const onToogleLoginButton = () => {
    //Comparando se EMAIL e PASSWORD estão iguais ao que foi digitado
    if (email === EMAIL && password === PASSWORD) {
      //se forem iguais seto validate login para true e passo para próxima tela
      setValidateLogin(true);
    } else {
      //seto validateLogin para false mesmo e exibo uma notificação
      setValidateLogin(false);
      window.alert('Usuário ou senha Incorretos');
    }
  };


  return (
    <div className='container-initial'>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Card>
          <img src={Logo} style={{ paddingTop: '30px', width: '50%' }} />
          <TextField id="filled-basic" label="E-mail" variant="filled" style={{ margin: '5%' }} value={email} onChange={e => setEmail(e.target.value)} />
          <TextField id="filled-basic" label="Senha" variant="filled" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Link to={validateLogin ? '/home' : '/'}><Button onClick={e => onToogleLoginButton()} variant="contained" color="primary" style={{  color: 'white', marginTop: '15%' }}>
            Login
          </Button></Link>
          <Link to='/register' style={{ color: '#10486D', marginBottom:'5%' }} >Registrar</Link>
        </Card>
      </div>

    </div>
  );
}

export default LoginScreen;