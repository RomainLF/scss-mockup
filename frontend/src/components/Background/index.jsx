import CardSimple from "@components/CardSimple";
import SBackground from "./style";

export default function Background() {
  return (
    <SBackground>
      <section className="mainS">
        <CardSimple />
      </section>
      <div className="litCircle"> </div>
    </SBackground>
  );
}
