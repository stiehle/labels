import "./Main.scss";
import { BarcodeFormat, BitMatrix, MultiFormatWriter } from "@zxing/library";

function Main() {
  // const codeWriter = new MultiFormatWriter();
  // const hints = new Map();
  // hints.set("CHARACTER_SET", "UTF-8");
  // hints.set("ERROR_CORRECTION", "L");
  // hints.set("MARGIN", 1);
  // hints.set("WIDTH", 200);
  // hints.set("HEIGHT", 200);
  // hints.set("QR_VERSION", 1);
  // hints.set("QR_EC_LEVEL", "L");
  // hints.set("QR_MODE", "BYTE");
  // hints.set("EncodeHintType.QR_VERSION", 3);

  // hints.set(BarcodeFormat.QR_CODE, true);
  // console.log(hints);

  // const mycode = codeWriter.encode("Hello World", BarcodeFormat.QR_CODE, 200, 200, hints);
  // try {
  //   const bitMatrix: BitMatrix = codeWriter.encode("Hello World", BarcodeFormat.QR_CODE, 200, 200, hints);
  //   const width = bitMatrix.getWidth();
  //   const height = bitMatrix.getHeight();
  //   const pixels = new Uint8ClampedArray(width * height * 4);
  //   for (let y = 0; y < height; y++) {
  //     for (let x = 0; x < width; x++) {
  //       const value = bitMatrix.get(x, y) ? 0 : 255;
  //       const index = (y * width + x) * 4;
  //       pixels[index] = value; // R
  //       pixels[index + 1] = value; // G
  //       pixels[index + 2] = value; // B
  //       pixels[index + 3] = 255; // A
  //     }
  //   }
  //   const imageData = new ImageData(pixels, width, height);
  //   const canvas = document.createElement("canvas");
  //   canvas.width = width;
  //   canvas.height = height;
  //   const ctx = canvas.getContext("2d");
  //   if (ctx) {
  //     ctx.putImageData(imageData, 0, 0);
  //     const dataUrl = canvas.toDataURL("image/png");
  //     const base64 = dataUrl.split(",")[1];
  //     console.log(base64);
  //     // Do something with the base64 string, e.g., set it to state or use it directly
  //   }
  // } catch (error: any) {
  //   console.error("Error generating QR code:", error);
  // }

  function getQrcode() {
    const writer = new MultiFormatWriter();
    //let matrix: BitMatrix | null = null;
    try {
      // Ensure the data and encoding hints are correctly formatted
      const qrCodeData = "Your QR Code Data";
      const hints = new Map();
      hints.set("MARGIN", 1); // Example hint, adjust as needed
      const bitMatrix = writer.encode(qrCodeData, BarcodeFormat.QR_CODE, 200, 200, hints);

      // Process the generated bitMatrix (e.g., render it)
      console.log(bitMatrix);
    } catch (error) {
      console.error("Error encoding QR code:", error);
    }
    return BitMatrix;
  }

  // const matrix = getQrcode();
  // console.log(matrix);

  // Generate the base64 image string for the QR code
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

  return (
    <div>
      <h1>Main</h1>
      <p>This is the main page.</p>
      <img src={`data:image/png;base64,${base64Image}`} alt="QR Code" />
    </div>
  );
}

export default Main;
