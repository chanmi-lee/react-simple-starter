import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // SearchBar 컴포넌트가 상속받는 Component 안의 constructor 함수를 호출

    this.state = { term: '' };
    // JavaScript 객체 state는 클래스 기반 컴포넌트에서 사용된다
    // 각각의 클래스 기반 컴포넌트는 자체 복사된 state를 가지고 있다
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
