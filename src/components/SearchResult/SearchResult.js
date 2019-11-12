import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container.js';


class SearchResult extends React.Component{

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
    searchString: PropTypes.string,
    params: PropTypes.node,
  }

  render() {
    const {cards} = this.props;
    return (
      <Container>
        <div>
          {cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
      </Container>
    );
  }

}
export default SearchResult;
