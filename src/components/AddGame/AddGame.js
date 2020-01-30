import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BotNav from '../Nav/BotNav';


// Material Ui styles brought in for the text fields.
const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 50px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },

    container: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 'relative',
      width: '360px',
      padding: '0px'
    },
    textField: {
      width: '360px',
     
    },
    dense: {
      marginTop: 10,
    },
    menu: {
      width: 300,
    },
    button: {
        margin: theme.spacing.unit,
        textAlign: 'center'
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 50,
      },
      margin: {
        margin: theme.spacing.unit,
    },


  });

  
class AddGame extends Component {

    state = {
        title:'Risk',
        genre:'Strategy ',
        description:'Risk is a strategy board game of diplomacy, conflict and conquest for two to six players. The standard version is played on a board depicting a political map of Earth, divided into forty-two territories, which are grouped into six continents.',
        players:'2-6'
      };
    
      handleChange = (event, propName) => {
        this.setState({
          [propName]: event.target.value,
        });
      };
    
      addNewGame = (event, id) => {
        this.props.dispatch({ type: 'ADD_GAME', payload: this.state });    
        this.setState({
                title:'',
                genre:'',
                description:'',
                players:''
        });
    }

    render() {
        const { classes, children,} = this.props;
      

        return (
         <div>
            <form className = {classes.container} noValidate autoComplete = "off" onSubmit={this.addNewGame}>
                <div >
                {/* {JSON.stringify(this.state.props)} */}
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
                    <div className = {classes.button}>
                    <Button 
                          className={classNames(classes.root)} type="submit" >
                          {children || 'Add to List'}
                      <SaveIcon className={classNames(classes.rightIcon)} />
                    </Button>
                    </div>
                </div>
                 
            </form> 
            <BotNav/>
            </div>
        )
        
    }
}

AddGame.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

  export default connect()(withStyles(styles)(AddGame));