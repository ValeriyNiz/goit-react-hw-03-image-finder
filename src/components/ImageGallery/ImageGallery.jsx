import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = props => {
  return (
    <ul className={styles.ImageGallery}>
      {props.images.map(image => {
        return (
          <ImageGalleryItem
            onClickItem={() => props.onClickItem(image.id)}
            key={image.id}
            src={image.webformatURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      webformatURL: PropTypes.string,
    })
  ),
};

export default ImageGallery;
