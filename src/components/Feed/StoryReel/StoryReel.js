import React from "react";
import Story from "./Story/Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://img1.ak.crunchyroll.com/i/spire1/c67ff139983066e1375e3657096bc0281404694421_large.jpg"
        profileSrc="https://img1.ak.crunchyroll.com/i/spire3/b65f48a5273f8634a7068d90e1ba0b441588641802_large.png"
        title="Monkey D. Luffy"
      />
      <Story
        image="https://steamuserimages-a.akamaihd.net/ugc/824631924895502416/EDA3E2F99C4F73F1CDB7C6FEDF83FF2F45A07857/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        profileSrc="https://avatarfiles.alphacoders.com/180/thumb-180404.jpg"
        title="Portgas D. Ace"
      />
      <Story
        image="https://steamuserimages-a.akamaihd.net/ugc/824631924899990720/23D1DDFA178E464D34FC32CA7C2D7F0FA5DC1361/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        profileSrc="https://avatarfiles.alphacoders.com/321/thumb-321776.jpg"
        title="Shanks"
      />
      <Story
        image="http://pm1.narvii.com/6688/d03405ea7fbdb197236d3cc2e3c5d59017e0128e_00.jpg"
        profileSrc="https://oppw4-20-en.bn-ent.net/images/character/blackbeard/thumb_newworld.png"
        title="Blackbeard"
      />
      <Story
        image="https://avatarfiles.alphacoders.com/295/thumb-295379.jpg"
        profileSrc="https://steamuserimages-a.akamaihd.net/ugc/952968258411893454/24155153615048EE74334D02FE2BA2DBCF24036B/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        title="Nami"
      />
    </div>
  );
}

export default StoryReel;
