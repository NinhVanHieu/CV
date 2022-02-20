import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (
          <>
              <table className="table col-12" border="1" rules="rows" bgcolor="gray" width='100%'> 
                <tbody><tr>
                  <td width='80%'>
                    <div>Bulk Action:</div>
                  </td>
                  <td align="right"  width='10%'>
                    <button type="button" className="btn btn-primary">Done</button>                 
                  </td>
                  <td align="right"  width='10%'>
                  <button type="button" className="btn btn-danger">Remove</button>
                  </td>
                </tr>
              </tbody></table>
          </>
          
        );
    }
}

export default Action;