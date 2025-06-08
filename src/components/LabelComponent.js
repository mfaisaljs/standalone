import { useStyles } from "../helper/hooks";
function LabelComponent({ id, item }) {
  const labelClass = useStyles({ ...item.css }, id);
  return (
    <section className="w-full relative">
      <div className={`${labelClass} w-full`}>{item.value || "Text"}</div>
    </section>
  );
}

export default LabelComponent;
