/* Album:

Cat,
Housemate,
Lover,
Travel

*/

/* 
Database Structure:
images:{
  imageId,
  imageSrc,
  album,
  visible,
  commentTitle,
  commentContent,
  userId
}

*/

const dummyImageList = [
  {
    imageId: 1,
    imageSrc: "/imagesrc/alexander-RBsLfRPPgMg-unsplash.jpg",
    album: "Cat",
    visible: true,
    commentTitle: "名古屋",
    commentContent: "loremloremloremloremlorem ",
    userId: "monica",
  },
  {
    imageId: 2,
    imageSrc: "/imagesrc/daniel-castellon-c1A7kBHgNZU-unsplash.jpg",
    album: "Cat",
    visible: true,
    commentTitle: "I love cat",
    commentContent: "she is my favourite",
    userId: "monica",
  },
  {
    imageId: 3,
    imageSrc: "/imagesrc/icarus-hoog-YGBM46_dspU-unsplash.jpg",
    album: "Travel",
    visible: true,
    commentTitle: "I love cat",
    commentContent: "she is my favourite",
    userId: "monica",
  },
  {
    imageId: 4,
    imageSrc: "/imagesrc/icarus-hoog-YGBM46_dspU-unsplash.jpg",
    album: "Travel",
    visible: true,
    commentTitle: "I love cat",
    commentContent: "she is my favourite",
    userId: "monica",
  },
  {
    imageId: 5,
    imageSrc: "/imagesrc/alexander-Szej7MMahQw-unsplash.jpg",
    album: "Lover",
    visible: true,
    commentTitle: "I love cat",
    commentContent: "she is my favourite",
    userId: "monica",
  },
  {
    imageId: 6,
    imageSrc: "/imagesrc/wolfgang-hasselmann-Z30EBohFtqU-unsplash.jpg",
    album: "Housemate",
    visible: true,
    commentTitle: "I love cat",
    commentContent: "she is my favourite",
    userId: "monica",
  },
];

const uniqueAlbums = [
  { albumName: "Cat" },
  { albumName: "Lover" },
  { albumName: "Travel" },
  { albumName: "Housemate" },
];

module.exports = { uniqueAlbums, dummyImageList };
