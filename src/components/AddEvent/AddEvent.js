import React, { Component } from 'react';
import { connect } from 'react-redux';
import BotNav from '../Nav/BotNav';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
// import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { InputAdornment } from '@material-ui/core';

// Material Ui styles brought in for the text fields.
const styles = theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },

    container: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '475px',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 50,
      },
      margin: {
          margin: theme.spacing.unit,
      }
  });

  
class AddEvent extends Component {

    state = {
        title:'',
        location:'',
        description:'',
        date: ''
      };
    
      handleChange = (event, propName) => {
        this.setState({
          [propName]: event.target.value,
        });
      };

    
    
      addNewGame = (event, id) => {
        this.props.dispatch({ type: 'ADD_EVENT', payload: this.state });    
        this.setState({
            title:'',
            location:'',
            description:'',
            date: ''
        });
    }

    render() {
        const { classes, children, className, } = this.props;
      

        return (
            <div>
            <form className = {classes.container} noValidate autoComplete = "off" onSubmit={this.addNewGame}>
                <div>
                {/* {JSON.stringify(this.state.props)} */}
                    <TextField
                        required
                        label="Event Title"
                        placeholder=""
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={this.state.title}
                        onChange = { (event) => this.handleChange( event, 'title' ) }
                    />
                    <TextField
                        required
                        label="Event Date"
                        type="datetime-local"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={this.state.date}
                        InputLabelProps={{shrink: true, require: true}}
                        onChange = { (event) => this.handleChange( event, 'date' ) }
                    />

                    <TextField
                        required
                        label="Location"
                        placeholder="Address, State, Zip Code"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={this.state.location}
                        onChange = { (event) => this.handleChange( event, 'location' ) }
                    />
                    <TextField
                        required
                        label="Description"
                        placeholder="Plans, Games to Bring, etc."
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={this.state.description}
                        onChange = { (event) => this.handleChange( event, 'description' ) }
                    />
                    <TextField 
                    className={classes.textField} 
                    label="Invite by Email"
                    placeholder="example@gmail.com"
                    margin="normal"
                    variant="outlined"
                    // value={this.state.description}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                            ),
                        }}
                    />
                    
                    <Button 
                        className={classNames(classes.root, className)} type="submit" >
                        {children || 'Add to Schedule'}
                    <SaveIcon className={classNames(classes.rightIcon)} />
                    </Button>
                </div>
            </form>

            <BotNav />
            </div>
            
        )
    }
}

AddEvent.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

  export default connect()(withStyles(styles)(AddEvent));