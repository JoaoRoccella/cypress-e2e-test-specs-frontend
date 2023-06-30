
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

      it('Cada imagem deve ter um atributo ALT contendo um texto descritivo', () => {

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

      it('Cada imagem deve ter um atributo SRC válido', () => {

        cy.get('body').then(($body) => {

          if ($body.find('img').length > 0) {

            cy.get('img').each((imagem) => {

              cy.request({
                url: imagem.attr('src'),
                failOnStatusCode: true
              });

              cy.log(imagem.attr('src'));

            });

          }

        });
          
      });

    });

  });
    
});