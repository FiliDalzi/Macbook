import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .to('.mask img', {
                    transform: 'scale(1.1)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introduce {" "}
                                <span className="text-white">
                                    M4, la nuova generazione di Apple silicon
                                </span>
                                . Potenza M4
                            </p>
                            <p>
                                Supporta Apple Intelligence su iPad Pro, così puoi scrivere, creare e realizzare di più con facilità. Il tutto in un design incredibilmente sottile, leggero e potente.
                            </p> 
                            <p>
                                Un nuovissimo motore di visualizzazione offre precisione, accuratezza dei colori e luminosità mozzafiato. E una GPU di nuova generazione con ray tracing accelerato dall'hardware porta la grafica a livello di console a portata di mano.
                            </p>
                            <p className="text-primary">Ulteriori informazioni su Apple Intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Fino a</p>
                            <h3>4x più veloce</h3>
                            <p>prestazioni di rendering professionali superiori a M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Fino a</p>
                            <h3>1.5x più veloce</h3>
                            <p>Prestazioni della CPU superiori a M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Showcase
