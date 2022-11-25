import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import CreateUserForm from '../CreateUserForm';

test('Should render CreateUserForm component', () => {
    render(<CreateUserForm />);
    const createUserForm = screen.getByTestId('createUserForm');
    expect(createUserForm).toBeInTheDocument();
})

test('matches snapshot', () => {
    const tree = renderer.create(<CreateUserForm />).toJSON();
    expect(tree).toMatchSnapshot();
})