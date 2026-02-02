// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshWagmi title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshWagmi/i);
    expect(titleElement).toBeInTheDocument();
});
