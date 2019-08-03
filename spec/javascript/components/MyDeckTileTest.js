import MyDeckTile from '../../../app/javascript/react/components/MyDeckTile'

describe('MyDeckTile', () => {
  let wrapper;
  let handleDelete;

  beforeEach(() => {
    spyOn(MyDeckTile.prototype, 'handleDelete').and.callThrough();

    wrapper = mount(
      <MyDeckTile
        key={1}
        id={1}
        deckName={"Test Deck"}
        flashcards={[{front: "front", back: "back"}]}
        private={false}
        handleDelete={handleDelete}
      />
    )
  });

  describe('handleDelete', () => {
   it('should be invoked when the handleDelete property of the MyDeckTile component is called', () => {
     wrapper.find(MyDeckTile).props().onClick();
     expect(MyDeckTile.prototype.handleClick).toHaveBeenCalled();
   });

   it('should change the babyElephant property in the state to the opposite boolean value', () => {
     wrapper.find(Elephant).props().onClick();
     expect(wrapper.state()).toEqual({ babyElephant: true });
   });
 });

});
