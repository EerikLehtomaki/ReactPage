import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {

        switch(this.state.activeTab) {
            case 0:
                return (
                    <div className="projects-grid">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} >
                                React Project #1
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} >
                                React Project #2
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}} >
                                React Project #3
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>
                )
            case 1:
                return (
                    <div><h1>This is Angular</h1></div>
                )
            case 2:
                return (
                    <div><h1>This is VueJS</h1></div>
                )
            case 3:
                return (
                    <div><h1>This is Android</h1></div>
                )
            default:
                return (
                    <div><h1>Something might be a bit off</h1></div>
                )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState( { activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>Android</Tab>
                </Tabs>


                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

            </div>
        )
    }
}

export default Projects;