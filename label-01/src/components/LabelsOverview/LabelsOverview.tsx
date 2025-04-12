import { useContext } from "react";
import { LabelContext } from "../../context/LabelContext";
import { Label } from "../../types/Label";

function LabelOverview() {
  const { label, labelDispatch } = useContext(LabelContext);

  return (
    <div className="labellist">
      <h2>Deine Etiketten</h2>
      {label.map((item: Label) => {
        return (
          <div key={item.id}>
            <p>Artikelnummer: {item.articleNumber}</p>
            <p>Artikeltext: {item.articleText}</p>
            <button onClick={() => labelDispatch({ type: "REMOVE_LABEL", label: item })}>Etikett löschen</button>
          </div>
        );
      })}
    </div>
  );
}

export default LabelOverview;
