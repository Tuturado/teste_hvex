import React, { Component, useEffect, useState } from 'react';
import LogoBranca from "../assets/logoBranca.png";
import search from "../assets/search_black_24dp.png";
import { Body, Card, NavBar } from "./style";
import { EMAIL } from "../autentication";
import { Link } from 'react-router-dom';
import { Button, TextField, Container, IconButton } from '@material-ui/core';
import axios from "axios";

const HomeScreen = () => {
    const [user, setUser] = useState('');
    const [data, setData] = useState();

    const api = axios.create({
        baseURL: "https://api.github.com",
    });

    const getUser = (user) => {
        api.get(`/users/${user}`)
            .then((response) => setData(response.data))
            .catch((err) => {
                console.error("Algo deu errado" + err)
            });
    };


    return (
        <div className="container">
            <NavBar>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <img src={LogoBranca} style={{ height: '10%', }} />
                    {EMAIL} | sair
                </div>
            </NavBar>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '86px' }}>
                <div style={{ display: 'flex', marginTop: '5%', flexDirection: 'column', }}>
                    <p style={{ color: 'black' }}>Digite nome do usuário ou e-mail:</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <TextField id="outlined-basic" variant="outlined" value={user} onChange={e => setUser(e.target.value)} />
                        <Button onClick={e => getUser(user)} variant="contained" color='primary' style={{ width: '30%', color: '#1C2C44', }}>
                            <img src={search} style={{ height: '10%', }} />
                        </Button>
                    </div>
                </div>
                <div style={{ display: data == undefined ? 'none' : 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                    <Card>
                        {/*Acredito que por alguns itens desatualizados não foi possível utilziar o Optional Chaining para pegar os dados da API, por esse motivo foi utilizado a maneira antiga*/}
                        <table>
                            <tr>
                                <td><img src={data && data.avatar_url} style={{ width: '119px', height: '119px', borderRadius: '100%', padding: '2%' }}></img></td>
                                <tr>
                                    <td ><p>{data && data.login}</p></td>
                                    <td ></td>
                                    <td><p><b>{data && data.public_repos}</b> Repo. Públicos</p></td>
                                </tr>
                                <tr>
                                    <td><p><b>De:</b> {data && data.location}</p></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><p><b>Bio:</b> {data && data.bio}</p></td>

                                </tr>
                                <tr>
                                    <td><a href={data && data.html_url}>Acessar perfil</a></td>
                                </tr>
                            </tr>
                        </table>







                    </Card>
                </div>

            </div>

        </div>
    );
};

export default HomeScreen;