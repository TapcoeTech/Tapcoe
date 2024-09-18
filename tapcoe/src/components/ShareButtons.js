import React from 'react';
import { 
  FacebookShareButton, 
  FacebookIcon, 
  WhatsappShareButton, 
  WhatsappIcon, 
  InstapaperShareButton, 
  InstapaperIcon 
} from 'react-share';

const ShareButtons = ({shareUrl}) => {
//   const shareUrl = 'https://yourwebsite.com';
  const title = 'Expierence our awesome event hosting platform Tapcoe!';

  return (
    <div>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <InstapaperShareButton url={shareUrl} title={title}>
        <InstapaperIcon size={32} round />
      </InstapaperShareButton>
    </div>
  );
};

export default ShareButtons;
