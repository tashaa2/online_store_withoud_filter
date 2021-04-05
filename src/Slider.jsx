import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    

  },

});

function valuetext(value) {
  return {value};
}

export function RangeSlider({value, onValueChange}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>        
      </Typography>
      
      <Slider
        value={value}
        min={10}
        max={110}
        width="100%"
        onChange={onValueChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}