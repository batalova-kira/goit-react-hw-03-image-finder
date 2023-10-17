import { Component } from 'react';
import { Button } from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';
import { Layout } from './Layout';
import { fetchImages } from './api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    currentValue: '',
    page: 1,
    isLoading: false,
  };

  handleFormSubmit = newValue => {
    this.setState({ currentValue: newValue, page: 1, images: [] });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { currentValue, page } = this.state;
    if (prevState.currentValue !== currentValue || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const newImage = await fetchImages(
          `${this.state.currentValue}`,
          this.state.page
        );
        this.setState(prev => ({
          images: [...prev.images, ...newImage],
        }));
      } catch (error) {
        console.log('error', error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onClickMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {!isLoading && images.length >= 12 && (
          <Button onClickMore={this.onClickMore} />
        )}
      </Layout>
    );
  }
}
