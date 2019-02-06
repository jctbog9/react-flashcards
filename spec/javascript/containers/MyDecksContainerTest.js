import MyDeckTile from '../../../app/javascript/react/components/MyDeckTile'

import MyDecksContainer from '../../../app/javascript/react/containers/MyDecksContainer'


describe('MyDecksContainer', () => {
  let wrapper;
  let flashcards;

  beforeEach(() => {
    flashcards = [{
      front: "lalala",
      back: "back",
      created_at: "2019-01-20T01:50:01.614Z",
      updated_at: "2019-01-20T01:50:01.614Z",
      deck_id: 1
    }]
    wrapper = mount(
      <MyDeckTile
        id="1"
        deckName="test deck"
        flashcards={flashcards}
      />
    )
  });

  it('should render a MyDeckTile component', () => {
    expect(wrapper.find(MyDeckTile)).toBePresent();
  });

  it('should render the MyDeckTile component with specific props', () => {
    expect(wrapper.find(MyDeckTile).props()).toEqual({
      id: "1",
      deckName: "test deck",
      flashcards: [
        {
          front: 'lalala',
          back: 'back',
          created_at: '2019-01-20T01:50:01.614Z',
          updated_at: '2019-01-20T01:50:01.614Z',
          deck_id: 1
        }
      ]
    });
  });
});
