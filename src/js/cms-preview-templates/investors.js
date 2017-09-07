import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
      const {entry, getAsset, widgetFor} = this.props;

      return <div>
        <h2>{ entry.getIn(["data", "about", "heading"]) }</h2>
        <div>{ widgetsFor("text") }</div>
    </div>;
  }
}
