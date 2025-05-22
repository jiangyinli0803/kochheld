import "./Home.css";
import steakImg from "../../assets/images/Home.png";
import steakImg2 from "../../assets/images/Banner2.png";
import steakImg3 from "../../assets/images/Banner3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import ListCards from "../../components/listCards/ListCards.tsx";
import { sampleRecipes } from "../../components/listCards/ListCards.tsx";
import Container from "@mui/material/Container";

function Home() {
    return (
        <div className="home">
            <div className="overlay">
                <Carousel style={{width: '100vw'}} fade>
                    <Carousel.Item>
                        <img className="d-block w-100" src={steakImg} alt="Banner" />
                        <Link to="/recipe" className="recipe-button">
                            Rezept ansehen
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={steakImg2} alt="Banner" />
                        <Link to="/recipe" className="recipe-button">
                            Rezept ansehen
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={steakImg3} alt="Banner" />
                        <Link to="/recipe" className="recipe-button">
                            Rezept ansehen
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>
                <Container>
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

                </div>
                <div className="list-wrapper" style={{ margin: "3rem 0" }}>
                    <ListCards list={sampleRecipes} />
                </div>

                <section className="cooking-section">
                    <div className="image-container">
                        <img
                            src="https://images.unsplash.com/photo-1688413176280-918247cfe029?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    <div className="list-wrapper" style={{ margin: "3rem 0" }}>
                        <ListCards list={sampleRecipes} />

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


                </Container>
        </div>


    );
}

export default Home;
