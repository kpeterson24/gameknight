import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const styles = themes => ({
    card: {
    maxWidth: 345,
    },
    actions: {
        display: 'flex',
    },
});

class Games extends Component {

    componentDidMount() {
        this.props.dispatch({type: "GET_GAMES"});
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h1>My Games</h1>
                {this.props.game.map( ( game, i ) => {
                    return(
                        
                        <Card className = {classes.card}>
                            <CardHeader title = {this.props.game.title}/>
                            <CardContent>
                                <Typography component = 'h2'>Game Description:</Typography>
                                <Typography component = 'p'>
                                    {this.props.game.desc}
                                </Typography>
                                <Typography component = 'h2'>Number of Players:</Typography>
                                <Typography component = 'p'>
                                    {this.props.game.players}
                                </Typography>
                                <Typography component = 'h2'>Genre:</Typography>
                                <Typography component = 'p'>
                                    {this.props.game.genre}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

Schedule.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = data => ({
    user: data.user,
  });

  export default connect(mapStateToProps)(withStyles(styles)(Games));