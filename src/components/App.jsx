import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';
import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Button />
        <Searchbar />
        <Modal />
        <Loader />
        <ImageGalleryItem />
        <ImageGallery />
      </div>
    );
  }
}
