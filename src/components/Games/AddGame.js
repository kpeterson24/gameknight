import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// Material Ui styles brought in for the text fields.
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
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
  });

class AddGame extends Component {

    state = {
        textField: '',
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        const { classes } = this.props;

        return (
            <form className = {classes.container} noValidate autoComplete = "off">
                 <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Game Title"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
        />
            </form>

        )
    }
}

AddGame.propTypes = {
    classes: PropTypes.object.isRequired,
};

  export default connect()(withStyles(styles)(AddGame));