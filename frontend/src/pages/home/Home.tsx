import steakImg from "../../assets/images/Home.png";
import "./Home.css";
import {Link} from "react-router-dom";
// import bgImage from "../../assets/images/background.png";

function Home() {
    return (
        // <div
        //     className="recipe-card-wrapper"
        //     style={{
        //         backgroundImage: `url(${bgImage})`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //         backgroundRepeat: "no-repeat",
        //     }}
        // >
            <div className="home">
                <div className="overlay">
                    <div className="image-wrapper">
                        <img src={steakImg} alt="Banner" className="home-image" />
                    </div>
                    <Link to="/recipe" className="recipe-button">
                        Rezept ansehen
                    </Link>
                </div>
            <h2 className="trend-title">Gerade im Trend</h2>

            <div className="recipe-grid">
                <div className="recipe-row">
                    <div className="recipe-box">
                        <img src="https://images.unsplash.com/photo-1676300185165-3f543c1fcb72?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fisch mit Gemüse" />
                        <div className="recipe-content">
                            <h3>Fisch mit Gemüse</h3>
                            <p>Ein zartes, in der Pfanne gebratenes Fischfilet, serviert mit einer farbenfrohen Mischung aus saisonalem Gemüse wie Zucchini, Paprika und Karotten. Verfeinert mit frischen Kräutern, einem Spritzer Zitrone und einem Hauch Olivenöl – perfekt für ein leichtes und gesundes...</p>
                            <span>30 min</span>
                        </div>
                    </div>

                    <div className="recipe-box">
                        <img src="https://plus.unsplash.com/premium_photo-1675864532183-8f37e8834db5?q=80&w=2881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cheeseburger" />
                        <div className="recipe-content">
                            <h3>Cheeseburger</h3>
                            <p>Klassischer Cheeseburger mit einem saftigen Rindfleischpatty, geschmolzenem Cheddar-Käse, knackigem Salat, Tomaten und Gewürzgurken. Abgerundet mit einer rauchigen Sauce und serviert in einem weichen, gerösteten Burgerbrötchen – ein herzhafter Genuss für...</p>
                            <span>25 min</span>
                        </div>
                    </div>
                </div>

                <div className="recipe-row">
                    <div className="recipe-box">
                        <img src="https://images.unsplash.com/photo-1668609892638-2bee9a4d224b?q=80&w=3114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Himbeertorte" />
                        <div className="recipe-content">
                            <h3>Himbeertorte</h3>
                            <p>Diese Torte besteht aus einem fluffigen Biskuitboden, geschichtet mit einer cremigen Frischkäse-Himbeer-Füllung und bedeckt mit frischen Himbeeren. Der fruchtig-süße Geschmack macht sie zum Highlight jeder Kaffeetafel. Ideal für den Sommer...</p>
                            <span>50 min</span>
                        </div>
                    </div>

                    <div className="recipe-box">
                        <img src="https://images.unsplash.com/photo-1702648982253-8b851013e81f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Haferbrei mit Früchten" />
                        <div className="recipe-content">
                            <h3>Haferbrei mit Früchten</h3>
                            <p>Ein warmes, nährstoffreiches Frühstück aus feinen Haferflocken, gekocht in Milch oder Pflanzenmilch, garniert mit frischem Obst wie Bananen, Beeren und Äpfeln. Veredelt mit Nüssen, Chiasamen und einem Schuss Honig – ein gesunder Start in den Tag voller Energie...</p>
                            <span>15 min</span>
                        </div>
                    </div>
                </div>
            </div>
                <section className="cooking-section">
                    <div className="image-container">
                        <img
                            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Kochen mit Freunden"
                            className="cooking-image"
                        />
                    </div>

                    <div className="text-container">
                        <h2 className="title">Kochen mit Freunden</h2>
                        <p>
                            Gemeinsam kochen, lachen, probieren und genießen – das sind oft die
                            schönsten Momente im Alltag. Studien zeigen: Wenn wir zusammen essen,
                            fühlen wir uns weniger gestresst, mehr verbunden und glücklicher.
                        </p>
                        <p>
                            In diesem Artikel geht es um die Magie gemeinsamer Mahlzeiten,
                            einfache Rezeptideen für Gruppen und wie Kochen zur kleinen Auszeit
                            im hektischen Alltag wird. Perfekt für Wochenenden, Geburtstage oder
                            einfach so – weil gutes Essen besser schmeckt, wenn man es teilt.
                        </p>
                        <p>
                            Gemeinsam kochen, lachen, probieren und genießen – das sind oft die
                            schönsten Momente im Alltag. Studien zeigen: Wenn wir zusammen essen,
                            fühlen wir uns weniger gestresst, mehr verbunden und...
                        </p>
                    </div>
                </section>

        </div>
   // </div>
    );
}

export default Home;
