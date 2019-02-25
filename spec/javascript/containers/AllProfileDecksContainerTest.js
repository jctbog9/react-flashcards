import ProfileDeck from '../../../app/javascript/react/components/ProfileDeck'

import AllProfileDecksContainer from '../../../app/javascript/react/containers/AllProfileDecksContainer'


describe('AllProfileDecksContainer', () => {
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
      <ProfileDeck
        id="1"
        deckName="test deck"
        flashcards={flashcards}
      />
    )
  });

  it('should render a ProfileDeck component', () => {
    expect(wrapper.find(ProfileDeck)).toBePresent();
  });

  it('should render the ProfileDeck component with specific props', () => {
    expect(wrapper.find(ProfileDeck).props()).toEqual({
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
