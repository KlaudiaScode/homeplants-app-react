import Nav from "../../Nav";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NavButton from "../NavButton";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { BrowserRouter } from 'react-router-dom';


/*jest.mock('react-router-dom', () => ({
  Link: 'Link',
  Route: ({ children, path }) => children({ match: path === '/somewhere' })
}))*/


describe('<Nav />', () => {
    it('should render NavLink', () => {
      render(<Nav />,{wrapper:BrowserRouter})
      const menulinks: HTMLAnchorElement[] = screen.getAllByRole("link");
      // render(
      //   <MemoryRouter>
      //       <Routes>
      //           <Route path="/" element={<NavButton NavIcon={HomeSharpIcon} ariaLabel={"home page"} isActive={false} />}/>
      //       </Routes>
      //   </MemoryRouter>,
      // )
      expect(menulinks[0]).toBeInTheDocument();
      expect(menulinks[0]).toHaveAttribute('href', '/');
      //expect(menulinks[0]).toBe(<NavButton NavIcon={HomeSharpIcon} ariaLabel={"home page"} isActive={false} />);
      screen.debug(menulinks[1]);
      expect(menulinks[0]).toHaveTextContent("𝓗𝓸𝓾𝓼𝓮𝓟𝓵𝓪𝓷𝓽𝓼");
      expect(menulinks[1]).toBeInTheDocument();
      expect(menulinks[1]).toHaveAttribute('href', '/');
      expect(within(menulinks[1]).getByRole('button',{name: 'home page'})).toBeInTheDocument();
    });
});
