import React, { Component, useEffect, useState } from 'react';
import { Card } from './style';
import { Button, TextField, Container } from '@material-ui/core';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState(false);
  const [validateRegister, setValidateRegister] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  };

  useEffect(() => {
    if (password === confirmPassword) {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
    console.log(validatePassword);
  }, [password, confirmPassword]);

  const onToogleRegisterButton = () => {
    //Se email, password ou confirm password estiverem vazios não vou deixar registrar
    if (email == '' || password == '' || confirmPassword == '') {
      setValidateRegister(false);
      window.alert('Preencha corretamente os campos para prosseguir');
    } else if (email != '' && password != '' && confirmPassword != '') {
      setValidateRegister(true);
    }
  };

  return (
    <div className='container-initial'>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Card>
          <img src={Logo} style={{ paddingTop: '30px', width: '50%' }} />
          <TextField id="filled-basic" label="E-mail" variant="filled" style={{ margin: '5%' }} value={email} onChange={e => setEmail(e.target.value)} />
          <TextField id="filled-basic" label="Senha" variant="filled" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <TextField id="filled-basic" label="Confirmar Senha" variant="filled" style={{ marginTop:'5%', marginBottom:'5%' }} type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          <p style={{ color: 'red', display: validatePassword ? 'none' : 'flex' }} >Senhas não coincidem</p>
          <Link to={validateRegister ? '/' : '/register'}><Button onClick={e => onToogleRegisterButton()} disabled={validatePassword ? false : true} variant="contained" color="primary" style={{ width: '100%', color: 'white', marginTop: '2%', marginBottom:'10%' }}>
            Cadastrar
          </Button></Link>

        </Card>
      </div>


    </div>
  );
}

export default RegisterScreen