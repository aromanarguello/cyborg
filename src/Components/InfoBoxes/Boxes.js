import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  const style = { height: '200px'}
  const text = { textAlign: 'center'}
  return (
    <div className="infoboxes">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="headline" 
            component="h2"
            style={text} >
                Lizard
          </Typography>
          <Typography 
            style={text} 
            component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
