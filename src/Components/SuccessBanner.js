import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';

function SuccessBanner({credentials}) {
  return (
    <>
      <Alert variant='success'>New User Created Successfully. Welcome {credentials.name}!</Alert>
    </>
  );
}

export default SuccessBanner;