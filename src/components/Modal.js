import '../styles/_modal.scss';
import React from 'react';

const SimpleModal = ({ }) => {
    return (
        <div className="container">
            <div className="bloc">
                <div className="header-modal">
                    <h2>Titre du Modal</h2>
                    <button>

                    </button>
                </div>
                <div className="body-modal">
                    <div className='container-img-modal'>
                        <div className="img-modal">
                        </div>
                    </div>
                    <div className='text-modal'>
                        <p>La brise matinale traversait doucement les arbres, créant une symphonie apaisante de feuilles bruissantes. Le ciel, encore teinté de rose, annonçait une journée paisible. Au loin, on pouvait entendre les oiseaux qui chantaient, célébrant l'arrivée du jour. Les premières lueurs du soleil se reflétaient sur le lac, dessinant des éclats dorés à la surface de l'eau calme. Les sentiers de terre, légèrement humides de la rosée, invitaient les promeneurs à une balade tranquille. À mesure que le soleil montait dans le ciel, la chaleur se faisait plus présente, réchauffant les pierres et les vieilles maisons du village.Dans les champs, les agriculteurs s'affairaient déjà, préparant la récolte qui s'annonçait prometteuse cette année. Le doux parfum des fleurs sauvages se mélangeait à celui du foin fraîchement coupé. Les enfants, encore insouciants, couraient après les papillons, leurs rires résonnant dans l'air. Les montagnes, imposantes et majestueuses, semblaient veiller sur la vallée, immobiles et éternelles. Non loin de là, une petite rivière serpentait paisiblement à travers les prairies, son clapotis régulier apportant une note de sérénité supplémentaire à ce tableau idyllique.Les gens du village, habitués à cette tranquillité, s'arrêtaient parfois pour échanger quelques mots ou simplement observer la beauté qui les entourait. Il y avait quelque chose de réconfortant dans la simplicité de ce lieu, où chaque jour semblait suivre un rythme immuable.</p>
                    </div>
                </div>
                <div className="footer-modal">
                    <div>
                        <h3>VOYAGER VERS</h3>
                    </div>
                    <div className='link-footer-modal'>
                        <div className='hyperlink-modal'>
                            <div className='img-footer-modal'></div>
                            <a href='#'>Titre article 1</a>
                        </div>
                        <div className='hyperlink-modal'>
                            <div className='img-footer-modal'></div>
                            <a href='#'>Titre article 2</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleModal;
