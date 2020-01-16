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

    // componentDidMount() {
    //     this.props.dispatch({type: "GET_GAMES" });
    // };

    render() {
        const { classes } = this.props;

        return (
            <div>
                {/* {JSON.stringify(this.props)} */}
                {this.props.games && this.props.games.map( ( game ) => {
                    return(
                        
                        <Card key={game.game_id} className = {classes.card}>
                            <CardHeader title = {game.title}/>
                            <CardContent>
                                <Typography component = 'h2'>Game Description:</Typography>
                                <Typography component = 'p'>
                                    {game.desc}
                                </Typography>
                                <Typography component = 'h2'>Number of Players:</Typography>
                                <Typography component = 'p'>
                                    {game.players}
                                </Typography>
                                <Typography component = 'h2'>Genre:</Typography>
                                <Typography component = 'p'>
                                    {game.genre}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        )
    }
}

Games.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (data) => ({
    games: data.games,
  });

  export default connect(mapStateToProps)(withStyles(styles)(Games));