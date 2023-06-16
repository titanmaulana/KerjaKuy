import React, {Component, useEffect} from 'react'
import { Button, Container, Paper } from '@mui/material'
import { db, firebaseAuthentication } from '../config/firebase'

export default class Home extends Component{
    componentDidMount(){
        firebaseAuthentication.onAuthStateChanged((user)=>{
            if(!user){
                this.props.history.push('/login')
            }
        })
    }
    handleLogOut = () =>{
        firebaseAuthentication.signOut()
    }
    
    
    render(){
        return(
            <Container>
                <Paper>
                    <Button onClick={this.handleLogOut}>Logout</Button>
                    <h1>Ini Home</h1>
                </Paper>
            </Container>
        )
    }
}



