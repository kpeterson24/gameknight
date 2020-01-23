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
import { InputAdornment, InputLabel, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';


// Material Ui styles brought in for the text fields.
const styles = theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 5,
        border: 0,
        color: 'white',
        height: 50,
        padding: '0 50px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        margin: theme.spacing.unit,
      },
      
      multipleRoot: {
        margin: theme.spacing.unit,
        width: '400px',  
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing.unit,
        width: 400,
        float: 'left',
        flexWrap: 'wrap',
        display: 'flex',
        
      },

      chips: {
        display: '100%',
        flexWrap: 'wrap',
      },
      chip: {
        margin: theme.spacing.unit / 5,
      },
      noLabel: {
        marginTop: theme.spacing.unit,
      },

     container: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 'relative',
      width: '400px',
      paddingTop: '50px'
    },
    textField: {
      width: '400px',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 300,
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

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

const guests = [
    
];

function getStyles(guest, that) {
    const weight = that.props.theme.typography;
    return {
        
        fontWeight:
            that.state.guests.indexOf(guest) === -1 ? weight.fontWeightRegular : weight.fontWeightMedium,
    };
}


  
class AddEvent extends Component {

    state = {
        title:'',
        location:'',
        description:'',
        date: '',
        guests: [],
      };

      addNewEvent = (event, id) => {
        this.props.dispatch({ type: 'ADD_EVENT', payload: this.state });    
        this.setState({
            
        });
    }
    
      handleChange = (event, propName) => {
        this.setState({
          [propName]: event.target.value,
        });
        console.log(event.target.value);
        
      };

      handleGuestChange = event => {
          this.setState({ guests: event.target.value });
      };

      handleChangeMultiple = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.setState({
          guests: value,
        });
      };

      componentDidMount() {
          this.props.dispatch({type: 'GET_USERS'});
      };
    
    
      addNewEvent = (event, id) => {
        this.props.dispatch({ type: 'ADD_EVENT', payload: this.state });    
        this.setState({
            title:'',
            location:'',
            description:'',
            date: '',
            guests:[],
        });
    }

    render() {
        const { classes, children, className, } = this.props;
        console.log('hello');
        
      

        return (
            <div>
                {/* {JSON.stringify(this.props.users)} */}
            <form className = {classes.container} noValidate autoComplete = "off" onSubmit={this.addNewEvent}>
                <div>
                
                
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
                    {/* <TextField 
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
                    /> */}
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-names">Add Guests</InputLabel>
                        <Select
                            multiple
                            value={this.state.guests}
                            onChange={this.handleGuestChange}
                            input={<Input id="select-multiple-names" />}
                            renderValue={selected => (
                            <div className={classes.chips}>
                                {selected.map(value => (
                                <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                            )}
                            MenuProps={MenuProps}
                        >
                            {this.props.users.map(guest => (
                            <MenuItem key={guest.id} value={guest.id} style={getStyles(guest, this)}>
                                {guest.username}
                            </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    <br></br>
                    <div>    
                    <Button 
                        className={classNames(classes.root)} 
                        type="submit"
                        padding="50px"
                        >
                        {children || 'Add to Schedule'}
                    <SaveIcon className={classNames(classes.rightIcon)} />
                    </Button>
                    </div>
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
const putReduxStateOnProps = ( reduxStore ) => ({
    users: reduxStore.allUsers
})

  export default connect(putReduxStateOnProps)(withStyles(styles, { withTheme: true} )(AddEvent));