import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const convertToWebp = async () => {
  try {
    await imagemin(['src/img/avatars/*.{jpg,png}'], {
      destination: 'src/img/avatars',
      plugins: [imageminWebp({ quality: 60 })],
    });

    await imagemin(['src/img/photos/*.{jpg,png}'], {
      destination: 'src/img/photos',
      plugins: [
        imageminWebp({quality: 60})
      ]
    });

    await imagemin(['src/img/histories/icon*.{jpg,png}'], {
      destination: 'src/img/histories',
      plugins: [
        imageminWebp({quality: 60})
      ]
    });

    console.log('Images convertation successfully completed!')
  } catch (error) {
    console.log(`Images convertation failed due to: ${error}`);
  }
};

convertToWebp();
