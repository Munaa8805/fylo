import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

const Social = () => {
  const shareUrl = `https://fylo-beta-blond.vercel.app/`;
  return (
    <div className="flex justify-center pb-10 space-x-3">
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton
          url={shareUrl}
          quote="Fylo"
          hashtag="#FyloForService"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} quote="Fylo" hashtag="#Fylo">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default Social;
