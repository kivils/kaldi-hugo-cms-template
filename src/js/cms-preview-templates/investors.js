import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    return <div>
      <div className="mw7 center">
        <div className="mw6 ph3 mb3">
          <h3 className="f3 b lh-title mb2">{entry.getIn(["data", "about", "heading"])}</h3>
          <p>{entry.getIn(["data", "about", "text"])}</p>
        </div>
      </div>
    </div>;
  }
}
