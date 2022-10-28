import logo from "./img/logo.svg";
import "./App.css";
import about from "./img/about.jpg";
import bicycle1 from "./img/bicycle1.jpg";
import bicycle2 from "./img/bicycle2.jpg";
import bicycle3 from "./img/bicycle3.jpg";
import mainvisual from "./img/mainvisual.jpg";

function App() {
  return (
    <body>
      <header className="head">
        <h1>
          <img src={logo} className="logo" />
        </h1>
        <ul className="abai">
          <li>about</li>
          <li>bicycle</li>
        </ul>
      </header>

      <main>
        <div>
          <img src={mainvisual} />
        </div>

        <section className="sec">
          <h2 className="abadango">about</h2>
          <div className="kakeru">
            <img src={about} className="kaketyan" />
             <div>
             <h3>KAKERU MIYACH</h3>
             <p>texttexttext</p>
             </div>
          </div>
        </section>

        <section className="sec2">

          <h2 className="ecobuy">Bicycle</h2>
          <ul className="bicy">
            <li>
              <img src={bicycle1} className="bic1" />
              <h3 className="tie">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img src={bicycle2} className="bic2" />
              <h3>タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img src={bicycle3} className="bic3"/>
              <h3>タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
          </ul>
        </section>

      </main>
      <footer></footer>
    </body>
  );
}

export default App;
