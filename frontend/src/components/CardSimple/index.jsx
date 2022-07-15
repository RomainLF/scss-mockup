import SCardSimple from "./style";

export default function CardSimple() {
  return (
    <SCardSimple>
      <section className="mainCor">
        <div className="nameAndProfit">
          <h1> Champ de patate</h1>
          <div className="profits">
            Profits : <span>850</span>€ /ans
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Consomation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Particules : </td>
              <td className="qte">
                200
                <span>d./kg de produit</span>
              </td>
            </tr>
            <tr>
              <td>Eau : </td>
              <td className="qte">
                200
                <span> m3/kg de produit</span>
              </td>
            </tr>
            <tr>
              <td>Energie : </td>
              <td className="qte">
                200
                <span> MJ/kg produit</span>
              </td>
            </tr>
            <tr>
              <td>Sol : </td>
              <td className="qte">
                200
                <span> Pt/kg de produit</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </SCardSimple>
  );
}
