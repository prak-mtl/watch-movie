import "./style.css";

interface Props {
  label1: string;
  label2: string;
  choosenCategory: string;
  setChoosenCategory: (value: string) => void;
}

const Switch: React.FC<Props> = ({
  label1,
  label2,
  choosenCategory,
  setChoosenCategory,
}) => {
  return (
    <div className="label-rapper">
      <span
        className={`cursor-pointer ${
          choosenCategory === "1" ? "active-label" : "px-3"
        }`}
        onClick={() => setChoosenCategory("1")}
      >
        {label1}
      </span>
      <span
        className={`cursor-pointer ${
          choosenCategory === "2" ? "active-label" : "px-2"
        }`}
        onClick={() => setChoosenCategory("2")}
      >
        {label2}
      </span>
    </div>
  );
};
export default Switch;
