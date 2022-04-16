import { Component } from 'react';
import ImageGallery from './imageGallery/ImageGallery';
import { Searchbar } from './searchbar/Searchbar';
import Button from './button/Button';
import Loader from './loader/Loader';

export class App extends Component {
  state = {
    searchValue: '',
    pictures: [],
  };

  handleFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchValue={this.state.searchValue} />
        {/* <Button /> */}
        {/* <Loader /> */}
      </div>
    );
  }
}
