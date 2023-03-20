/* eslint-disable no-console */
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const convertToWebp = async () => {
  try {
    await imagemin(['src/assets/img/avatars/*.{jpg,png}'], {
      destination: 'src/assets/img/avatars',
      plugins: [imageminWebp({ quality: 60 })],
    });

    await imagemin(['src/assets/img/photos/*.{jpg,png}'], {
      destination: 'src/assets/img/photos',
      plugins: [imageminWebp({ quality: 60 })],
    });

    await imagemin(['src/assets/img/histories/icon*.{jpg,png}'], {
      destination: 'src/assets/img/histories',
      plugins: [imageminWebp({ quality: 60 })],
    });

    console.log('Images convertation successfully completed!');
  } catch (error) {
    console.log(`Images convertation failed due to: ${error}`);
  }
};

convertToWebp();
