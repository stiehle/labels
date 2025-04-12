import { BarcodeFormat, MultiFormatWriter } from "@zxing/library";
import "./Qrcode.scss";

function QrcodeImage() {
  function getQrcode() {
    let base64Image = "";
    try {
      const writer = new MultiFormatWriter();
      const qrCodeData = "123456 Your QR Code Data";
      const hints = new Map();
      hints.set("MARGIN", 1);
      const bitMatrix = writer.encode(qrCodeData, BarcodeFormat.QR_CODE, 200, 200, hints);

      const width = bitMatrix.getWidth();
      const height = bitMatrix.getHeight();
      const pixels = new Uint8ClampedArray(width * height * 4);
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const value = bitMatrix.get(x, y) ? 0 : 255;
          const index = (y * width + x) * 4;
          pixels[index] = value; //R
          pixels[index + 1] = value; //G
          pixels[index + 2] = value; //B
          pixels[index + 3] = 255; //A
        }
      }
      const imageData = new ImageData(pixels, width, height);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        base64Image = dataUrl.split(",")[1];
      }
    } catch (error) {
      console.error("Error generating QR code image:", error);
    }

    return base64Image;
  }

  return (
    <>
      <img src={`data:image/png;base64,${getQrcode()}`} alt="QR Code" />
    </>
  );
}

export default QrcodeImage;
