// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// Database instance.
var db;


angular.module('starter', ['ionic',
                           'ngCordova',
                           'ngMask',
                           'controller.DadosPessoais',
                           'controller.Contato',
                           'controller.Revisao',
                           'controller.Cotacao',
                           'controller.Avaliacao',
                           'controller.Lojas',
                           'controller.MapaLoja'])

.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
    db = $cordovaSQLite.openDB("cliente_roma.db");
    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Cliente(idCliente INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Nome TEXT NOT NULL, Email TEXT NOT NULL, Telefone TEXT NOT NULL, Celular TEXT NOT NULL , Cidade TEXT NOT NULL, UF CHAR(2) NOT NULL)');
  });

})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
   
  })

  
  .state('app.revisao', {
    url: '/revisao',
    views: {
      'menuContent': {
        templateUrl: 'templates/revisao.html',
        controller : 'Revisao'
      }
    }
  })

  .state('app.pecas', {
    url: '/pecas',
    views: {
      'menuContent': {
        templateUrl: 'templates/pecas.html',
        controller : 'Cotacao'
      }
    }
  })

   .state('app.detalhesLoja', {
    url: '/detalhesLoja/:nomeLoja/:latitude/:longitude/:telefone',
    views: {
      'menuContent': {
        templateUrl: 'templates/detalhesLoja.html',
        controller : 'MapaLoja'
      }
    }
  })

  .state('app.contato', {
    url: '/contato',
    views: {
      'menuContent': {
        templateUrl: 'templates/contato.html',
        controller: 'Contato'
      }
    }
  })
  .state('app.dadosPessoais', {
    url: '/dadosPessoais',
    views: {
      'menuContent': {
        templateUrl: 'templates/dadosPessoais.html',
        controller: 'DadosPessoaisCtrl'
      }
    }
  })
  .state('app.avaliacaoVeiculo', {
    url: '/avaliacaoVeiculo',
    views: {
      'menuContent': {
        templateUrl: 'templates/avaliacaoVeiculo.html',
        controller : 'Avaliacao'
      }
    }
  }).state('app.redesSociais', {
    url: '/redesSociais',
    views: {
       'menuContent': {
        templateUrl: 'templates/redesSociais.html'
      }
    }
  })
  .state('app.lojas', {
    url: '/lojas',
    views: {
       'menuContent': {
        templateUrl: 'templates/lojas.html',
        controller : 'Lojas'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/lojas');
});
