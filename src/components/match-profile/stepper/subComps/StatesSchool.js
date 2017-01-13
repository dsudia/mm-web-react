import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class StatesSchool extends Component {
  state = {
    dataSource: [
        "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
    ],
  };

  handleUpdateInput = (value) => {
    localStorage.setItem(`states`, value)
  };

  render() {
    return (
        <AutoComplete
          hintText="Two Letter Abbrev (i.e. CO)"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
    );
  }
}