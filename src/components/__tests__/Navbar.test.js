import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('Rockets link must exist', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText(/Rockets/)).toBeInTheDocument();
  });

  it('Missions link must exist', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText(/Missions/)).toBeInTheDocument();
  });

  it('My Profile link must exist', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText(/My Profile/)).toBeInTheDocument();
  });

  it('By click Rockets link should change to Rockets page', () => {
    render(<Router><Navbar /></Router>);
    const ClickedLink = screen.getByText(/Rockets/);
    fireEvent.click(ClickedLink);
    const url = window.location.href;
    expect(url).toBe(ClickedLink.href);
  });

  it('By click Missions link should change to Missions page', () => {
    render(<Router><Navbar /></Router>);
    const ClickedLink = screen.getByText(/Missions/);
    fireEvent.click(ClickedLink);
    const url = window.location.href;
    expect(url).toBe(ClickedLink.href);
  });

  it('By click My Profile link should change to My Profile page', () => {
    render(<Router><Navbar /></Router>);
    const checkbox = screen.getByText(/My Profile/);
    fireEvent.click(checkbox);
    const url = window.location.href;
    expect(url).toBe(checkbox.href);
  });
});
