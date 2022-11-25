import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';

function ErrorBanner({failure}) {
  return (
    <>
      <Alert variant='danger'>User Creatation Failed! Status:{failure.status}</Alert>
    </>
  );
}

export default ErrorBanner;