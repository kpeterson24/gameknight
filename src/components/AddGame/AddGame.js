import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

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
        const { classes, children, className, ...other } = this.props;

        return (
            <form className = {classes.container} noValidate autoComplete = "off">
                <TextField
                    required
                    id="outlined-required"
                    label="Game Title"
                    placeholder="Risk, Jumanji?"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Genre"
                    placeholder="Strategy, Board Game?"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Description"
                    placeholder="Briefly, Please"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Number of Players"
                    placeholder="Min - Max"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <div>
                <Button className={classNames(classes.root, className)} {...other}>
                    {children || 'Add to List'}
                <SaveIcon className={classNames(classes.rightIcon)} />
                </Button>
                </div>
            </form>

        )
    }
}

AddGame.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

  export default connect()(withStyles(styles)(AddGame));