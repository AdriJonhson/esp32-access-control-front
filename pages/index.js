import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Head from 'next/head'
import Link from 'next/link'

import NextCors from 'nextjs-cors'


import React, { useState, useEffect } from 'react';


export default function Home() {
  const [data, setData] = useState([])

  // const URL = 'http://147.182.191.7:8080/api/users';
  const URL = 'http://localhost:8080/api/users';

  const fetchData = () => {
    fetch(URL)
      .then((res) =>
        res.json())
 
      .then((response) => {
        setData(response);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Head>
        <title>ESP32 - Controle de Acesso</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav className="navbar navbar-home navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Controle de Acesso - Usuários</a>
        </nav>

        <hr></hr>

        <div className='wrapper-home'>
          <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Nome</th>
                  <th scope="col">E-Mail</th>
                  <th scope="col">Data de expiração</th>
                  <th scope="col">Código do Cartão</th>
                  <th scope="col">Status</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.lastAccess}</td>
                        <td>{item.rfidCode}</td>
                        {item.status == "ACTIVE" ? (
                          <td><span className="badge bg-success">Ativo</span></td> 
                          ) : (
                          <td><span className="badge bg-danger">Inativo</span></td>
                        )}
                        <td><button type="button" className="btn btn-outline-primary btn-sm"><i className="bi bi-pencil"></i></button></td>
                        <td><button type="button" className="btn btn-outline-danger btn-sm"><i className="bi bi-trash"></i></button></td>
                    </tr>
                ))}
              </tbody>
          </table>

          <Link href="/create">
            <a className="btn btn-sm btn-secondary" type="button">Adicionar Usuário</a>
          </Link>
          
        </div>
      </div>
    </div>
  )
}
