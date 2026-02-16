import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights">
            <h2>Non c'è mai stato un momento migliore per fare un upgrade.</h2>
            <h3>Ecco cosa ottieni con il nuovo MacBook Pro.</h3>

            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Svolgi attività impegnative fino a 9.8x più velocemente.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>Straordinario <br />
                            display a <br/>
                            Retina liquida XDR.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Costruito per <br />
                            <span>Apple Intelligence.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>Fino a
                            <span className="green-gradient">{' '}più di 14 ore{' '}</span>
                            sulla durata della battery.
                            <span className="text-dark-100">{' '}(Più di 24 ore totali.)
                            </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights
