import React from 'react';
import { hydrate, render } from 'react-dom';
import { CateringPage } from '../pages';

if (window)
  render(
    <CateringPage data={window.__DATA__} />,
    document.getElementById('app')
  );
