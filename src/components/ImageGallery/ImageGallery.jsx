import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { CardsList } from './ImageGalleryStuled';

// export class ImageGallery extends React.Component {
//   state = {
//     imagesData: [],
//     page: 0,
//   };

//   async componentDidMount() {
//     const images = await fetchImages({ per_page: 12 });
//     console.log(images);
//     this.setState({ imagesData: [...images] });
//   }

//   async componentDidUpdate(_, prevState) {
//     if (prevState.page !== this.state.page) {
//       const [...images] = await fetchImages({
//         per_page: 12,
//         page: this.state.page,
//       });
//       console.log(images);
//       this.setState({ imagesData: [...prevState.imagesData, ...images] });
//     }
//   }

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 12 }));
//   };

//   render() {
//     return (
//       <div>
//         <CardsList>
//           {this.state.imagesData.map(item => {
//             return <ImageGalleryItem key={item.id} {...item} />;
//           })}
//         </CardsList>
//         <Button click={this.handleLoadMore} />
//       </div>
//     );
//   }
// }

export const ImageGallery = ({ imagesData }) => {
  return (
    <div>
      <CardsList>
        {imagesData.map(item => {
          return <ImageGalleryItem key={item.id} {...item} />;
        })}
      </CardsList>
      {/* <Button click={this.handleLoadMore} /> */}
    </div>
  );
};
