import React, { Component } from 'react';

class Action extends Component {
    render() {
        return (
          <div className="col-12">
            <div className="btn-group">
            </div><table className="table">
              <tbody><tr>
                  <td>
                    <div>Bulk Action:</div>
                  </td>
                  <td align="right">
                    <button type="button" className="btn btn-info">Done</button>
                    <button type="button" className="btn btn-danger">Remove</button>
                  </td>
                </tr>
              </tbody></table>
          </div>
          
        );
    }
}

export default Action;