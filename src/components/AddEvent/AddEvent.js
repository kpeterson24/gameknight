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
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      
      multipleRoot: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: theme.spacing.unit / 4,
      },
      noLabel: {
        marginTop: theme.spacing.unit * 3,
      },

     container: {
      display: 'flex',
      flexWrap: 'wrap',
      height: 'relative',
      width: '100%',
    },
    textField: {
      width: '75%',
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

const names = [
    'Korey',
    'Jamie',
    'David',
    'Elmi', 
];

function getStyles(name, that) {
    const weight = that.props.theme.typography;
    return {
        
        fontWeight:
            that.state.name.indexOf(name) === -1 ? weight.fontWeightRegular : weight.fontWeightMedium,
    };
}

  
class AddEvent extends Component {

    state = {
        title:'',
        location:'',
        description:'',
        date: '',
        name: [],
      };
    
      handleChange = (event, propName) => {
        this.setState({
          [propName]: event.target.value,
        });
      };

      handleChange = event => {
          this.setState({ name: event.target.value });
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
          name: value,
        });
      };

    
    
      addNewEvent = (event, id) => {
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
            <form className = {classes.container} noValidate autoComplete = "off" onSubmit={this.addNewEvent}>
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
                    <FormControl className={classes.multipleRoot}>
                        <InputLabel htmlFor="select-multiple">Name</InputLabel>
                        <Select
                        multiple
                        value={this.state.name} //**** this will change to this.props.user.username **** //
                        onChange={this.handleChange}
                        input={<Input id="select-multiple" />}
                        MenuProps={MenuProps}
                        >
                        {names.map(name => (
                            <MenuItem key={name} value={name} style={getStyles(name, this)}>
                                {name}
                            </MenuItem>
                        ))}    
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="select-multiple-names">Selected</InputLabel>
                        <Select
                            multiple
                            value={this.state.name}
                            onChange={this.handleChange}
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
                            {names.map(name => (
                            <MenuItem key={name} value={name} style={getStyles(name, this)}>
                                {name}
                            </MenuItem>
                            ))}
                        </Select>
                        </FormControl>
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

  export default connect()(withStyles(styles, { withTheme: true} )(AddEvent));