const paginas = Object.entries({
  "index.html": "Home",
  "sobre-nos.html": "Sobre nós",
  "catalogo.html": "Catálogo",
  "contato.html": "Contato",
  "login.html": "Login",
  "cadastro.html": "Cadastro"
});

describe('Testa as imagens nas páginas', () => {

  paginas.forEach(([url, titulo]) => {

    context(`Página: ${titulo}`, () => {

      beforeEach(() => {
          cy.visit(url);
      });

      it('Cada imagem deve ter um atributo alt contendo um texto descritivo', () => {

        cy.get('body').then(($body) => {

          if ($body.find('img').length > 0) {

            cy.get('img').each((img) => {

              cy.wrap(img).should('have.attr', 'alt').then((alt) => {

                cy.wrap(alt).its('length').should('be.greaterThan', 10);

              });

            });

          }

        });
          
      });

      // it('Cada imagem deve ter um atributo width', () => {

      //   cy.get('body').then(($body) => {

      //     if ($body.find('img').length > 0) {

      //       cy.get('img').each((img) => {

      //         cy.wrap(img).should('have.attr', 'width');

      //       });

      //     }

      //   });
          
      // });

      // it('Cada imagem deve ter um atributo height', () => {

      //   cy.get('body').then(($body) => {

      //     if ($body.find('img').length > 0) {

      //       cy.get('img').each((img) => {

      //         cy.wrap(img).should('have.attr', 'height');

      //       });

      //     }

      //   });
          
      // });
        
    });

  });
    
});