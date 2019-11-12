import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsForSearch, createAction_addCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    cards: getCardsForSearch(state, id),
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
