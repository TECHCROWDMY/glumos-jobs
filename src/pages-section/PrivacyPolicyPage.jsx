import { Header, Footer } from '../components';
import PrivacyDoc from '../components/PrivacyDoc';

function PrivacyPolicyPage() {

  return (
    <>
        <Header fixed={true} />
        <PrivacyDoc />
        <Footer />
    </>
  )
}

export default PrivacyPolicyPage;