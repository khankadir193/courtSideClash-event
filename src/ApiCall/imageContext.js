import { baseUrl } from "../ApiCall/ApiComp";

export function rewGet(rewDesc) {
  var rewImg;
  rewDesc = rewDesc.toLowerCase();

  if (rewDesc?.includes("raging bull profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/valentineFrameUser.png";
  } else if (rewDesc?.includes("spaceship entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/spaceship.png";
  } else if (rewDesc?.includes("brave heart profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/braveHeart.png";
  } else if (rewDesc?.includes("hero")) {
    rewImg = baseUrl + "/streamkar/rewards/heroEntrance.png";
  } else if (rewDesc?.includes("beansbag")) {
    rewImg = baseUrl + "/streamkar/rewards/beanbag.png";
  } else if (rewDesc?.includes("ballpark audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/ballParkTheme.png";
  } else if (rewDesc?.includes("water splash")) {
    rewImg = baseUrl + "/streamkar/rewards/WaterSplashFrame.png";
  } else if (rewDesc?.includes("royal carriage")) {
    rewImg = baseUrl + "/streamkar/rewards/royal.png";
  } else if (rewDesc?.includes("firebrand profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/firebrand-Profile-frame.png";
  } else if (rewDesc?.includes("gold luxury entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/goldLuxury.png";
  } else if (rewDesc?.includes("gems")) {
    rewImg = baseUrl + "/streamkar/rewards/gems.png";
  } else if (rewDesc?.includes("thunder audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/thunderAudio.png";
  } else if (rewDesc?.includes("kingspin entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/kingspin.png";
  } else if (rewDesc?.includes("rusty ranger entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rustyRanger.png";
  } else if (rewDesc?.includes("fish world audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/fishWorldRoomskin.png";
  } else if (rewDesc?.includes("fish world audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/fishWorldRoomskin.png";
  } else if (rewDesc?.includes("bunny profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/bunnyFrame.gif";
  } else if (rewDesc?.includes("king of road audio theme")) {
    rewImg = baseUrl + "/streamkar/rewards/kingOfRoadRoomSkin.png";
  } else if (rewDesc?.includes("fury profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/furyFrame.png";
  } else if (rewDesc?.includes("rider entrance")) {
    rewImg = baseUrl + "/streamkar/rewards/rider.png";
  } else if (rewDesc?.includes("svip")) {
    rewImg = baseUrl + "/streamkar/rewards/svip.png";
  } else if (rewDesc?.includes("fury profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/furyFrame.png";
  } else if (rewDesc?.includes("fury profile frame")) {
    rewImg = baseUrl + "/streamkar/rewards/furyFrame.png";
  } else if (rewDesc?.includes("trophies")) {
    rewImg = baseUrl + "/streamkar/rewards/trophies.png";
  } else {
    rewImg = baseUrl + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
