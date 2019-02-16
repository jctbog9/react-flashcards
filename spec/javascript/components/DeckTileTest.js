import DeckTile from '../../../app/javascript/react/components/DeckTile'

describe('DeckTile', () => {
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
      <DeckTile
        id={1}
        name="Test Deck"
        flashcards={flashcards}
        author="test@gmail.com"
      />
    )
  });

  it('should render an h2 tag', () => {
    expect(wrapper.find('h2')).toBePresent();
  });

  it('should render an a tag', () => {
    expect(wrapper.find('a')).toBePresent();
  });
});
