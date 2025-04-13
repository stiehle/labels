import { useContext } from "react";
import { LabelContext } from "../../context/LabelContext";
import { Label } from "../../types/Label";
import Qrcode from "./../../components/Qrcode/Qrcode";
import "./PrintView.scss";

function PrintView() {
  const { label } = useContext(LabelContext);

  return (
    <div className="printview">
      {label.map((item: Label) => {
        return (
          <div key={item.id} className="print-label">
            <div className="print-label__wrapper1">
              <div className="print-label__wrapper2">
                <div className="print-label__qrcode">
                  <div className="print-label__qrcode-image">
                    <Qrcode text={String(item.articleNumber)} />
                  </div>
                </div>
                <div className="print-label__articlenumber">
                  <p className="print-label__articlenumber-text">{item.articleNumber}</p>
                </div>
              </div>
              <p className="label__articletext">{item.articleText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PrintView;
