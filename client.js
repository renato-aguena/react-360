// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import { ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('react_360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // // Load the initial environment
  // r360.compositor.setBackground('./static_assets/360_world.jpg', {
  //   format: '2D'
  // });


  // Creating a Video Player
  const player = r360.compositor.createVideoPlayer('myplayer');
  // Set the video to be played, and its format
  player.setSource('./static_assets/2d.mp4', '2D', 'mp4');
  // To play a video as your background, reference it by its unique id
  r360.compositor.setBackgroundVideo('myplayer');
  player.play();
}

window.React360 = { init };
