import LabelInput from "../../components/LabelInput/Labelinput";
import LabelOverview from "../../components/LabelsOverview/LabelsOverview";
import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <LabelInput />
      <LabelOverview />
    </div>
  );
}

export default Main;
