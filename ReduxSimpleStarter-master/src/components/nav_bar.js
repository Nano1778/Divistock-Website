import React, { Component } from 'react';
import {Navbar,FormGroup, FormControl, Button} from 'react-bootstrap';

const NavBar =() => {
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Divistock</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    );

};

export default NavBar;