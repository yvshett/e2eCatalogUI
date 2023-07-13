import React from 'react';

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="bg-carbon-tint2 p-2 fixed-bottom text-muted">
        <div class="col-xs-12 spark-font-75">
          <small>© Intel Corporation<span class="mx-2">|</span>
            <a href="https://www.intel.com/content/www/us/en/legal/trademarks.html" target="_blank" rel="noopener noreferrer">Legal Notices</a><span class="mx-2">|</span>
            <a href="https://employeecontent.intel.com/content/corp/Global_Employee_and_Global_Contingent_Worker_Privacy.html" target="_blank" rel="noopener noreferrer">Employee and Contingent Worker Privacy</a>
          </small>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer;
