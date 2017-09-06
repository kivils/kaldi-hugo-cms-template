import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
      const {entry, getAsset, widgetFor} = this.props;

      return <div>
        <div className="mw6 ph3 mb3">
            <h3 className="f3 b lh-title mb2">{entry.getIn(["data", "about", "heading"])}</h3>
            <div>{entry.getIn(["data", "about", "text"])}</div>
        </div>
        <div className="mw6 ph3 mb3">
            <div>{ widgetFor("aboutText") }</div>
        </div>
    </div>;
  }
}
