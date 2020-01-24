import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BotNav from '../Nav/BotNav';


const styles = themes => ({
    card: {
    maxWidth: 345,
    },
    actions: {
        display: 'flex',
    },
});

class Games extends Component {

    handleDelete = (id) => {

        this.props.dispatch({
            type: 'DELETE_GAME',
            payload: id
        });
    }

    // componentDidMount() {
    //     this.props.dispatch({type: 'GET_GAMES'});
    // };

    

    render() {
        const { classes, children, className } = this.props;

        return (
            <div>
                {JSON.stringify(this.props.games)}
                {this.props.games.map( ( game, i ) => {
                    return(
                        
                        <Card key={i} className = {classes.card}>
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
                            <Button 
                                className={classNames(classes.root, className)} onClick={() => this.handleDelete(game.game_id)}>
                                {children || 'Remove Game'}
                            </Button>
                        </Card>
                    )
                })}
                <BotNav/>
            </div>
        )
    }
}

Games.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
};

const mapStateToProps = (data) => ({
    games: data.games,
  });

  export default connect(mapStateToProps)(withStyles(styles)(Games));