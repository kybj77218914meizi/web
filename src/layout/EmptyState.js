import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  }
});

class EmptyState extends Component {
  render() {
    const { classes, icon, text } = this.props;

    return (
      <div className={classes.center}>
        {icon}
        <Typography color="textSecondary" variant="h4">{text}</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(EmptyState);