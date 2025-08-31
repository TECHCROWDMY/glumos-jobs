import { Header, Footer } from '../components';
import TermsDoc from '../components/TermsDoc';

function TermsPage() {

  return (
    <>
        <Header fixed={true} />
        <TermsDoc />
        <Footer />
    </>
  )
}

export default TermsPage;