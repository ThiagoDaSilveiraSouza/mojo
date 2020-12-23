import React from 'react'

import { Switch, Route } from 'react-router-dom'

// components
import { Home } from './pages/home'
// import { Branding } from './pages/branding'
// import { Design } from './pages/design'
// import { Marketing } from './pages/marketing'
// import { SocialMedia } from './pages/social-media'
// import { Sites } from './pages/sites'
// import { ECommerce } from './pages/e-commerce'
// import { Editoracao } from './pages/editoracao'
// import { Fotos } from './pages/fotos'
// import { Page404 } from './pages/page-404'

// context

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/branding" component={Branding} />
      <Route exact path="/design" component={Design} />
      <Route exact path="/marketing-digital" component={Marketing} />
      <Route exact path="/social-media" component={SocialMedia} />
      <Route exact path="/sites" component={Sites} />
      <Route exact path="/e-commerce" component={ECommerce} />
      <Route exact path="/editoracao-diagramacao" component={Editoracao} />
      <Route exact path="/foto-video" component={Fotos} />
      <Route exact path="*" component={Page404} /> */}
    </Switch>
  )
}
