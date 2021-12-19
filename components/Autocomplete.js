import React from "react"
import throttle from 'lodash.throttle'
import onClickOutside from "react-onclickoutside"


function Empty() {
  return (
    <div className="p-2">
      <em>No results</em>
    </div>
  )
}

class Autocomplete extends React.PureComponent {
  static defaultProps = {
    throttleTime: 600,
    minLength: 2
  };

  state = {
    activeOption: 0,
    options: [],
    showOptions: false,
    userInput: ""
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction = (event) => {
    if(event.keyCode === 27) {
      this.setState({
        activeOption: 0,
        options: [],
        showOptions: false,
        userInput: ''
      });
    }
  }

  throttledSearch = throttle((q, resolve, reject) => {
    this.props.onSearch(q).then(resolve)
  }, this.props.throttleTime)

  onChange = (e) => {
    const userInput = e.currentTarget.value;

    this.setState({ userInput });

    if (userInput?.length < this.props.minLength) return

    this.throttledSearch(userInput, results => {
      this.setState({ options: results, showOptions: true })
    })
  };

  handleSelect = (option) => {
    if (this.props.onSelect) {
      this.props.onSelect(option)
    }

    this.setState({
      activeOption: 0,
      // options: [],
      showOptions: false,
      userInput: this.props.optionInputDisplay(option)
    });
  }

  onKeyDown = (e) => {
    const { activeOption, options } = this.state;

    if (e.keyCode === 13) { // enter key
      this.handleSelect(options[activeOption])
    } else if (e.keyCode === 38) { // up arrow
      if (activeOption === 0) return;

      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) { // down arrow
      if (activeOption - 1 === options.length) {
        return;
      }

      this.setState({ activeOption: activeOption + 1 });
    }
  };

  onClick = () => this.setState({ showOptions: true })

  handleClickOutside = () => this.setState({ showOptions: false })

  render() {
    const {
      onChange,
      handleSelect,
      onKeyDown,
      state: { activeOption, options, showOptions, userInput },
      props: { renderOption }
    } = this;

    let listComponent;

    if (showOptions && userInput) {
      listComponent = (
        <div className="max-h-48 w-full absolute top-12 overflow-y-scroll bg-gray z-20">
          {options.length === 0 ? (
            <Empty />
          ) : (
            <div className="flex flex-col">
              {options.map((option, index) =>
                React.createElement(this.props.renderOptionComponent, { option, index, active: index === activeOption, onClick: handleSelect })
                // renderOption({ option, index, active: index === activeOption, onClick: handleSelect })
              )}
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="relative">
        <input
          className="w-full"
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onClick={this.onClick}
          value={userInput}
          placeholder={this.props.placeholder || "Search"}
        />
        {listComponent}
      </div>
    );
  }
}

export default onClickOutside(Autocomplete)
