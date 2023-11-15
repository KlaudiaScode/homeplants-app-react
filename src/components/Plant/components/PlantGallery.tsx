import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function PlantGallery() {
  return (
    <ImageList sx={{ width: 1500, height: 330, gap: 100 }} cols={3} rowHeight={330}>
      {itemData.map((item) => (
        <ImageListItem sx={{ width: 400 }} key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ); 
}

const itemData = [
  {
    img: 'https://cdn.shopify.com/s/files/1/1706/1307/products/Pilea-peperomioides-Chinese-Money-Plant-Kian-Metal-Plant-Pots-Set-of-3-Sky-Burn.jpg?v=1666866139',
    title: '',
  },
  {
    img: 'https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/chinese-evergreen-plant-aglaonema-shutterstock-com_15962.jpg',
    title: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
  },
  {
    img: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a',
    title: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1537039557108-4a42c334fd5e',
    title: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1509223197845-458d87318791',
    title: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea',
    title: '',
  },
  {
    img: 'https://jomostudio.com/cdn/shop/products/ZamioculcasZamiifolia6nb_grande.jpg?v=1614725101',
    title: '',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1675342778960-7829daa0fba8',
    title: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1551970634-747846a548cb',
    title: '',
  },
  {
    img: 'https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1627197230/vendor/2864/catalog/product/2/0/20200304122155_file_5e5ef4a3ccb60_5e5ef7b7cd5fa_600b664eac11a._600b6650be20c..jpg',
    title: '',
  },
];