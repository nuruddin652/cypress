describe('Login Test', () => {
    it('login', () => {
      cy.visit('https://uat-crm.oss.net.bd/')
      cy.wait(5000)
      cy.get('header>div>div>a').contains('Login').click()
      cy.wait(5000)
      cy.get('div[class="signup-body"]').click()
      cy.wait(5000)
      //signup
      cy.get('input[name="username"]').type('sqatest1@ba-systems.com')
      cy.get('input[id="password"]').type('Sqa@!@#098_baT)')
      cy.get('input[id="kc-login"]').click()
      cy.url().should('include','users/profileinfo')
      //issue-traker
      cy.get('aside>div>section>ul>li>a[href="https://uat-crm.oss.net.bd/issue/lists"]').click()
      //cy.get('button[type="button"]>b').click()(u can used thi line)
      cy.get('button[type="button"]>b').contains('Add New Issue').click()
      cy.url().should('include','issue/create-new-issue')
      cy.get('input[value="Bug"]').click() //1st click 'BUG' then 'CR' Click
      cy.get('input[value="CR"]').click()
      cy.get('span[id="select2-project_id-container"]').click()
      cy.get('input[class="select2-search__field"]').type('The City Bank Ltd.{enter}')
      cy.get('select[name="milestone_id"]').select('2575')
      cy.get('input[id="issue_title"]').type('issue ticket')
      cy.get('div[aria-label="Rich Text Editor, main"]').type('New ticket assaign')
      cy.get('select[id="severity"]').select('Crash')
      cy.get('div>label').contains('High').click()
      cy.get('select[id="reproducibility"]').select('Nice To Have')
      cy.get('input[id="reproduction_steps"]').type('rendom testing')
      cy.get('span[id="select2-assigned_to_team-container"]').type('Myself{enter}')
      cy.get('div>label>div').contains('SMS').click()
      cy.get('div>label>div').contains('EBS').click()
      cy.get('div>label[class="col-md-3 col-xs-3 specialRadiodiv"]').contains('Attachment').click()
      cy.get('input[id="file_div"]').should('be.visible').attachFile({
        filePath: 'C:/Users/Nuruddin Rony/Downloads/test.pdf',
        fileName: 'test.pdf'
    })
  

    })
  })