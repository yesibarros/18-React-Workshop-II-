import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="col-xs-2">
      <section className= 'sidebar'>
        <img src="/juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <Link to="/albums">ALBUMS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item active">
            <Link to="/artists">ARTISTS</Link>
          </h4>
        </section>
      </section>
    </div>
);
