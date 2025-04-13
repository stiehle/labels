import { useContext } from "react";
import { LabelContext } from "../../context/LabelContext";
import { Label } from "../../types/Label";
import Qrcode from "../Qrcode/Qrcode";
import "./LabelsOverview.scss";

function LabelOverview() {
  const { label, labelDispatch } = useContext(LabelContext);

  return (
    <div className="labeloverview">
      <h2>Deine Etiketten</h2>
      {label.map((item: Label) => {
        return (
          <div key={item.id} className="label">
            <div className="label__options">
              <button onClick={() => labelDispatch({ type: "REMOVE_LABEL", label: item })}>Etikett löschen</button>
            </div>
            <div className="label__overview">
              <div className="label__wrapper1">
                <div className="label__wrapper2">
                  <div className="label__qrcode">
                    <div className="label__qrcode-image">
                      <Qrcode text={String(item.articleNumber)} />
                    </div>
                  </div>
                  <div className="label__articlenumber">
                    <p className="label__articlenumber-text">{item.articleNumber}</p>
                  </div>
                </div>
                <p className="label__articletext">{item.articleText}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LabelOverview;
