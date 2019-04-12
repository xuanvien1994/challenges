import React from 'react';
import {
  Container,
} from './style';

const Layout = (props) => {
  return (
    <div>
      <Container>
        {props.children}
      </Container>
      <footer className="container d-flex text-white py-2">
        <p>All contents &copy; 2018 <a href="#">Tamboon Ract</a>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
