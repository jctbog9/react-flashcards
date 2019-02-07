import ToggleSwitch from '../../../app/javascript/react/components/ToggleSwitch'

describe('ToggleSwitch', () => {
  let wrapper;
  let handleChange;

  beforeEach(() => {

    spyOn(ToggleSwitch.prototype, 'handleChange').and.callThrough();

    wrapper = mount(

      <ToggleSwitch
        onChange={handleChange}
        toggleStatus={true}
      />
    )
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ checked: true });
  })

  it('should have the specified changed state when switch is toggled', () => {
    wrapper.setState({ checked: false })
    expect(wrapper.state()).toEqual({ checked: false });
  })

});
