import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Carousel4 from '../components/carousel4';
import FeatureNav from '../components/featureNav';
import FeaturesSection2 from '../components/featuresSection2';

import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  constructor(props) {
    super();
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Home"
            keywords={[
              `AusTex`,
              `Printing`,
              `Design`,
              `Promotions`,
            ]}
          />
          <Carousel4 />
          <main>
            <FeatureNav />
            <FeaturesSection2 />
            {/* <section style={{backgroundColor: '#ffffff'}} id="cardSection">
              <MDBContainer className="text-center">
                <h2>Lorem ipsum</h2>

                <p>
                  Lorem ipsum dolor sit amet, et nulla labore theophrastus eum,
                  at his ignota facilis nusquam. Ius at senserit similique,
                  nonumy minimum fabellas ei cum. Quot putant convenire ex nam.
                  Eum exerci dictas at, ex dico adversarium nec. Eam ornatus
                  neglegentur at, altera possit cum te, ne mea aliquip
                  voluptatum omittantur. An sed minim quaeque salutatus, id
                  adhuc nullam est, nam ut posidonium philosophia.
                </p>
                <p>
                  His te duis alienum eligendi, at nobis eleifend eam. Te vim
                  reque aperiam habemus, est harum virtute senserit ad, cu vim
                  debet feugiat docendi. Id mea nisl honestatis. Duis rebum
                  fierent mea ne, alii aliquip legendos usu ei.
                </p>
                <p>
                  Mei in aeque interpretaris. Ad sumo interesset eam, per cu
                  nemore invenire. Quis erroribus in mea. Est ex novum impedit
                  adipisci. Possit deserunt disputando eam ne.
                </p>
                <p>
                  Probatus gubergren inciderint te sea, ius ea libris fierent
                  facilisi. Splendide omittantur delicatissimi ut mei, vix ne
                  natum reprimique. Copiosae fabellas at vim, nusquam deleniti
                  sed eu. Partem laoreet mel id. An duo albucius partiendo
                  adolescens. Decore latine qui ne, an mei nobis ullamcorper.
                </p>
                <p>
                  Repudiare dissentias eos te, ex duo inermis iracundia
                  definiebas. Accumsan assueverit sed cu, autem doctus apeirian
                  eos ei. At veri tractatos sententiae mel, in unum movet pro.
                  Vidisse repudiare intellegam vim ne, nostro reprimique in duo.
                </p>
                <p>
                  Repudiare iracundia contentiones et eam, eros nemore noluisse
                  eu has, aliquip albucius partiendo his te. Te illud ullum
                  decore usu, cum ea integre singulis adipiscing, feugait
                  delicata sed no. Eos modo nostro civibus an, consul fastidii
                  ius ea. Ut eos dico vide cetero, id sea doming torquatos, id
                  agam verear his. Dicam affert nam in, elitr homero
                  conclusionemque ne usu, usu ex tractatos percipitur
                  liberavisse. Qui everti oportere ad, usu ceteros invidunt
                  deseruisse eu. Nam nihil eripuit democritum ut.
                </p>
                <p>
                  Te saperet molestiae eum. In urbanitas eloquentiam eum, cu
                  appetere deseruisse has. No meis aeterno tractatos vim, eam
                  eirmod vidisse ex. Has possim alienum deserunt ea, dolorem
                  expetendis id mea.
                </p>
                <p>
                  Natum solum gubergren duo cu, ei duo ferri commodo. Alia
                  partem no mei, mel id facilis nominati dissentias. Te ius
                  possim dolorem scriptorem, in modo fabulas consulatu ius, no
                  affert indoctum pri. Eu volumus abhorreant intellegam cum,
                  erant tempor constituto vix no. At vix impetus docendi
                  blandit, doming graecis aliquando nec at, nam ludus graecis
                  iudicabit id.
                </p>
                <p>
                  Ne accusam consulatu vim, pri no esse solet officiis, tation
                  putant reprimique at has. An quo probo nemore nominati. Mei in
                  aliquip lobortis, esse possit ad nam. Ea brute mundi scaevola
                  sea.
                </p>
                <p>
                  Dolor omittam duo in, meis mundi adolescens per eu. Discere
                  moderatius eu sed, cum ei elit apeirian similique, omittam
                  ancillae recteque et vis. Ei mei salutandi rationibus
                  efficiendi. Sapientem efficiantur complectitur nam ad, mea
                  mutat detraxit te, eu oblique numquam adipisci his.
                </p>
                <p>
                  Officiis splendide eos no, velit delenit eu usu, te sea dico
                  nonumy theophrastus. Tantas dictas bonorum duo cu. Eu populo
                  torquatos quaerendum mei, no sonet iuvaret consequat usu, ut
                  pro zril posidonium complectitur. Duo ludus dignissim ex, an
                  vim quis altera bonorum. Vidisse alienum tincidunt mel ex, cum
                  cu quot congue diceret, illud vidisse insolens est ne. Duo ut
                  facilisis definitionem, sit ei primis utroque expetenda, usu
                  quis accusamus deseruisse eu. Quo tempor interesset ex, qui
                  quidam volumus ne, ceteros epicurei democritum ea mei.
                </p>
                <p>
                  Prima dictas in vim. Mel eu zril causae voluptaria, sapientem
                  reformidans pri id, malorum impedit conclusionemque ei est.
                  Bonorum pertinacia complectitur eos ut, no viderer evertitur
                  signiferumque cum. In sit modus intellegebat, essent tibique
                  qui ut. Eum utinam fabulas ei, per sale inani id.
                </p>
                <p>
                  Tation delenit concludaturque sed in, sea ignota voluptua
                  persequeris in. Ne idque vulputate theophrastus cum, labitur
                  invidunt verterem no nam. Mel ne amet viris sapientem, omnes
                  lucilius id pro, purto facer aliquid et nec. Lorem accumsan
                  sed at. Facer postea numquam ad vel, nam saperet suscipiantur
                  at. Cu albucius tractatos his, his velit officiis assentior
                  at, ea mel liber iudico.
                </p>
                <p>
                  Dolorum philosophia an ius, commodo persequeris ea mea. No
                  fabulas ullamcorper vel. Congue aperiam evertitur eum ex,
                  alterum minimum nominati ei vel. Ei qui habeo congue aliquip,
                  sint virtute scriptorem est an.
                </p>
              </MDBContainer>

            </section> */}
          </main>
        </Layout>
      </>
    )
  }
}

export default App;
