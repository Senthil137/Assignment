import React, { Component } from 'react';
import AppTitleComponent from "./AppTitleComponent";
import axios from "axios";
import toastr from "toastr"

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        this.fetchExmpleData();
    }
    fetchExmpleData = () => {
        axios.get("data/exampleData.json").then((response) => {
            console.log("data=>", response.data);
            this.setState({
                data: response.data
            })
        }).catch((error) => {
            toastr.error(error)
        });
    }

    render() {
        return (
            <AppTitleComponent test="Conde Nast assessment" />
        );
    }
}

export default Header;
