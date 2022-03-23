const sharp = require("sharp");

const widthFractions = 2;
const heightFractions = 2;

var width = "";
var height = "";
let left = 0;
let top = 0;
let counter = 0;
// const metadata = sharp("robo.png").metadata();
const metadata = sharp("watch.jpg").metadata();
metadata.then(async (result) => {
  console.log("Image width:", result.width);
  console.log("Image height:", result.height);

  width = parseInt(result.width / widthFractions);
  height = parseInt(result.height / heightFractions);

  console.log("Fractions width & height:==> ", width, height);
  if(width<100 || height<100)
  {
    console.log("Fractions can't be made on less than 100px");
  }
  else
  {
    for (let j = 0; j < heightFractions; j++) 
      {
        for (let i = 0; i < widthFractions; i++) {
          console.log("testing");
          console.log("left ===> ", left);
          console.log("top ===> ", top);

          console.log("Fractions: ", width, height, left, top);
          await sharp("watch.jpg")
            .extract({ width, height, left, top })
            .toFile(`watch-cropped-${counter}.png`);
          left += width;
          counter++;
        }
        top += height;
        left = 0;
      }
  }


 
});

