import { render,screen,fireEvent, } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Login from "../Components/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";

describe('Login', () => {
 
  it('renders without crashing', () => {
    render(<Login/>);
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
  });
});