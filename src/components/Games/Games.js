import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BotNav from '../Nav/BotNav';


const styles = themes => ({
    card: {
        justifyContent: 'center',
        width: '360px',
        paddingTop: '0px',
        margin: '20px',
        marginLeft: '550px'
        
    },
    actions: {
        display: 'flex',
    },

    centerCard: {
        justify: 'center',
        textAlign: 'center'
    },
    button: {
        margin: themes.spacing.unit,
        textAlign: 'center'
      },
});

class Games extends Component {

    state = {
        editMode: false,
    }

    componentDidMount() {
        this.props.dispatch({type: 'GET_GAMES'});
    };

    editGame = () => {
        this.setState({
            editMode: true,
        })
    }

    handleDelete = (id) => {

        this.props.dispatch({
            type: 'DELETE_GAME',
            payload: id
        });
    }

    handleEdit = (event) => {
        this.props.dispatch({ type: 'EDIT_GAME', payload: {...this.state, id: this.props.games[0].game_id} });
        this.setState({
            editMode: false,
            title:'',
            genre:'',
            description:'',
            players:''
        });

    }

    handleChange = (event, propName) => {
        this.setState({
          [propName]: event.target.value,
        });
      };

    

    editGameForm = () => {
        if( this.state.editMode ) {
            const { classes, children, className} = this.props;
            return (
            
                <form className = {classes.container} noValidate autoComplete = "off" onSubmit={this.handleEdit}>
                    <div>
                        <TextField
                            required
                            label="Game Title"
                            placeholder="Risk, Jumanji?"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={this.state.title}
                            onChange = { (event) => this.handleChange( event, 'title' ) }
                        />
                        <TextField
                            required
                            label="Genre"
                            placeholder="Strategy, Board Game?"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={this.state.genre}
                            onChange = { (event) => this.handleChange( event, 'genre' ) }
                        />
                        <TextField
                            required
                            label="Description"
                            placeholder="Briefly, Please"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={this.state.description}
                            onChange = { (event) => this.handleChange( event, 'description' ) }
                        />
                        <TextField
                            required
                            label="Number of Players"
                            placeholder="Min - Max"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            value={this.state.players}
                            onChange = { (event) => this.handleChange( event, 'players' ) }
                        />
                        
                        <Button 
                            className={classNames(classes.root, className)} type="submit">
                            {children || 'Save Changes'}
                        <SaveIcon className={classNames(classes.rightIcon)} />
                        </Button>
                        
                    </div> 
                </form>
            
            
        )
        }else{
            return ;
        }
    }
    

    render() {
        const { classes, children, className } = this.props;

        return (
            <div>
                {/* {JSON.stringify(this.props.games)} */}
                {this.props.games.map( ( game, i ) => {
                    return(
                        <>
                        <Card key={i} className = {classes.card}>
                            <CardHeader title = {game.title}/>
                            <CardContent>
                                <Typography variant = 'h6' component = 'h2'>Game Description:</Typography>
                                <Typography component = 'p'>
                                    {game.desc}
                                </Typography>
                                <br>
                                </br>
                                <Typography variant = 'h6' component = 'h2'>Number of Players:</Typography>
                                <Typography component = 'p'>
                                    {game.players}
                                </Typography>
                                <br>
                                </br>
                                <Typography variant = 'h6' component = 'h2'>Genre:</Typography>
                                <Typography component = 'p'>
                                    {game.genre}
                                </Typography>
                            </CardContent>
                            <Button 
                                className={classNames(classes.root, className)} onClick={() => this.handleDelete(game.game_id)}>
                                {children || 'Remove Game'}
                            </Button>
                            <Button 
                                className={classNames(classes.root, className)} onClick={() => this.editGame(game.game_id)}>
                                {children || 'Edit Game Details'}
                            </Button>
                            
                        </Card>
                        <div className = {classes.card}>
                        {this.editGameForm()}
                        </div>
                        </>
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