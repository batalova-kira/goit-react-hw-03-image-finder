import { Component } from 'react';
// import { Button } from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.styled';
import { SearchBar } from './Searchbar/Searchbar';
import { Layout } from './Layout';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    images: [],
    currentValue: '',
    currentPage: 1,
    isLoading: false,
    totalHits: 0,
  };

  handleFormSubmit = newValue => {
    this.setState({ currentValue: newValue, currentPage: 1, images: [] });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentValue !== this.state.currentValue ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ isLoading: true });
    }
    console.log(prevState.currentValue !== this.state.currentValue);
    try {
      const newImage = await fetchImages(
        `${this.state.currentValue}`,
        this.state.currentPage
      );
      this.setState(prev => ({ images: [...prev.images, ...newImage] }));
    } catch (error) {
      console.log('error', error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    console.log(this.state.images);
    return (
      <Layout>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {/* <ImageGalleryItem />
        <Button /> */}
      </Layout>
    );
  }
}
