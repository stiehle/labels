import LabelInput from "../../components/LabelInput/Labelinput";
import LabelOverview from "../../components/LabelsOverview/LabelsOverview";
import "./Main.scss";

function Main() {
  return (
    <div>
      <p>This is the main page.</p>
      <LabelInput />
      <LabelOverview />
    </div>
  );
}

export default Main;
